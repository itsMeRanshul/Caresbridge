from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database import get_db
from app.model import Order
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
