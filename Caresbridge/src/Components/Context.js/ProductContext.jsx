// ProductContext.js
import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]); // Added state for cart

    useEffect(() => {
        const fetchProducts = async () => {
            const data = [
                {
                    id: 1,
                    name: "Product 1",
                    image: "/assets/Screenshot 2025-01-14 002455.png",
                    price: 29.99,
                    description: "Description 1",
                    benefits: "Benefits 1",
                    sideEffects: "Side effects 1",
                    directions: "Directions 1",
                    safetyAdvice: "Safety advice 1",
                },
                {
                    id: 2,
                    name: "Product 2",
                    image: "/assets/Screenshot 2025-01-14 002455.png",
                    price: 49.99,
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsam vel facere obcaecati! Eius eligendi architecto iusto fuga voluptas, reprehenderit beatae, a fugit repudiandae mollitia sint praesentium ipsam? Doloribus iste aspernatur distinctio repellat eligendi labore quidem repellendus sint cum totam alias tempore eveniet libero modi, praesentium dignissimos perferendis nam eius. Enim alias delectus esse, amet doloribus itaque sed culpa eos natus ratione dolorem tempora incidunt adipisci et perferendis deleniti ducimus beatae labore officiis modi suscipit debitis. Excepturi ducimus, optio modi hic corrupti molestias dolorum, deserunt placeat voluptates labore repellendus nostrum nemo! Veritatis maiores odit animi, distinctio praesentium ad possimus a",
                    benefits: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus perspiciatis ipsa dolorem commodi quod voluptas praesentium ipsam ratione ea, velit accusamus excepturi atque laudantium sed voluptates eaque magni facere porro, dolores expedita eveniet, modi deleniti reprehenderit! Fugit, blanditiis quidem. Veritatis exercitationem distinctio expedita incidunt saepe placeat sit, officia dicta quam.",
                    sideEffects:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolorem eum voluptate sapiente, eos earum repellendus omnis dolores officia voluptatem. Facere eius eos nesciunt amet aut repudiandae dicta, iure incidunt ipsa fugit! Nobis dicta expedita in nostrum temporibus nihil quasi corporis unde, iure hic distinctio nam eos quo illo consequatur.",
                    directions: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam illum alias accusamus autem ut facilis sequi, cum eos minima eius, esse, veritatis vero ad? Quis magnam sed consectetur libero ea?",
                    safetyAdvice: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quam quisquam, reiciendis perspiciatis rerum neque saepe ab distinctio, architecto delectus dignissimos itaque quasi inventore maiores earum eligendi iure laboriosam. Laboriosam modi, corrupti consequatur quasi error nam debitis. Fugiat, ad provident.",
                },
                {
                    id: 3,
                    name: "Product 2",
                    image: "/assets/Screenshot 2025-01-14 002455.png",
                    price: 49.99,
                    description: "Description 2",
                    benefits: "Benefits 2",
                    sideEffects: "Side effects 2",
                    directions: "Directions 2",
                    safetyAdvice: "Safety advice 2",
                },
                {
                    id: 4,
                    name: "Product 2",
                    image: "/assets/Screenshot 2025-01-14 002455.png",
                    price: 49.99,
                    description: "Description 2",
                    benefits: "Benefits 2",
                    sideEffects: "Side effects 2",
                    directions: "Directions 2",
                    safetyAdvice: "Safety advice 2",
                },
                {
                    id: 5,
                    name: "Product 2",
                    image: "/assets/Screenshot 2025-01-14 002455.png",
                    price: 49.99,
                    description: "Description 2",
                    benefits: "Benefits 2",
                    sideEffects: "Side effects 2",
                    directions: "Directions 2",
                    safetyAdvice: "Safety advice 2",
                },
            ];
            setProducts(data);
            setLoading(false);
        };

        fetchProducts();
    }, []);

    const addToCart = (product) => {
        setCart((prevCart) => {
          const existingItem = prevCart.find((item) => item.id === product.id);
          if (existingItem) {
            return prevCart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
          } else {
            return [...prevCart, { ...product, quantity: 1 }];
          }
        });
      };
    
      const updateCartItem = (id, increment) => {
        setCart((prevCart) =>
          prevCart.map((item) =>
            item.id === id
              ? { ...item, quantity: Math.max(1, item.quantity + increment) }
              : item
          )
        );
      };
    
      const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
      };

    return (
        <ProductContext.Provider value={{ products, loading, cart, addToCart, updateCartItem, removeFromCart }}>
            {children}
        </ProductContext.Provider>
    );
};
