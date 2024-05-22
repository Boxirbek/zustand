// src/components/Product.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../../context/store';

const Product = ({ product }) => {
    const addToCart = useStore((state) => state.addToCart);
    const navigate = useNavigate();

    const handleImageClick = () => {
        navigate(`/product/${product.id}`);
    };

    return (
        <div className="product">
            <img src={product.thumbnail} alt={product.title} onClick={handleImageClick} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
        </div>
    );
};

export default Product;

