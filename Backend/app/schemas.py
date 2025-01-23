from pydantic import BaseModel
from typing import List, Optional, Dict

# User Models
class UserBase(BaseModel):
    name: str
    email: str
    phone_no: str
    address: str

class UserCreate(UserBase):
    password: str

class UserLogin(BaseModel):
    email: str
    password: str

# Product Models
class ProductBase(BaseModel):
    name: str
    description: str
    price: float
    benefits: str
    side_effects: str
    direction: str
    safety_info: str
    image_url: str
    stock:int

class ProductCreate(ProductBase):
    pass

class Product(ProductBase):
    product_id: int

    class Config:
        from_attributes = True

# Order Models
class OrderProduct(BaseModel):
    product_id: int
    quantity: int

class OrderCreate(BaseModel):
    user_id: str
    products: List[OrderProduct]
    total_price: float
    payment_status: Optional[str] = "Pending"
    order_status: Optional[str] = "Pending"

class Order(BaseModel):
    order_id: int
    user_id: str
    products: List[OrderProduct]
    total_price: float
    payment_status: str
    order_status: str

    class Config:
        from_attributes = True

# Payment Models
class PaymentCreate(BaseModel):
    order_id: int
    payment_method: str
    payment_reference: str

class Payment(BaseModel):
    payment_id: int
    status: str

    class Config:
        from_attributes = True
