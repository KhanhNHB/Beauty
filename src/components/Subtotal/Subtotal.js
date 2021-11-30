import React from 'react';
import "./Subtotal.css";

function Subtotal() {
    return (
        <div className="subtotal">
            <div className="subtotal__provisional">
                <div className="subtotal__item">
                    <p>Tạm tính</p>
                    <p>550.000 VNĐ</p>
                </div>
                <div className="subtotal__item">
                    <p>Giảm giá</p>
                    <p>0 VNĐ</p>
                </div>
            </div>
            <div className="subtotal__item">
                <p className="subtotal__priceTitle">Tổng cộng</p>
                <p className="subtotal__price">553.000 VNĐ</p>
            </div>
            <button className="subtotal__buttonPay">Mua Hàng (4)</button>
        </div>
    )
}

export default Subtotal;
