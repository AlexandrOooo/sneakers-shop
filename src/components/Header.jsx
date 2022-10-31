import React from 'react';
const Header = (props) => {
    return (
        <header className="d-flex justify-between align-center">
            <div className="d-flex align-center">
                <img width={40} height={40} src="img/logo.svg" />
                <div>
                    <h3 className="text-uppercase">React sneakers</h3>
                    <p className="opacity-5">Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="header__right d-flex">
                <li className="mr-30 cu-p" onClick={props.onClickCart}>
                    <img src="/img/cart.svg" />
                    <span>1205 грн.</span>
                </li>
                <li>
                    <img src="/img/user.svg" />
                </li>
            </ul>
        </header>
    );
}

export default Header;