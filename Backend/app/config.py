import os
from dotenv import load_dotenv


load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL", "mysql+pymysql://root:Ranshul%40123@127.0.0.1:3306/medical_db")
SECRET_KEY = os.getenv("SECRET_KEY")
RAZORPAY_KEY_ID = "rzp_test_2dN1eRPD6Bu0cn"
RAZORPAY_SECRET = "6502bwRPVJmuaGl0GaOksQjQ"


