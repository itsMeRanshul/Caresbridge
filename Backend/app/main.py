from fastapi import FastAPI
from app.routers import user,product,order,payment,product,admin
from .database import Base, Engine
from fastapi.middleware.cors import CORSMiddleware



# Create database tables
Base.metadata.create_all(bind=Engine)

app = FastAPI(title="E-commerce API")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://caresbridge.netlify.app"],  # Update this to match your frontend's URL
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)
# Include routers
app.include_router(user.router)
app.include_router(product.router)
app.include_router(order.router)
app.include_router(payment.router)
app.include_router(admin.router)
app.include_router(product.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the E-commerce API"}
