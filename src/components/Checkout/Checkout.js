import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../provider/StateProvider';
import Basket from '../Basket/Basket';
import Subtotal from '../Subtotal/Subtotal';
import "./Checkout.css";

function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            {basket?.length === 0 ?
                <div className="checkout__empty">
                    <p>Không có sản phẩm nào trong giỏ hàng của bạn</p>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <div className="checkout__emptyButton">
                            <p>Tiếp tục mua sắm</p>
                        </div>
                    </Link>
                </div> :
                <>
                    <div className="checkout__left">
                        {/* <img
                            className="checkout__ad"
                            src="https://res.cloudinary.com/dvehkdedj/image/upload/v1638267923/banner_discount_s6plft.jpg"
                            alt=""
                        /> */}
                        <div className="checkout__discount">
                            <p>Miễn phí vận chuyển đơn từ 149K ở Xuân Hiệp, thị trấn Gia Ray</p>
                        </div>
                        <div>
                            <p className="checkout__title">GIỎ HÀNG</p>
                            <Basket basket={basket} />
                        </div>
                    </div>

                    <div className="checkout__right">
                        <Subtotal basket={basket}/>
                    </div>
                </>
            }
        </div>
    )
}

export default Checkout
