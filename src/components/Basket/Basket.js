import React from 'react';
import "./Basket.css";

function Basket({name, price, image}) {
    return (
        <div className="basket">
            <div className="basket__header">
                <p>Tất cả (1 sản phẩm)</p>
                <p>Đơn giá</p>
                <p>Số lượng</p>
                <p>Thành tiền</p>
                <button>Delete All</button>
            </div>
            <div className="basket__body">
                <img src={image} alt=""/>
                <p>{price}</p>
                <p>SL</p>
                <p>total</p>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default Basket;
