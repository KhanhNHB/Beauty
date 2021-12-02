import { currencyFormat } from "../utils/CurrencyFormat";

export const initialState = {
    basket: [{
        id: "2",
        name: "Sơn môi",
        image: "https://res.cloudinary.com/dvehkdedj/image/upload/v1638263440/mac-style-shocked-303_1024x1024_2d26784e95214b779f8023efc19af1b3_master_nxgxp7.jpg",
        desc: "Hàng nhập khẩu Hàn Quốc, phù hợp cho mùa đông",
        price: 123000,
        sold_number: "98"
    }]
}

export const getBasketTotal = (basket) => currencyFormat(basket?.reduce((amount, item) => item.price + amount, 0));
export const getIndexBasket = (basket, id) => {
    if (basket === null) { return -1; }
    return basket.findIndex(product => product.id === id);
};
export const removeIndexBasket = (basket, id) => {
    const indexBasket = getIndexBasket(basket, id);
    if (indexBasket === -1) { return basket; }
    return basket.filter(product => product.id !== id);
};

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case "DELETE_TO_BASKET":
            return {
                ...state,
                basket: removeIndexBasket(action.basket, action.id)
            };
        default:
            return state;
    }
}

export default reducer;