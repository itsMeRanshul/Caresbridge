import React, { useState } from "react";

const UpdateProductForm = () => {
  const [productId, setProductId] = useState("");
  const [updatedData, setUpdatedData] = useState({
    name: "",
    price: "",
    description: "",
    benefits: "",
    sideEffects: "",
    directionToUse: "",
    safety: "",
  });

  const handleChange = (e) => {
    setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Product ${productId} Updated:, updatedData`);
    alert("Product updated successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Update Product</h2>
      <input
        type="text"
        placeholder="Product ID"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
        className="border p-2 w-full mb-4"
        required
      />
      <input
        type="text"
        name="name"
        placeholder="Updated Name"
        value={updatedData.name}
        onChange={handleChange}
        className="border p-2 w-full mb-4"
      />
      <input
        type="number"
        name="price"
        placeholder="Updated Price"
        value={updatedData.price}
        onChange={handleChange}
        className="border p-2 w-full mb-4"
      />
      <textarea
        name="description"
        placeholder="Updated Product Description"
        value={updatedData.description}
        onChange={handleChange}
        className="border p-2 w-full mb-4"
      />
      <textarea
        name="benefits"
        placeholder="Updated Benefits"
        value={updatedData.benefits}
        onChange={handleChange}
        className="border p-2 w-full mb-4"
      />
      <textarea
        name="sideEffects"
        placeholder="Updated Side Effects"
        value={updatedData.sideEffects}
        onChange={handleChange}
        className="border p-2 w-full mb-4"
      />
      <textarea
        name="directionToUse"
        placeholder="Updated Direction to Use"
        value={updatedData.directionToUse}
        onChange={handleChange}
        className="border p-2 w-full mb-4"
      />
      <textarea
        name="safety"
        placeholder="Updated Safety Information"
        value={updatedData.safety}
        onChange={handleChange}
        className="border p-2 w-full mb-4"
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Update Product
      </button>
    </form>
  );
};

export default UpdateProductForm;