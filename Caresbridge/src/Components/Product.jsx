import React, { useContext } from "react";
import ProductCard from "./Card/ProductCard";
import { ProductContext } from "./Context.js/ProductContext";

const Product = () => {

    const {products ,loading}=useContext(ProductContext)
    if (loading) {
        return <p>Loading products...</p>;
    }
    return (
        <div>
            <ProductCard products={products} />
        </div>
    );
};

export default Product;
