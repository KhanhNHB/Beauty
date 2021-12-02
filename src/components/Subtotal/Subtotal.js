import React, { useState } from 'react';
import { getBasketTotal } from '../../provider/reducer';
import { currencyFormat } from '../../utils/CurrencyFormat';
import { useStateValue } from "../../provider/StateProvider";
import "./Subtotal.css";

function Subtotal() {
    const [{ basket }] = useStateValue();
    const [checkout, setCheckout] = useState(false);

    const handleTotalPrice = () => {
        // return currencyFormat(basket?.reduce((amount, product) => { 
        //     amount += product.price * product.quantity; 
        // }, 0));
        return 0;
    };

    const handleCheckout = () => {
        setCheckout(true);
    };

    const handleClose = () => {
        setCheckout(false);
    }

    return (
        <div className="subtotal">
            <div className="subtotal__provisional">
                <div className="subtotal__item">
                    <p>Tạm tính</p>
                    <div className="subtotal__price">
                        <p className="subtotal__priceProvisonal">{getBasketTotal(basket)}</p>
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
            <button className="subtotal__buttonPay" onClick={handleCheckout}>
                Mua Hàng ({basket?.length})
            </button>
        </div>
    )
}

export default Subtotal;
