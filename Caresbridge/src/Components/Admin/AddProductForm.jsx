import React, { useState } from "react";

const AddProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    benefits: "",
    sideEffects: "",
    directionToUse: "",
    safety: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Added:", product);
    alert("Product added successfully!");
    setProduct({
      name: "",
      price: "",
      description: "",
      benefits: "",
      sideEffects: "",
      directionToUse: "",
      safety: "",
    });
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
        name="sideEffects"
        placeholder="Side Effects"
        value={product.sideEffects}
        onChange={handleChange}
        className="border p-2 w-full mb-4"
      />
      <textarea
        name="directionToUse"
        placeholder="Direction to Use"
        value={product.directionToUse}
        onChange={handleChange}
        className="border p-2 w-full mb-4"
      />
      <textarea
        name="safety"
        placeholder="Safety Information"
        value={product.safety}
        onChange={handleChange}
        className="border p-2 w-full mb-4"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;