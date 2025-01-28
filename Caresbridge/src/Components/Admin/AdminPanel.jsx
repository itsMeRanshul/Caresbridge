import React from "react";
import { Link } from "react-router-dom";

const AdminPanel = () => {
  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 shadow-lg rounded-lg p-8">
      <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
        Admin Dashboard
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Manage your products and orders efficiently with the options below.
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-4">
        {/* Add Product */}
        <Link
          to="/admin/addproduct"
          className="block bg-blue-500 text-white text-center py-6 px-4 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          <h3 className="text-lg font-bold mb-2">Add Product</h3>
          <p className="text-sm">
            Add new products to your catalog quickly and easily.
          </p>
        </Link>

        {/* Update Product */}
        <Link
          to="/admin/updateproduct"
          className="block bg-green-500 text-white text-center py-6 px-4 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          <h3 className="text-lg font-bold mb-2">Update Product</h3>
          <p className="text-sm">
            Modify existing product details in your inventory.
          </p>
        </Link>

        {/* Delete Product */}
        <Link
          to="/admin/deleteproduct"
          className="block bg-red-500 text-white text-center py-6 px-4 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          <h3 className="text-lg font-bold mb-2">Delete Product</h3>
          <p className="text-sm">
            Remove unwanted products from your inventory.
          </p>
        </Link>

        {/* Manage Orders */}
        <Link
          to="/admin/manageorders"
          className="block bg-purple-500 text-white text-center py-6 px-4 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          <h3 className="text-lg font-bold mb-2">Manage Orders</h3>
          <p className="text-sm">
            Review and update customer orders.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default AdminPanel;
