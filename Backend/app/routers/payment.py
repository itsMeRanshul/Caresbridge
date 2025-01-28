from fastapi import APIRouter, Depends, HTTPException,Request
from sqlalchemy.orm import Session
from app import crud, schemas
from app.database import get_db
from app.model import Payment,PaymentStatusEnum,Order
import razorpay
from app.config import RAZORPAY_SECRET,RAZORPAY_KEY_ID
from razorpay.errors import SignatureVerificationError
router = APIRouter()




@router.post("/payment/initiate", response_model=schemas.Payment)
def initiate_payment(payment: schemas.PaymentCreate, db: Session = Depends(get_db)):
    """
    Initiates a Razorpay payment for an order.

    Args:
        payment: The payment data containing order_id, payment_method, and payment_reference.
        db: The database session object.

    Returns:
        The created payment object with Razorpay order ID.
    """
    return crud.create_payment(db=db, payment=payment)

@router.post("/payment/verify")
async def verify_payment(request: Request, db: Session = Depends(get_db)):
    """
    Verifies the Razorpay payment callback.
    """
    try:
        # Get payment data from the request
        data = await request.json()
        print("Payment verification data:", data)
        payment_id = data.get("razorpay_payment_id")
        order_id = data.get("razorpay_order_id")
        signature = data.get("razorpay_signature")

        # Verify the payment signature
        try:
            client = razorpay.Client(auth=(RAZORPAY_KEY_ID, RAZORPAY_SECRET))
            print("Razorpay client initialized successfully")
        except Exception as e:
            print(f"Error initializing Razorpay client: {e}")
            raise HTTPException(status_code=500, detail="Razorpay client initialization failed")

        params_dict = {
            "razorpay_order_id": order_id,
            "razorpay_payment_id": payment_id,
            "razorpay_signature": signature,
        }
        print("Params for signature verification:", params_dict)

        try:
            client.utility.verify_payment_signature(params_dict)
        except SignatureVerificationError:
            raise HTTPException(status_code=400, detail="Invalid Razorpay signature")

        # Query payment from database
        try:
            print(f"Querying payment with order_id: {order_id}")
            db_payment = db.query(Payment).filter(
                Payment.razorpay_order_id == order_id
            ).first()

            db_order = db.query(Order).filter(Order.order_id == db_payment.order_id).first()


            if not db_payment:
                print(f"No payment found for order_id: {order_id}")
                raise HTTPException(status_code=404, detail="Payment not found")
        except Exception as query_error:
            print(f"Database query failed: {query_error}")
            raise HTTPException(status_code=500, detail="Database query error")

        # Update payment status in the database
        try:
            db_payment.status =PaymentStatusEnum.Completed.value
            db_order.payment_status=PaymentStatusEnum.Completed.value

            db_payment.razorpay_payment_id = payment_id
            db_payment.razorpay_signature = signature
            db.commit()
            db.refresh(db_payment)
            return {"message": "Payment successful"}
        except Exception as db_error:
            print(f"Database update failed: {db_error}")
            raise HTTPException(status_code=500, detail="Database update failed")

    except Exception as e:
        print(f"Exception occurred during payment verification: {e}")
        raise HTTPException(status_code=500, detail=f"Payment verification failed: {e}")