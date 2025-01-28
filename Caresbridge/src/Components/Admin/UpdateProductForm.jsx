import React, { useState } from "react";
import axios from "axios";

const UpdateProductForm = () => {
  const [productId, setProductId] = useState("");
  const [updatedData, setUpdatedData] = useState({
    name: "",
    price: "",
    description: "",
    benefits: "",
    side_effects: "",
    direction: "",
    safety_info: "",
    stock: "",
  });

  const handleChange = (e) => {
    setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:8000/admin/updateproduct/${productId}`,
        updatedData
      );
      console.log("Product updated successfully:", response.data);
      alert("Product updated successfully!");
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Failed to update product. Please try again.");
    }
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
        name="side_effects"
        placeholder="Updated Side Effects"
        value={updatedData.side_effects}
        onChange={handleChange}
        className="border p-2 w-full mb-4"
      />
      <textarea
        name="direction"
        placeholder="Updated Direction"
        value={updatedData.direction}
        onChange={handleChange}
        className="border p-2 w-full mb-4"
      />
      <textarea
        name="safety_info"
        placeholder="Updated Safety Information"
        value={updatedData.safety_info}
        onChange={handleChange}
        className="border p-2 w-full mb-4"
      />
      <input
        type="number"
        name="stock"
        placeholder="Updated Stock"
        value={updatedData.stock}
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
