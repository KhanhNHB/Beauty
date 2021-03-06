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
import { getCategories, getCollections, getMainMenus } from '../../helpers';

function Header() {
    const [{ basket }] = useStateValue();

    const data = {
        contacts: {
            phone: "(+84) 866 844 971",
            email: "giauttn@beauty.com"
        }
    };

    const buildCategory = collection_id => {
        return getCategories().map(category => {
            return collection_id === category.collection_id && (
                <div className="header__menu__item__child__tail">
                    <Link to={"/" + category.name}
                        className="link"
                        style={{ textDecoration: "none" }}
                    >
                        <p>{category.label}</p>
                    </Link>
                </div>
            )
        });
    };

    const buildMenuImages = (menu_label) => {
        return (
            <div className="header__menu__image">
                <img
                    className="menu__image"
                    src="https://res.cloudinary.com/dvehkdedj/image/upload/v1638255967/79947294_sjlesz.png"
                    alt=""
                />
            </div>
        );
    };

    const buildDropMenu = menu => {
        return (
            <>
                <ArrowDropDownIcon className="header__menu__icon" />
                <div className={"header__menu__item__child " + menu.name}>
                    <div className="header__menu__item__child__container">
                        {
                            getCollections().map(collection => {
                                return collection.menu_id === menu.id && (
                                    <div className="header__menu__item__child__value">
                                        <div className="header__menu__item__child__head">
                                            <Link to={"/" + collection.name}
                                                className="link"
                                                style={{ textDecoration: "none" }}
                                            >
                                                <p>{collection.label}</p>
                                            </Link>
                                        </div>
                                        {buildCategory(collection.id)}
                                    </div>
                                );
                            })
                        }
                    </div>
                    {buildMenuImages(menu.label)}
                </div>
            </>
        );
    }

    const buildMainMenu = () => {
        return getMainMenus().map(menu => (
            <div className={"header__menu__item " + menu.name} key={menu.id}>
                <Link to={"/" + menu.name}
                    className="link"
                    style={{ textDecoration: "none" }}
                >
                    <p>{menu.label}</p>
                    {(menu.id !== "1") && buildDropMenu(menu)}
                </Link>
            </div>
        ));
    }

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
                    <Link to="/location"
                        className="link"
                        style={{ textDecoration: "none" }}
                    >
                        <LocationOnIcon className="header__location__icon" fontSize="small" />
                        <p>V??? tr?? c???a h??ng</p>
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
                    <input className="header__search__input" type="text" placeholder="T??m s???n ph???m, danh m???c hay th????ng hi???u....." />
                </div>

                <div className="header__nav">
                    <div className="header__option">
                        <Link to="/login"
                            className="link"
                            style={{ textDecoration: "none" }}
                        >
                            <div className="header__option__person">
                                <PersonIcon className="header__person__icon" fontSize="large" />
                                <div className="header__option__line">
                                    <span className="header__option__line__one">????ng Nh???p / ????ng K??</span>
                                    <span className="header__option__line__two">T??i kho???n</span>
                                </div>
                            </div>
                        </Link>
                        <Link to="/checkout"
                            className="link"
                            style={{ textDecoration: "none" }}
                        >
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
                                <span className="header__optionLineOne header__basket__title">Gi??? H??ng</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="header__bottom">
                <div className="header__menu">
                    {buildMainMenu()}
                </div>
            </div>
        </div>
    );
}

export default Header;