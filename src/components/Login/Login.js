import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from "../Custom/Button";
import Input from "../Custom/Input";
import "./Login.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

function Login() {
    const [phone, setPhone] = useState(null);

    const handleInput = e => {
        setPhone(e.target.value);
    }

    const signIn = e => {
        e.preventDefault();
    };

    const register = e => {
        e.preventDefault();
    };

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://res.cloudinary.com/dvehkdedj/image/upload/v1638249699/beauty_a8bih5.png"
                    alt=""
                />
            </Link>
            <div className="login__container">
                <p className="login__welcome">Xin chào</p>
                <p>Đăng nhập hoặc Tạo tài khoản</p>
                <Input
                    type="number"
                    placeholder="Số điện thoại"
                    value={phone}
                    onHandle={(e) => handleInput(e)}
                />
                 {/* <Input
                    type="number"
                    placeholder="Nhập mã OTP"
                    value={phone}
                    onHandle={(e) => handleInput(e)}
                /> */}
                <Button title="Tiếp Tục" onHandle={() => { }} />

                <div className="login__optionTitle">
                    <p>Đăng nhập bằng</p>
                </div>
                <div className="login__option">
                    <FacebookIcon color="primary" sx={{ fontSize: 80 }} />
                    <GoogleIcon color="primary" sx={{ fontSize: 70 }} />
                </div>
            </div>
        </div>
    )
}

export default Login;
