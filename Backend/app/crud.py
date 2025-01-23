from sqlalchemy.orm import Session
from app.model import User, Product, Order, Payment
from app.schemas import UserCreate, ProductCreate, PaymentCreate,OrderCreate
from app.auth import hash_password
import json

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

# Product Operations
def get_products(db: Session, skip: int = 0, limit: int = 100):
    """Fetch all products with pagination."""
    products = db.query(Product).offset(skip).limit(limit).all()
    return products  # This will return a list of Product objects that include 'product_id'

def get_product(db: Session, product_id: int):
    """Fetch a product by ID."""
    return db.query(Product).filter(Product.product_id == product_id).first()

def create_product(db: Session, product: ProductCreate):
    """Create a new product."""
    db_product = Product(
        name=product.name,
        description=product.description,
        price=product.price,
        benefits=product.benefits,
        side_effects=product.side_effects,
        direction=product.direction,
        safety_info=product.safety_info,
        image_url=product.image_url,
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
    db_product.image_url = product.image_url
    db_product.stock=product.stock
    
    db.commit()
    db.refresh(db_product)
    return db_product  # Return the updated product





# Order Operations
def create_order(db: Session, order_data: OrderCreate, user_id: int):
    """Create a new order and store products as a JSON string."""
     # Convert the list of OrderProduct objects to a list of dictionaries
    products_dict = [product.model_dump() for product in order_data.products]

    # Convert the list of dictionaries to a JSON string
    products_json = json.dumps(products_dict)

    # Create the order object and populate the fields
    db_order = Order(
        user_id=user_id,
        products=products_json,  # Store products as a JSON string
        total_price=order_data.total_price,
        payment_status=order_data.payment_status,
        order_status=order_data.order_status,
    )

    db.add(db_order)
    db.commit()
    db.refresh(db_order)

    return db_order

def get_order(db: Session, order_id: int):
    """Fetch an order by ID."""
    return db.query(Order).filter(Order.order_id == order_id).first()











# Payment Operations
def create_payment(db: Session, payment: PaymentCreate):
    """Create a payment record."""
    db_payment = Payment(
        order_id=payment.order_id,
        payment_method=payment.payment_method,
        payment_reference=payment.payment_reference,
        status="Pending",
    )
    db.add(db_payment)
    db.commit()
    db.refresh(db_payment)
    return db_payment

def update_payment_status(db: Session, payment_id: int, status: str):
    """Update the status of a payment."""
    db_payment = db.query(Payment).filter(Payment.payment_id == payment_id).first()
    if db_payment:
        db_payment.status = status
        db.commit()
        db.refresh(db_payment)
    return db_payment