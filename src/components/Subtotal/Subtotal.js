import React from 'react';
import { currencyFormat } from '../../utils/CurrencyFormat';
import "./Subtotal.css";

function Subtotal({ basket }) {
    const handleTotalPrice = () => {
        let totalPrice = 0;

        basket?.map(product => {
            totalPrice += product.price * product.quantity;
        })

        return currencyFormat(totalPrice);
    }

    return (
        <div className="subtotal">
            <div className="subtotal__provisional">
                <div className="subtotal__item">
                    <p>Tạm tính</p>
                    <div className="subtotal__price">
                        <p className="subtotal__priceProvisonal">{handleTotalPrice()}</p>
                        <p className="subtotal__concurrency">đ</p>
                    </div>
                </div>
                <div className="subtotal__item">
                    <p>Giảm giá</p>
                    <div className="subtotal__price">
                        <p className="subtotal__discount">0</p>
                        <p className="subtotal__concurrency">đ</p>
                    </div>
                </div>
            </div>
            <div className="subtotal__item">
                <p className="subtotal__priceTotalTitle">Tổng cộng</p>
                <div className="subtotal__price">
                    <p className="subtotal__priceTotal">{handleTotalPrice()}</p>
                    <p className="subtotal__concurrencyTotal">đ</p>
                </div>
            </div>
            <button className="subtotal__buttonPay">
                Mua Hàng ({basket?.length})
            </button>
        </div>
    )
}

export default Subtotal;
