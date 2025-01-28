from fastapi import APIRouter, Depends, HTTPException,Path
from sqlalchemy.orm import Session
from app.database import get_db
from app.model import Order 
from app.schemas import Order as OrderPy,OrderStatusUpdate,OrderResponse
from typing import List
import json

router = APIRouter()

@router.post("/order/")
def create_order(order_data: dict, db: Session = Depends(get_db)):
    try:
        order = Order(
            user_id=order_data["user_id"],
            products=json.dumps(order_data["products"]),
            total_price=order_data["total_price"],
            payment_status=order_data.get("payment_status", "Pending"),
            order_status=order_data.get("order_status", "Pending"),
        )
        
        db.add(order)
        db.commit()
        db.refresh(order)
        return {"message": "Order created successfully", "order_id": order.order_id}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/orders/{user_id}")
def get_orders(user_id: int, db: Session = Depends(get_db)):
    orders = db.query(Order).filter(Order.user_id == user_id).all()
    if not orders:
        raise HTTPException(status_code=404, detail="No orders found")
    return [
        {
            "order_id": order.order_id,
            "products": json.loads(order.products),
            "total_price": order.total_price,
            "payment_status": order.payment_status,
            "order_status": order.order_status,
        }
        for order in orders
    ]



@router.get("/admin/orders", response_model=List[OrderPy])
async def get_orders(db: Session = Depends(get_db)):
    try:
        # Fetch all orders from the database
        orders = db.query(Order).all()

        # Deserialize the products JSON string into List[OrderProduct]
        for order in orders:
            order.products = json.loads(order.products)  # Convert JSON string to list

        # Return orders as the response
        return orders  # SQLAlchemy model will be auto-converted to Pydantic model

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching orders: {e}")
    

@router.put("/admin/orders/{order_id}",response_model=OrderResponse)
async def update_order_status(
    order_id: int = Path(..., description="The ID of the order to update"),
    status_update: OrderStatusUpdate = None,
    db: Session = Depends(get_db)
):
    # Fetch the order by ID
    order = db.query(Order).filter(Order.order_id == order_id).first()
    if not order:
        raise HTTPException(status_code=404, detail="Order not found")

    # Update the order status
    valid_statuses = ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"]
    if status_update.order_status not in valid_statuses:
        raise HTTPException(
            status_code=400, detail=f"Invalid status. Must be one of: {', '.join(valid_statuses)}"
        )

    order.order_status = status_update.order_status
    db.commit()
    db.refresh(order)

    return {"order_id": order_id,"order_status":order.order_status}