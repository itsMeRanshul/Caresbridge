import React, { useState, useEffect } from "react";
import axios from "axios";

const ManageOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch orders from the backend
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:8000/admin/orders"); // Fetch orders from API
        console.log("Orders response:", response.data); // Debug API response
        setOrders(response.data || []); // Ensure response is always handled as an array
        setLoading(false);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  // Update order status
  const updateOrderStatus = async (orderId, status) => {
    try {
      await axios.put(`http://localhost:8000/admin/orders/${orderId}`, { order_status: status }); // Update order status
      
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.order_id === orderId ? { ...order, order_status: status } : order
        )
      );
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Manage Orders</h1>
      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order}
            className="border p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <div className="mb-4">
              <p className="text-lg font-semibold">Order ID: {order.order_id}</p>
              <p className="text-gray-600">User ID: {order.user_id}</p>
              <p className="text-gray-600">Total Price: ${order.total_price}</p>
              <p className="text-gray-600">Payment Status: {order.payment_status}</p>
              <p className="text-gray-600">Order Status: {order.order_status}</p>
            </div>
            <div className="mb-4">
              <p className="text-gray-600 font-semibold">Products:</p>
              <ul className="list-disc pl-6">
                {order.products.map((product, index) => (
                  <li key={index} className="text-gray-600">
                    Product ID: {product.product_id}, Quantity: {product.quantity}, Price: ${product.price}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center">
              <label htmlFor={`status-${order.order_id}`} className="mr-4 text-gray-700 font-medium">
                Update Status:
              </label>
              <select
                id={`status-${order.order_id}`}
                className="border rounded-md px-3 py-2"
                value={order.order_status}
                onChange={(e) => updateOrderStatus(order.order_id, e.target.value)}
              >
                <option value="Pending">Pending</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageOrdersPage;
