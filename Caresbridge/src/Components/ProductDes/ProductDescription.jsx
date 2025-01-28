import React from "react";
import { useParams, useNavigate,Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../Context.js/ProductContext";
import { useAuth } from "../Context.js/AutoContext";

const ProductDescription = () => {
    const { id } = useParams(); // Get the dynamic product ID from the URL
    const { products, loading, addToCart } = useContext(ProductContext); // Change: Ensure context values are used correctly

    const navigate = useNavigate(); // Initialize useNavigate hook

    const {isLoggedIn}=useAuth()
    if (loading) {
        return <p>Loading product details...</p>;
    }
    const product = products.find((item) => item.product_id === parseInt(id, 10)); // Change: Used parseInt to ensure type matching

    if (!product) {
        return <p className="text-center text-gray-600">Product not found.</p>;
    }

    const {
        image_url: image, // Rename image_url to image for use in the component
        name,
        description,
        benefits,
        side_effects: sideEffects, // Rename side_effects to sideEffects for use in the component
        direction: directions, // Rename direction to directions for use in the component
        safety_info: safetyAdvice,
        price:price //
    } = product;

    return (
        <div className="bg-pink-50 py-12 px-6 sm:px-16 lg:px-32">
            {/* Back Button */}
            <button
                onClick={() => navigate("/product")}
                className="group relative flex items-center px-3 py-3 mb-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-gray-500/50"
            >
                <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-30 rounded-full"></span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-3 transition-transform duration-300 group-hover:-translate-x-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
                Back
            </button>

            {/* Image and Product Info Section */}
            <div className="flex bg-gray-50 flex-col lg:flex-row items-start lg:items-center mb-10 space-y-10 lg:space-y-0">
    {/* Product Image Section */}
    <div
        className="lg:w-2/5 transition-transform duration-500 transform hover:scale-105 hover:shadow-xl animate-slide-in-left"
    >
        <img
            src={image || "https://via.placeholder.com/400"}
            alt={name || "Product image"}
            className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-110"
        />
    </div>

    {/* Product Details Section */}
    <div className="lg:w-3/5 lg:ml-10 mt-6 lg:mt-0 animate-slide-in-right">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4 transition-colors duration-300 hover:text-rose-900">
            {name || "Product Name"}
        </h1>
        
        <div className="flex items-center space-x-4 mb-1">
            <span className="text-yellow-500 text-lg font-semibold">★ ★ ★ ★ ☆</span>
        </div>
        <div className="flex items-center space-x-4 mb-3">
        <span className="text-gray-900 font-semibold">Price : ₹ {price}</span>
        </div>
        
        <div className="flex flex-col items-start space-y-2">
        <button  onClick={() => {
        if (isLoggedIn) {
            addToCart(product); // Add product to cart
        } else {
            navigate("/login"); // Navigate to login page if not logged in
        }
    }}
     className="px-8 py-3 bg-rose-900 hover:bg-rose-800 text-white rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-110"
             
              >
            Add to Cart
             </button>
            <a
                href="https://wa.me/8178726325"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-block px-5 py-2 bg-green-600 text-white font-medium rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:bg-green-800 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
            >
                <span
                    className="absolute inset-0 bg-green-400 opacity-0 rounded-full transition duration-300 ease-in-out group-hover:opacity-20"
                ></span>
                <span className="relative">Contact on WhatsApp</span>
            </a>

        </div>
        <ul className="mt-6 space-y-2">
            <li className="flex items-center text-gray-600">
                ✅ High-quality materials
            </li>
            <li className="flex items-center text-gray-600">
                ✅ Affordable pricing
            </li>
        </ul>
    </div>
</div>



            {/* Parent Element for Sections */}
            <div className="bg-gradient-to-r from-gray-100 via-rose-50 to-pink-100 shadow-2xl rounded-xl p-8 space-y-16 animate-fade-in">
    {/* Product Description Section */}
    <div className="transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl relative bg-gradient-to-r from-white to-gray-200 p-6 rounded-lg border border-gray-300 shadow-md hover:shadow-2xl">
        <h2 className="text-2xl font-bold text-black mb-3 hover:text-rose-800 transition-colors duration-300">Product Description</h2>
        <p className="text-gray-900 leading-relaxed">{description || "No description available."}</p>
    </div>

    {/* Benefits Section */}
    <div className="transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl relative bg-gradient-to-r from-white to-gray-200 p-6 rounded-lg border border-gray-300 shadow-md hover:shadow-2xl">
        <h2 className="text-2xl font-bold text-black mb-3 hover:text-rose-800 transition-colors duration-300">Benefits</h2>
        <p className="text-gray-900 leading-relaxed">{benefits || "No benefits information available."}</p>
    </div>

    {/* Side Effects Section */}
    <div className="transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl relative bg-gradient-to-r from-white to-gray-200 p-6 rounded-lg border border-gray-300 shadow-md hover:shadow-2xl">
        <h2 className="text-2xl font-bold text-black mb-3 hover:text-rose-800 transition-colors duration-300">Side Effects</h2>
        <p className="text-gray-900 leading-relaxed">{sideEffects || "No side effects information available."}</p>
    </div>

    {/* Directions to Use Section */}
    <div className="transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl relative bg-gradient-to-r from-white to-gray-200 p-6 rounded-lg border border-gray-300 shadow-md hover:shadow-2xl">
        <h2 className="text-2xl font-bold text-black mb-3 hover:text-rose-800 transition-colors duration-300">Directions to Use</h2>
        <p className="text-gray-900 leading-relaxed">{directions || "No directions available."}</p>
    </div>

    {/* Safety Advice Section */}
    <div className="transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl relative bg-gradient-to-r from-white to-gray-200 p-6 rounded-lg border border-gray-300 shadow-md hover:shadow-2xl">
        <h2 className="text-2xl font-bold text-black mb-3 hover:text-rose-800 transition-colors duration-300">Safety Advice</h2>
        <p className="text-gray-900 leading-relaxed">{safetyAdvice || "No safety advice available."}</p>
    </div>
</div>

        </div>
    );
};

export default ProductDescription;
