import React from 'react';
import "./BasketProduct.css";

function BasketProduct({ product }) {
    return (
        <div className="basketProduct">
            <div className="basketProduct__rowCell">
                <input type="checkbox" />
                <img className="basketProduct__image" src={product.image} alt="" />
                <p className="basketProduct__name">{product.name}</p>
            </div>
            <div className="basketProduct__rowCell">
                <p className="basketProduct__price">{product.price}</p>
            </div>
            <div className="basketProduct__rowCell">
                <p className="basketProduct__quantity">{product.quantity}</p>
            </div>
            <div className="basketProduct__rowCell">
                <p className="basketProduct__totalPrice">{product.totalPrice}</p>
            </div>
            <div className="basketProduct__rowCell">
                <button className="basketProduct__deleteButton">Delete</button>
            </div>
        </div>
    )
}

export default BasketProduct;
