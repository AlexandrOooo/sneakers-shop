import React from 'react';
const Drawer = () => {
    return (
        <div style={{ display: "none" }} className="overlay">
            <div className="drawer d">
                <h2 className="mb-30 d-flex justify-between">
                    Корзина
                    <img className="removeBtn cu-p" src="/img/remove.svg" alt="remove" />
                </h2>

                <div className="items">
                    <div className="cartItem mb-20 d-flex align-center">
                        <img className="mr-20" width={70} height={70} src="/img/sneakers/1.jpg" alt="Sneakers" />
                        <div className="mr-20">
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b className="mb-5">12 999 грн.</b>
                        </div>
                        <img className="removeBtn" src="/img/remove.svg" alt="remove" />
                    </div>
                </div>

                <div className="cartTotalBlock">
                    <ul className="mb-40">
                        <li className="d-flex justify-between mb-20">
                            <span>Итого: </span>
                            <b>21 498 грн. </b>
                        </li>
                        <li className="d-flex justify-between mb-20">
                            <span>Налог 5%: </span>
                            <b>1074 грн. </b>
                        </li>
                    </ul>
                    <button>Оформить заказ</button>
                </div>
            </div>
        </div>
    );
}

export default Drawer;