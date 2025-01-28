from fastapi import APIRouter, Depends, HTTPException,UploadFile,File,Form
from sqlalchemy.orm import Session
from app.crud import create_product, delete_product, update_product
from app.schemas import ProductCreate
from app.database import get_db

router = APIRouter(prefix="/admin", tags=["Admin"])

@router.post("/addproduct/")
def admin_add_product(product: ProductCreate, db: Session = Depends(get_db)):
    return create_product(db,product)


@router.put("/updateproduct/{product_id}")
def admin_edit_product(product_id: int, product: ProductCreate, db: Session = Depends(get_db)):
    updated_product = update_product(db, product_id, product)
    if not updated_product:
        raise HTTPException(status_code=404, detail="Product not found")
    return updated_product

@router.delete("/deleteproduct/{product_id}")
def admin_delete_product(product_id: int, db: Session = Depends(get_db)):
    deleted_product = delete_product(db, product_id)
    if not deleted_product:
        raise HTTPException(status_code=404, detail="Product not found")
    return {"detail": "Product deleted successfully"}
