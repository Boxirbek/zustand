// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import useStore from '../../context/store';
import Product from '../hero/Hero';

const ProductList = () => {
    const [displayedProducts, setDisplayedProducts] = useState(12); // Berilgan miqdordagi mahsulotlar ko'rsatiladi
    const products = useStore((state) => state.products);
    const fetchProducts = useStore((state) => state.fetchProducts);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const handleSeeMore = () => {
        // Agar ko'rsatilayotgan mahsulotlar to'liq ro'yxatdan kam bo'lsa, yana 12 ta qo'shib yuklaymiz
        setDisplayedProducts(prevDisplayedProducts => prevDisplayedProducts + 12);
    };

    return (
        <>
            {displayedProducts < products.length && (
                <button onClick={handleSeeMore}>See More</button>
            )}
        <div className="product-list">
            {products.slice(0, displayedProducts).map((product) => (
                <Product key={product.id} product={product} />
            ))}
          
        </div>
          
        </>
    );
};

export default ProductList;
