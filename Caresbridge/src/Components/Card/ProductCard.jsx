import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ products }) => {
    return (
        <div className="bg-pink-50 py-8 px-4 sm:px-12 lg:px-24">
            <h2 className="text-3xl font-extrabold text-center mb-8 text-black drop-shadow-lg animate-fadeIn">
                Our Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div
                        key={product.product_id}
                        className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-black hover:shadow-2xl hover:-translate-y-2 duration-300 animate-slideUp"
                    >
                        <img
                            src={product.image_url}
                            alt={product.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {product.name}
                            </h3>
                            <p className="text-gray-800 mb-4">Price: ₹ {product.price}</p>
                            <Link
                                to={`/Product/${product.product_id}`}
                                className="px-4 py-2 bg-gradient-to-r from-gray-700 to-pink-800 text-white rounded-full hover:bg-gradient-to-l hover:from-gray-700 to-pink-800 hover:to-pink-400 shadow-md hover:shadow-lg transition-all duration-300"
                            >
                                View
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <style>
                {`
                    @keyframes fadeIn {
                        from {
                            opacity: 0;
                        }
                        to {
                            opacity: 1;
                        }
                    }

                    @keyframes slideUp {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    .animate-fadeIn {
                        animation: fadeIn 1s ease-in-out;
                    }

                    .animate-slideUp {
                        animation: slideUp 0.8s ease-out;
                    }
                `}
            </style>
        </div>
    );
};

export default ProductCard;
