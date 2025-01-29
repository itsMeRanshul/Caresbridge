import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./Context.js/AutoContext";

const OrderHistoryPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const {userId} =useAuth()

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        // Replace with your backend URL and include the user ID
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/orders/${userId}`);
        console.log(response.data)
        setOrders(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error);
        alert("Failed to fetch orders. Please try again.");
        setLoading(false);
      }
    };

    fetchOrders();
  }, [userId]); // Dependency ensures this runs whenever userId changes

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Order History</h1>
      {orders.length === 0 ? (
        <p className="text-gray-500">You have no past orders.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.order_id}
              className="border p-4 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-semibold">
                    Order ID: {order.order_id}
                  </p>
                  <p className="text-gray-600">
                    Total Price: ${order.total_price}
                  </p>
                  <p className="text-gray-600">
                    Payment Status: {order.payment_status}
                  </p>
                  <p className="text-gray-600">
                    Order Status: {order.order_status}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistoryPage;
