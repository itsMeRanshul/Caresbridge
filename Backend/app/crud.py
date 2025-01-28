from sqlalchemy.orm import Session
from app.model import User, Product,Payment,PaymentStatusEnum
from app.schemas import UserCreate, ProductCreate,PaymentCreate
from fastapi import HTTPException
from app.auth import hash_password
from fastapi import UploadFile
import razorpay
from app.config import RAZORPAY_SECRET,RAZORPAY_KEY_ID
import os
# User Operations
def create_user(db: Session, user: UserCreate):
    """Create a new user with a hashed password."""
    hashed_password = hash_password(user.password)
    db_user = User(
        name=user.name,
        email=user.email,
        password=hashed_password,
        phone_no=user.phone_no,
        address=user.address,
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def get_user(db: Session, email: str):
    """Fetch a user by email."""
    return db.query(User).filter(User.email == email).first()

def get_user_by_user_id(db: Session, user_id: int):
    """
    Fetch a user from the database by user_id.

    Args:
        db (Session): SQLAlchemy database session.
        user_id (int): The ID of the user to fetch.

    Returns:
        User: The user object if found, or None if not found.
    """
    return db.query(User).filter(User.user_id == user_id).first()

# Product Operations
def get_products(db: Session, skip: int = 0, limit: int = 100):
    """Fetch all products with pagination."""
    products = db.query(Product).offset(skip).limit(limit).all()
    return products  # This will return a list of Product objects that include 'product_id'

def get_product(db: Session, product_id: int):
    """Fetch a product by ID."""
    return db.query(Product).filter(Product.product_id == product_id).first()


def create_product(db: Session, product: ProductCreate):
    """Create a new product with an image URL."""
    # No need to handle file uploads; directly use the provided image URL
    db_product = Product(
        name=product.name,
        description=product.description,
        price=product.price,
        benefits=product.benefits,
        side_effects=product.side_effects,
        direction=product.direction,
        safety_info=product.safety_info,
        image_url=product.image_url,  # Use the image URL directly
        stock=product.stock,
    )
    db.add(db_product)
    db.commit()
    db.refresh(db_product)
    return db_product


def delete_product(db: Session, product_id: int):
    """Delete a product by its ID."""
    db_product = db.query(Product).filter(Product.product_id == product_id).first()
    if db_product is None:
        return None  # Return None if product does not exist
    db.delete(db_product)
    db.commit()
    return db_product  # Return the deleted product

def update_product(db: Session, product_id: int, product: ProductCreate):
    """Update a product by its ID."""
    db_product = db.query(Product).filter(Product.product_id == product_id).first()
    if db_product is None:
        return None  # Return None if product does not exist
    
    # Update product attributes
    db_product.name = product.name
    db_product.description = product.description
    db_product.price = product.price
    db_product.benefit = product.benefits
    db_product.side_effect = product.side_effects
    db_product.direction = product.direction
    db_product.safety_info = product.safety_info
    db_product.stock=product.stock
    
    db.commit()
    db.refresh(db_product)
    return db_product  # Return the updated product

# Order Operations

# Payment Operations
def create_payment(db: Session, payment: PaymentCreate):
    """
    Creates a new payment record and initiates the Razorpay payment flow.

    Args:
        db: The database session object.
        payment: The payment data containing order_id, payment_method, and payment_reference.

    Returns:
        The created payment object with additional Razorpay data.

    Raises:
        HTTPException: If Razorpay integration fails.
    """

    # 1. Create the payment record in the database
    db_payment = Payment(
        order_id=payment.order_id,
        payment_method=payment.payment_method,
        payment_reference=payment.payment_reference,
        status=PaymentStatusEnum.Pending.value,
        amount=payment.amount,  
        currency=payment.currency, 
    )
    db.add(db_payment)
    db.commit()
    db.refresh(db_payment)

    # 2. Integrate with Razorpay
    try:
        client = razorpay.Client(auth=(RAZORPAY_KEY_ID, RAZORPAY_SECRET))
        data = {
            "amount": int(payment.amount),  # Convert to paise
            "currency": payment.currency,  # Use the currency from the payment object
            "receipt": str(db_payment.payment_id),  # Use the DB payment ID for receipt reference
        }
        razorpay_order = client.order.create(data=data)
        db_payment.razorpay_order_id = razorpay_order["id"]
        db.commit()
        db.refresh(db_payment)

    except Exception as e:
        print(f"Razorpay integration failed: {e}")  # Log the erro
        db_payment.status = PaymentStatusEnum.Failed.value
        db.commit()
        db.refresh(db_payment)
        raise HTTPException(status_code=500, detail=f"Razorpay order creation failed: {e}")

    return db_payment



def update_payment_status(db: Session, payment_id: int, status: str):
    """Update the status of a payment."""
    db_payment = db.query(Payment).filter(Payment.payment_id == payment_id).first()
    if db_payment:
        db_payment.status = status
        db.commit()
        db.refresh(db_payment)
    return db_payment