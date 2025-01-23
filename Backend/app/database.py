from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from app.config import DATABASE_URL

Engine=create_engine(DATABASE_URL)
SessionLocal=sessionmaker(autoflush=False,bind=Engine)
Base=declarative_base()

def get_db():
    db=SessionLocal()
    try:
        yield db
    finally:
        db.close
