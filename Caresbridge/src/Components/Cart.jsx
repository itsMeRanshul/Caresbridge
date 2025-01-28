import React, { useContext } from "react";
import { ProductContext } from "./Context.js/ProductContext";
import axios from "axios";

const Cart = () => {
  const { cart, updateCartItem, removeFromCart } = useContext(ProductContext);
  const userId = localStorage.getItem("user_id");

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
    
  };
  
  const handlePayment = async () => {
    console.log(userId)
    // Load the Razorpay script
    const isScriptLoaded = await loadRazorpayScript();
    if (!isScriptLoaded) {
      alert("Failed to load Razorpay SDK.");
      return;
    }
  
    try {
      // Create the order first by sending necessary details
      const orderResponse = await axios.post("http://127.0.0.1:8000/order/", {
        user_id: userId,  // Replace with the actual user id
        products: cart.map(item => ({
          product_id: item.product_id,
          quantity: item.quantity,
          price: item.price
        })),
        total_price: totalPrice,  // Total price from cart
      });
  

      console.log("Order Response:", orderResponse);
      const orderId = orderResponse.data.order_id;  // This is the order_id returned from the backend
      console.log("Order ID:", orderId);  // Check if the orderId is correct
  
      // Now initiate the payment with the order_id
      const paymentResponse = await axios.post("http://127.0.0.1:8000/payment/initiate", {
        amount: totalPrice * 100,  // Convert to paise
        currency: "INR",
        order_id: orderId,  // Use the order_id returned from the create_order API
        payment_method: "UPI",  // Payment method
        payment_reference: "Some Reference",  // Reference for the payment
      });
      
      console.log("Payment Response:", paymentResponse);
      // Continue with Razorpay payment flow if successful
      const options = {
        key: "rzp_test_2dN1eRPD6Bu0cn",  // Replace with your Razorpay key
        amount: paymentResponse.data.amount,
        currency: paymentResponse.data.currency,
        order_id: paymentResponse.data.razorpay_order_id,
        name: "Your Shop Name",
        description: "Test Transaction",
        handler: async function (response) {
          try {
            // Verify payment after successful transaction
            await axios.post("http://127.0.0.1:8000/payment/verify", response);
           console.log(response)
            alert("Payment Successful!");
          } catch (error) {
            alert("Payment verification failed.");
            console.error("Payment verification error:", error);
          }
        },
        theme: {
          color: "#3399cc",
        },
      };
  
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Payment initiation failed:", error);
      alert("Failed to initiate payment. Please try again.");
    }
  };
  
  

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-4 sm:p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Shopping Cart</h1>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.product_id}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <div className="flex items-center">
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="ml-4">
                      <h2 className="text-lg font-medium">{item.name}</h2>
                      <p className="text-gray-600">₹{item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => updateCartItem(item.product_id, -1)}
                      className="px-2 py-1 text-gray-600 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      onClick={() => updateCartItem(item.product_id, 1)}
                      className="px-2 py-1 text-gray-600 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => removeFromCart(item.product_id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}

            </div>
            <div className="mt-6">
              <div className="flex justify-between text-lg font-medium">
                <p>Total:</p>
                <p>{totalPrice.toFixed(2)}</p>
              </div>
              <button
                className="w-full mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
                onClick={handlePayment}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
