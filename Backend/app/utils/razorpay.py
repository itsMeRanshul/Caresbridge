import razorpay

RAZORPAY_KEY_ID = "rzp_test_2dN1eRPD6Bu0cn"
RAZORPAY_SECRET = "6502bwRPVJmuaGl0GaOksQjQ"
client = razorpay.Client(auth=(RAZORPAY_KEY_ID, RAZORPAY_SECRET))