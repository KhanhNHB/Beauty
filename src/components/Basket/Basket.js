import React from 'react';
import "./Basket.css";
import BasketProduct from './BasketProduct';

function Basket({ basket }) {

    return (
        <div className="basket">
            <div className="basket__header">
                <p className="basket__selectHeader">Tất cả (1 sản phẩm)</p>
                <p className="basket__priceHeader">Đơn giá</p>
                <p className="basket__quantityHeader">Số lượng</p>
                <p className="basket__totalPriceHeader">Thành tiền</p>
                <button>Delete All</button>
            </div>
            <div className="basket__body">
                {basket.map(product => {
                    return <BasketProduct product={product} />
                })}
            </div>
        </div>
    )
}

export default Basket;
