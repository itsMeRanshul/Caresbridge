import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [amount, setAmount] = useState(0);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const isScriptLoaded = await loadRazorpayScript();
    if (!isScriptLoaded) {
      alert('Failed to load Razorpay SDK.');
      return;
    }

    try {
      const order = await axios.post('http://127.0.0.1:8000/create-order/', {
        amount,
        currency: 'INR',
      });

      const options = {
        key: 'rzp_test_2dN1eRPD6Bu0cn',
        amount: order.data.amount,
        currency: order.data.currency,
        order_id: order.data.id,
        name: 'Demo Payment',
        description: 'Test Transaction',
        handler: async function (response) {
          alert('Payment Successful');
          await axios.post('http://127.0.0.1:8000/verify-payment/', response);
        },
        theme: {
          color: '#3399cc',
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Payment initiation failed:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md">
        <h1 className="text-2xl mb-4">Razorpay Payment Demo</h1>
        <input
          type="number"
          className="border px-3 py-2 rounded w-full mb-4"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          onClick={handlePayment}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default App;