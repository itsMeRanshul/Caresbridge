import os
from dotenv import load_dotenv

# Load environment variables from .env
load_dotenv()


DATABASE_URL = os.getenv("DATABASE_URL", "").strip('"')
print(DATABASE_URL)
SECRET_KEY = os.getenv("SECRET_KEY","").strip('"')
RAZORPAY_KEY_ID = os.getenv("RAZORPAY_KEY_ID","").strip('"')
RAZORPAY_SECRET = os.getenv("RAZORPAY_SECRET","").strip('"')
