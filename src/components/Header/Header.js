import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../provider/StateProvider';

function Header() {
    const [{ basket }] = useStateValue();

    return (
        <div className="header">
            <div className="header__top">
                <div className="header__contact">
                    <div className="header__contact__item">
                        <PhoneIphoneIcon className="header__contact__icon" fontSize="small" />
                        <p>(+84) 866 844 971</p>
                    </div>
                    <div className="header__contact__item">
                        <MailIcon className="header__contact__icon" fontSize="small" />
                        <p>giauttn@beauty.com</p>
                    </div>
                </div>
                <div className="header__location">
                    <LocationOnIcon className="header__location__icon" fontSize="small" />
                    <Link to="/location" style={{ textDecoration: "none" }}>
                        <p style={{ color: "white" }}>Vị trí cửa hàng</p>
                    </Link>
                </div>
            </div>
            <div className="header__body">
                <div className="header__logo_container">
                    <Link to="/">
                        <img className="header__logo" src='https://res.cloudinary.com/dvehkdedj/image/upload/v1638249699/beauty_a8bih5.png' />
                    </Link>
                </div>

                <div className="header__search">
                    <SearchIcon className="header__searchIcon" />
                    <input className="header__searchInput" type="text" placeholder="Tìm sản phẩm, danh mục hay thương hiệu....." />
                </div>

                <div className="header__nav">
                    <div className="header__option">
                        <PersonIcon className="header__personIcon" fontSize="large" />
                        <Link to="/login" style={{ textDecoration: "none" }}>
                            <div className="header__optionPerson">
                                <span className="header__optionLineOne">Đăng Nhập / Đăng Ký</span>
                                <span className="header__optionLineTwo">Tài khoản</span>
                            </div>
                        </Link>
                    </div>
                    {/* <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Order</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div> */}
                </div>

                <Link to="/checkout" style={{ textDecoration: "none" }}>
                    <div className="header__optionBasket">
                        <ShoppingBasketOutlinedIcon
                            className="header__basketIcon"
                            fontSize="large"
                        />
                        <span
                            className="header__optionLineTwo header__basketCount"
                            style={{
                                color: basket?.length !== 0 ? "white" : "black",
                                backgroundColor: basket?.length !== 0 ? "red" : ""
                            }}
                        >
                            {basket?.length}
                        </span>
                        <span className="header__optionLineOne header__basketTitle">Giỏ Hàng</span>
                    </div>
                </Link>
            </div>
            <div className="header__bottom">
                <div className="header__">
                    <div className="header__home">
                        <p>Trang chủ</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
