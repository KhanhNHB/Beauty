import React from 'react'
import "./Checkout.css";

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout_container">
                <div className="checkout__left">
                    <img
                        className="checkout__ad"
                        src="https://res.cloudinary.com/dvehkdedj/image/upload/v1638267923/banner_discount_s6plft.jpg"
                        alt=""
                    />
                </div>
                <div className="checkout__discount">
                    <p>Miễn phí vận chuyển đơn từ 149K ở Xuân Hiệp, thị trấn Gia Ray</p>
                </div>
                <div className="checkout__info">
                    <p className="checkout__title">GIỎ HÀNG</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Checkout
