import React, { useState } from 'react';
import { useStateValue } from '../../../../provider/StateProvider';
import Button from "../../../Custom/Button";
import "./SubDetail.css";

function SubDetail({ product }) {
    const [{ basket }, dispatch] = useStateValue();
    const [quantity, setQuantity] = useState(1);

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: product.id,
                name: product.name,
                image: product.image,
                desc: product.desc,
                price: product.price,
                sold_number: product.sold_number,
                quantity: quantity
            }
        })
    }

    return (
        <div className="subDetail">
            <div className="subDetail__name">
                <p>{product.name}</p>
            </div>
            <div className="subDetail__desc">
                <p>{product.desc}</p>
            </div>
            <div className="subDetail__sold">
                <p>Đã Bán</p>
                <p className="subDetail__soldNumber">{product.sold_number}</p>
            </div>
            <div className="subDetail__price">
                <p className="subDetail__priceUnit">{product.price}</p>
                <p>đ</p>
            </div>
            <div className="subDetail__quantity">
                <p>Số Lượng</p>
                <p className="subDetail__quantityNumber">1</p>
            </div>
            <Button title="Chọn Mua" onHandle={() => addToBasket()} />
        </div>
    )
}

export default SubDetail;