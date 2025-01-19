import React from "react";

const CardH = ({ title, description, image }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <img src={image} alt={title} className="w-full h-48 object-cover transition duration-300" />
            <div className="p-4 transition duration-300">
                <h3 className="text-xl font-bold mb-2 transition duration-300">{title}</h3>
                <p className="text-gray-600 transition duration-300">{description}</p>
            </div>
        </div>
    );
};

export default CardH;