import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../provider/StateProvider';
import { getMainMenus } from '../../helpers';

function Header() {
    const [{ basket }] = useStateValue();

    const data = {
        contacts: {
            phone: "(+84) 866 844 971",
            email: "giauttn@beauty.com"
        }
    };

    return (
        <div className="header">
            <div className="header__top">
                <div className="header__contact">
                    <div className="header__contact__item">
                        <PhoneIphoneIcon className="header__contact__icon" fontSize="small" />
                        <p>{data.contacts.phone}</p>
                    </div>
                    <div className="header__contact__item">
                        <MailIcon className="header__contact__icon" fontSize="small" />
                        <p>{data.contacts.email}</p>
                    </div>
                </div>
                <div className="header__location">
                    <Link to="/location" style={{
                        display: "flex",
                        textDecoration: "none",
                        color: "#808080"
                    }}>
                        <LocationOnIcon className="header__location__icon" fontSize="small" />
                        <p>Vị trí cửa hàng</p>
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
                    <SearchIcon className="header__search__icon" />
                    <input className="header__search__input" type="text" placeholder="Tìm sản phẩm, danh mục hay thương hiệu....." />
                </div>

                <div className="header__nav">
                    <div className="header__option">
                        <Link to="/login" style={{
                            display: "flex",
                            textDecoration: "none",
                            color: "red"
                        }}>
                            <PersonIcon className="header__person__icon" fontSize="large" />
                            <div className="header__option__person">
                                <span className="header__option__line__one">Đăng Nhập / Đăng Ký</span>
                                <span className="header__option__line__two">Tài khoản</span>
                            </div>
                        </Link>
                        <Link to="/checkout" style={{ textDecoration: "none" }}>
                            <div className="header__option__basket">
                                <ShoppingBasketOutlinedIcon className="header__basket__icon" fontSize="large" />
                                <span
                                    className="header__option__line__two header__basket__count"
                                    style={{
                                        color: basket?.length !== 0 ? "white" : "black",
                                        backgroundColor: basket?.length !== 0 ? "red" : ""
                                    }}
                                >
                                    {basket?.length}
                                </span>
                                <span className="header__optionLineOne header__basket__title">Giỏ Hàng</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="header__bottom">
                <div className="header__menu">
                    {getMainMenus().map(menu => (
                        <div className={"header__menu__item " + menu.id} key={menu.id}>
                            <Link to={"/" + menu.id} style={{
                                display: "flex",
                                textDecoration: "none",
                                color: "red"
                            }}>
                                <p>{menu.label}</p>
                                {/* {menu.id !== "home" && 
                                <ArrowDropDownIcon className="header__menu__icon" />
                                <div className="header__menu__item__child">
                                <div className="header__menu__item__child__head">
                                    <Link to="/face" style={{
                                        display: "flex",
                                        textDecoration: "none",
                                        color: "black"
                                    }}>
                                        <p>Mặt</p>
                                    </Link>
                                </div>
                                <div className="header__menu__item__child__tail">
                                    <Link to="/face" style={{
                                        display: "flex",
                                        textDecoration: "none",
                                        color: "black"
                                    }}>
                                        <p>Nền</p>
                                    </Link>
                                </div>
                                } 
                            </div>*/}
                            </Link>
                        </div>
                    ))}

                    {/* <div className="header__menu__item collections">
                        <Link to="/collections" style={{
                            display: "flex",
                            textDecoration: "none",
                            color: "black"
                        }}>
                            <p>Bộ sưu tập</p>
                            <ArrowDropDownIcon className="header__menu__icon" />
                            <div className="header__menu__item__child">
                                <div className="header__menu__item__child__head">
                                    <Link to="/face" style={{
                                        display: "flex",
                                        textDecoration: "none",
                                        color: "black"
                                    }}>
                                        <p>Mặt</p>
                                    </Link>
                                </div>
                                <div className="header__menu__item__child__tail">
                                    <Link to="/face" style={{
                                        display: "flex",
                                        textDecoration: "none",
                                        color: "black"
                                    }}>
                                        <p>Nền</p>
                                    </Link>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="header__menu__item">
                        <Link to="/cosmetics" style={{
                            display: "flex",
                            textDecoration: "none",
                            color: "black"
                        }}>
                            <p>Mỹ Phẩm</p>
                            <ArrowDropDownIcon className="header__menu__icon" />
                        </Link>
                    </div>
                    <div className="header__menu__item">
                        <Link to="/make-ups" style={{
                            display: "flex",
                            textDecoration: "none",
                            color: "black"
                        }}>
                            <p>Trang điểm</p>
                            <ArrowDropDownIcon className="header__menu__icon" />
                        </Link>
                    </div>
                    <div className="header__menu__item">
                        <Link to="/tools" style={{
                            display: "flex",
                            textDecoration: "none",
                            color: "black"
                        }}>
                            <p>Dụng cụ</p>
                            <ArrowDropDownIcon className="header__menu__icon" />
                        </Link>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Header;