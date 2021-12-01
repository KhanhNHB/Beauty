import React from 'react';
import "./BasketProduct.css";

function BasketProduct({ product }) {
    return (
        <div className="basketProduct">
            <select/>
            <img className="basketProduct__image" src={product.image} alt="" />
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.quantity}</p>
            <p>{product.totalPrice}</p>
        </div>
    )
}

export default BasketProduct;
