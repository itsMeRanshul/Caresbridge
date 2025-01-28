from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas import UserCreate, UserLogin,UserResponse,UserUpdate
from app.crud import create_user, get_user,get_user_by_user_id
from app.database import get_db
from app.auth import verify_password
from app.model import User
import json

router = APIRouter()

@router.post("/register")
def register_user(user: UserCreate, db: Session = Depends(get_db)):
    db_user = get_user(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return create_user(db, user)

@router.post("/login")
def login_user(user: UserLogin, db: Session = Depends(get_db)):
    db_user = get_user(db, email=user.email)
    if not db_user or not verify_password(user.password, db_user.password):
        raise HTTPException(status_code=400, detail="Invalid email or password")
    return {"message": "Login successful", "user_id": db_user.user_id,"is_admin":db_user.is_admin}

@router.get("/users/{user_id}", response_model=UserResponse)
def get_user_profile(user_id: int, db: Session = Depends(get_db)):
    user = get_user_by_user_id(db, user_id=user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@router.put("/users/{user_id}", response_model=UserResponse)
def update_user(user_id: int, user_update: UserUpdate, db: Session = Depends(get_db)):
    print("Received payload:", user_update)
    user = db.query(User).filter(User.user_id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    # Update only non-empty and set fields
    for key, value in user_update.model_dump(exclude_unset=True).items():
        if value not in [None, ""]:  # Avoid overwriting with empty strings
            setattr(user, key, value)

    db.commit()
    db.refresh(user)
    return user
