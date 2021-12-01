import React from 'react';
import "./Detail.css";
import SubDetail from './SubDetail';

function Detail() {

    const product = {
        id: "1",
        name: "Sơn môi",
        image: "https://res.cloudinary.com/dvehkdedj/image/upload/v1638263410/0001761_son-laura-sunshine-nhat-kim-anh_550_beq9gs.jpg",
        desc: "Hàng nhập khẩu Hàn Quốc, phù hợp cho mùa đông",
        price: "69.000",
        sold_number: "78"
    }

    return (
        <div className="detail">
            <div className="detail__left">
                <img
                    className="detail__image"
                    src={product?.image}
                    alt=""
                />
                <div className="detail__subImage">
                    <p>Sub Image</p>
                    {/* Item */}
                </div>
            </div>

            <div className="detail__right">
                <SubDetail/>
            </div>
        </div>
    )
}

export default Detail;
