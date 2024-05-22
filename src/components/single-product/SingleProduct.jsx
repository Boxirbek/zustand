// src/components/SingleProduct.js
import React from 'react';
import './SingleProduct.css'
import { useParams } from 'react-router-dom';
import useStore from '../../context/store';

const SingleProduct = () => {
    const { id } = useParams();
    const products = useStore((state) => state.products);
    const product = products.find((product) => product.id === parseInt(id));

    if (!product) {
        return <div>Mahsulot topilmadi</div>;
    }

    return (<>
        <div className="single-product">
            <div className="right_single">
                <img className='single_img' src={product.thumbnail} alt={product.title} />
            </div>
            <div className="left_single">
                <h1 className='single_title'> {product.title}</h1>
                <p className='single_prise'>${product.price}</p>
                <p>{product.description}</p>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsum labore minima, sit ad, provident, enim fugit quae ex perspiciatis sapiente! Impedit dolorum veniam ab, eaque aut iste necessitatibus obcaecati?</span>
               
            </div>
          
        </div>
        <button className='btn_single'>Buy</button>
    </>
    );
};

export default SingleProduct;


