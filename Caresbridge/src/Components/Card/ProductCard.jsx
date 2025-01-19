import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ products }) => {
    return (
        <div className="bg-pink-100 py-8 px-4 sm:px-12 lg:px-24">
            <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-800">
                Our Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-lg shadow-lg overflow-hidden"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                {product.name}
                            </h3>
                            <p className="text-gray-600 mb-4">Price: ${product.price}</p>
                            <Link
                                to={`/Product/${product.id}`}
                                className="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600"
                            >
                                View
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCard;
