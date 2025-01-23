from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app import crud, model, schemas
from app.database import get_db
from app.schemas import Product
from typing import List
router = APIRouter()



@router.get("/product/{product_id}", response_model=schemas.Product)
def get_product(product_id: str, db: Session = Depends(get_db)):
    db_product = crud.get_product(db=db, product_id=product_id)
    if db_product is None:
        raise HTTPException(status_code=404, detail="Product not found")
    return Product.model_validate(db_product)

@router.get("/products/", response_model=List[schemas.Product])
def get_products(db: Session = Depends(get_db)):
    return crud.get_products(db=db)


