import React from 'react';
import "./Product.css";
import { useStateValue } from "../../provider/StateProvider";

function Product({ id, name, image, desc, price, sold_number }) {
    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                name: name,
                image: image,
                desc: desc,
                price: price,
                sold_number: sold_number
            }
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <img
                    className="product__image"
                    src={image}
                    alt="" />
                <p className="product__name">{name}</p>
                <p className="product__desc">{desc}</p>
                <p className="product__price">
                    <small>{price}</small>
                    <small className="product__currency_unit">VNĐ</small>
                </p>
                <div className="product__sold">
                    <p>Đã Bán:</p>
                    <p className="product__sold__evident">{sold_number}</p>
                </div>
                <button
                    className="product__button"
                    onClick={addToBasket}
                >
                    Chọn Mua
                </button>
            </div>
        </div>
    )
}

export default Product
