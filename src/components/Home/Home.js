import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '..';
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://res.cloudinary.com/dvehkdedj/image/upload/v1638255967/79947294_sjlesz.png"
                    alt=""
                />
                <div className="home__row">
                    <Link to="/detail"
                        style={{ textDecoration: 'none', color: 'black', zIndex: 1 }}>
                        <Product
                            id="1"
                            name="Sơn môi"
                            image="https://res.cloudinary.com/dvehkdedj/image/upload/v1638263410/0001761_son-laura-sunshine-nhat-kim-anh_550_beq9gs.jpg"
                            desc="Hàng nhập khẩu Hàn Quốc, phù hợp cho mùa đông"
                            price="69.000"
                            sold_number="78"
                        />
                    </Link>
                    <Link to="/detail" style={{ textDecoration: 'none', color: 'black', zIndex: 1 }}>
                        <Product
                            id="2"
                            name="Sơn môi Aris"
                            image="https://res.cloudinary.com/dvehkdedj/image/upload/v1638263440/mac-style-shocked-303_1024x1024_2d26784e95214b779f8023efc19af1b3_master_nxgxp7.jpg"
                            desc="Tự tin, lâu phai màu. Hàng nhập khẩu Mỹ, phù hợp cho mùa đông"
                            price="89.000"
                            sold_number="106"
                        />
                    </Link>
                </div>
                <div className="home__row">
                    <Link to="/detail" style={{ textDecoration: 'none', color: 'black', zIndex: 1 }}>
                        <Product
                            id="3"
                            name="Sơn môi Ania"
                            image="https://res.cloudinary.com/dvehkdedj/image/upload/v1638263463/Ink-tattoo_ddswhr.jpg"
                            desc="Hàng nhập khẩu Hàn Quốc, phù hợp cho mùa đông"
                            price="68.000"
                            sold_number="214"
                        />
                    </Link>
                    <Link to="/detail" style={{ textDecoration: 'none', color: 'black', zIndex: 1 }}>
                        <Product
                            id="4"
                            name="Sơn môi Lipstop"
                            image="https://res.cloudinary.com/dvehkdedj/image/upload/v1638263483/111b2f93e992da73e24160937928f1d8_rnumzr.jpg"
                            desc="Hàng nhập khẩu Hàn Quốc, lâu phai, tự nhiên, phù hợp cho mùa đông"
                            price="120.000"
                            sold_number="251"
                        />
                    </Link>
                    <Link to="/detail" style={{ textDecoration: 'none', color: 'black', zIndex: 1 }}>
                        <Product
                            id="5"
                            name="Sơn môi Mimax"
                            image="https://res.cloudinary.com/dvehkdedj/image/upload/v1638263510/google-shopping-son-li-lau-troi-essance-rd402-chili-powder-3-5g_img_380x380_64adc6_fit_center_sbusfk.jpg"
                            desc="Tự tin hơn khi mùa đông đến. Hàng nhập khẩu Hàn Quốc, phù hợp cho mùa đông"
                            price="189.000"
                            sold_number="101"
                        />
                    </Link>
                </div>
                <div className="home__row">
                    <Link to="/detail" style={{ textDecoration: 'none', color: 'black', zIndex: 1 }}>
                        <Product
                            id="1"
                            name="Sơn môi Queen"
                            image="https://res.cloudinary.com/dvehkdedj/image/upload/v1638263573/rougedrama_yostaw.png"
                            desc="Hàng nhập khẩu Hàn Quốc, dưỡng môi, không khô nức, mềm mại tự tin nơi công sở"
                            price="299.000"
                            sold_number="278"
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
