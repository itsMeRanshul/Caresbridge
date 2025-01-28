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

class UserResponse(BaseModel):
    user_id: int
    name: str
    email: str
    phone_no: Optional[str] = None 
    address:str
    class Config:
        from_attributes = True 

# Update model for updating user details
class UserUpdate(BaseModel):
    name: Optional[str] = None
    email: Optional[str] = None
    phone_no: Optional[str] = None
    password: Optional[str] = None
    address: Optional[str] = None  # Ensure this is optional for updates

    class Config:
        from_attributes = True
# Product Models
class ProductBase(BaseModel):
    name: str
    description: str
    price: float
    benefits: str
    side_effects: str
    direction: str
    safety_info: str
    stock: int
    image_url: Optional[str] =None

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
    price: float

class OrderCreate(BaseModel):
    user_id: str
    products: List[OrderProduct]
    total_price: float
    payment_status: Optional[str] = "Pending"
    order_status: Optional[str] = "Pending"

class Order(BaseModel):
    order_id: int
    user_id: int
    products: List[OrderProduct]
    total_price: float
    payment_status: str
    order_status: str

class OrderStatusUpdate(BaseModel):
    order_status: str
    class Config:
        from_attributes = True


class OrderResponse(BaseModel):
    order_id: int
    order_status: str

    class Config:
        from_attributes = True

# Payment Models
class PaymentCreate(BaseModel):
    order_id: int
    payment_method: str
    payment_reference: str
    amount: float  # Added amount field
    currency: str  # Added currency field (e.g., "INR")

class Payment(BaseModel):
    payment_id: int
    order_id: int
    payment_method: str
    payment_reference: str
    status: str
    razorpay_order_id: Optional[str]  
    razorpay_payment_id: Optional[str]
    razorpay_signature: Optional[str]
    amount: float
    currency: Optional[str]  # Add this field if required

    class Config:
        from_attributes = True
