import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import PersonIcon from '@mui/icons-material/Person';

function Header() {
    return (
        <div className="header">
            <div className="header__logo_container">
                <img className="header__logo" src='https://res.cloudinary.com/dvehkdedj/image/upload/v1638249699/beauty_a8bih5.png' />
            </div>

            <div className="header__search">
                <SearchIcon className="header__searchIcon"/>
                <input className="header__searchInput" type="text" placeholder="Tìm sản phẩm, danh mục hay thương hiệu....." />
            </div>

            <div className="header__nav">
                <PersonIcon className="header__personIcon" fontSize="large" />
                <div className="header__optionPerson">
                    <span className="header__optionLineOne">Đăng Nhập / Đăng Ký</span>
                    <span className="header__optionLineTwo">Tài khoản</span>
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

            <div className="header__optionBasket">
                <ShoppingBasketOutlinedIcon className="header__basketIcon" fontSize="large" />
                <span className="header__optionLineTwo header__basketCount">0</span>
                <span className="header__optionLineOne header__basketTitle">Giỏ Hàng</span>
            </div>
        </div>
    )
}

export default Header