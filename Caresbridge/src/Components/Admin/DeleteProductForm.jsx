import React, { useState } from "react";

const DeleteProductForm = () => {
  const [productId, setProductId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock delete logic
    console.log('Product ${productId} Deleted');
    alert("Product deleted successfully!");
    setProductId("");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Delete Product</h2>
      <input
        type="text"
        placeholder="Product ID"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
        className="border p-2 w-full mb-4"
        required
      />
      <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
        Delete Product
      </button>
    </form>
  );
};

export default DeleteProductForm;