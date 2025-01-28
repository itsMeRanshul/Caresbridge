import React, { useState } from "react";
import axios from "axios";

const AddProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    benefits: "",
    side_effects: "",
    direction: "",
    safety_info: "",
    stock: "",
    image_url: "", // Change from file to URL
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/admin/addproduct/", product, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Product added successfully:", response.data);
      alert("Product added successfully!");

      setProduct({
        name: "",
        price: "",
        description: "",
        benefits: "",
        side_effects: "",
        direction: "",
        safety_info: "",
        stock: "",
        image_url: "",
      });
    } catch (error) {
      console.error("Error adding product:", error.response || error.message);
      alert("Failed to add product. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Add Product</h2>
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={product.name}
        onChange={handleChange}
        className="border p-2 w-full mb-4"
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Product Price"
        value={product.price}
        onChange={handleChange}
        className="border p-2 w-full mb-4"
        required
      />
      <textarea
        name="description"
        placeholder="Product Description"
        value={product.description}
        onChange={handleChange}
        className="border p-2 w-full mb-4"
        required
      />
      <textarea
        name="benefits"
        placeholder="Benefits"
        value={product.benefits}
        onChange={handleChange}
        className="border p-2 w-full mb-4"
      />
      <textarea
        name="side_effects"
        placeholder="Side Effects"
        value={product.side_effects}
        onChange={handleChange}
        className="border p-2 w-full mb-4"
      />
      <textarea
        name="direction"
        placeholder="Direction to Use"
        value={product.direction}
        onChange={handleChange}
        className="border p-2 w-full mb-4"
      />
      <textarea
        name="safety_info"
        placeholder="Safety Information"
        value={product.safety_info}
        onChange={handleChange}
        className="border p-2 w-full mb-4"
      />
      <input
        type="number"
        name="stock"
        placeholder="Stock Quantity"
        value={product.stock}
        onChange={handleChange}
        className="border p-2 w-full mb-4"
        required
      />
      <input
        type="text"
        name="image_url"
        placeholder="Image URL"
        value={product.image_url}
        onChange={handleChange}
        className="border p-2 w-full mb-4"
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;
