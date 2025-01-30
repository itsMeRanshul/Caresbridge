// ProductContext.js
import React, { createContext, useState, useEffect } from "react";
import axios from "axios"; // Import axios

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]); // Added state for cart
    const [error, setError] = useState(null); // State for handling errors

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                console.log(process.env.REACT_APP_BACKEND_URL);
                console.log(process.env.REACT_APP_BACKEND_URL);
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/products`);  // Replace with your actual API URL
                console.log(response.data)
                setProducts(response.data); // Set fetched data
                setLoading(false); // Set loading to false after fetching data
            } catch (err) {
                setError("Error fetching products. Please try again later.");
                setLoading(false); // Set loading to false if there is an error
            }
        };

        fetchProducts();
    }, []);  // Empty dependency array so this effect runs only once

    // Add to cart functionality
    const addToCart = (product) => {
        setCart((prevCart) => {
          const existingItem = prevCart.find((item) => item.product_id === product.product_id);
          if (existingItem) {
            return prevCart.map((item) =>
                item.product_id === product.product_id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
          } else {
            return [...prevCart, { ...product, quantity: 1 }];
          }
        });
    };

    // Update cart item quantity
    const updateCartItem = (id, increment) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.product_id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + increment) }
                    : item
            )
        );
    };

    // Remove item from cart
    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.product_id !== id));
    };

    return (
        <ProductContext.Provider value={{ products, loading, error, cart, addToCart, updateCartItem, removeFromCart }}>
            {children}
        </ProductContext.Provider>
    );
};
