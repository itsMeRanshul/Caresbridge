from sqlalchemy import Column, Integer, String, Float, Boolean, ForeignKey, Text, Enum
from sqlalchemy.orm import relationship
from app.database import Base
import enum


# Enums for specific fields
class PaymentStatusEnum(enum.Enum):
    Pending = "Pending"
    Completed = "Completed"
    Failed = "Failed"


class OrderStatusEnum(enum.Enum):
    Pending = "Pending"
    Processing = "Processing"
    Shipped = "Shipped"
    Delivered = "Delivered"
    Cancelled = "Cancelled"


class PaymentMethodEnum(enum.Enum):
    CreditCard = "Credit Card"
    DebitCard = "Debit Card"
    NetBanking = "Net Banking"
    UPI = "UPI"
    Wallet = "Wallet"
    COD = "COD"


# User Table
class User(Base):
    __tablename__ = "usertable"

    user_id = Column(Integer, primary_key=True,autoincrement=True, index=True)
    name = Column(String(50), nullable=False)
    email = Column(String(255), unique=True, nullable=False)
    password = Column(String(255), nullable=False)
    phone_no = Column(String(20))
    address = Column(Text)
    is_admin = Column(Boolean, default=False, nullable=False)

    orders = relationship("Order", back_populates="user")



# Product Table
class Product(Base):
    __tablename__ = "producttable"

    product_id = Column(Integer, primary_key=True, index=True,autoincrement=True)
    name = Column(String(50), nullable=False)
    description = Column(Text)
    price = Column(Float, nullable=False)
    benefits = Column(Text)
    side_effects = Column(Text)
    direction = Column(Text)
    safety_info = Column(Text)
    image_url = Column(String(2083))
    stock = Column(Integer, nullable=False, default=0)

# Order Table
class Order(Base):
    __tablename__ = "ordertable"

    order_id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("usertable.user_id"), nullable=False)
    products = Column(Text, nullable=False)  # JSON string
    total_price = Column(Float, nullable=False)
    payment_status = Column(Enum("Pending", "Completed", "Failed", name="payment_status"), default="Pending")
    order_status = Column(Enum("Pending", "Processing", "Shipped", "Delivered", "Cancelled", name="order_status"), default="Pending")

    user = relationship("User", back_populates="orders")
    payments = relationship("Payment", back_populates="order") 

# Payment Table
class Payment(Base):
    __tablename__ = "paymenttable"

    payment_id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    order_id = Column(Integer, ForeignKey("ordertable.order_id"), nullable=False)
    payment_method = Column(Enum(PaymentMethodEnum), nullable=False)
    payment_reference = Column(String(255), nullable=False)
    status = Column(Enum(PaymentStatusEnum), nullable=False)
    razorpay_order_id = Column(String(255), nullable=True)
    razorpay_payment_id = Column(String(255), nullable=True)
    razorpay_signature = Column(String(255), nullable=True)
    amount = Column(Float, nullable=False)
    currency = Column(String(20), nullable=True)  

    order = relationship("Order", back_populates="payments") 

