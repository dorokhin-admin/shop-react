import React from 'react';
import Header from "../components/HeaderComponents/Header.jsx";
import Footer from "../components/Footer.jsx";
import ManagerHeaderNav from "../components/ManagerComponents/ManagerHeaderNav.jsx";
import {Link} from "react-router-dom";
import {useShopStore} from "../store/useShopStore.js";

const ManagerPage = () => {
    const ordersQuantity = useShopStore(state => state.getTotalQuantity());
    return (
        <>
            <header>
                <div className="container">
                    <div className='header__inner'>
                        <Header/>
                        <ManagerHeaderNav/>
                    </div>
                </div>
            </header>
            <div className="container">
                <section className="page page--orders">
                    <div className="cart-head">
                        <Link
                            className="cart-head__main"
                            to={'/'}
                            aria-label='go to main'
                        > Главная
                        </Link>
                        <img src="/IMAGES/chevron-right.png" alt="" className="arrow"/>
                        <p className="cart-head__cart--text">Корзина</p>
                    </div>

                    <div className="cart__header">
                        <div className="cart-head__cart">
                            <h1 className="cart-title">Заказы</h1>
                            <p className="cart-head__cart-wrapper">{ordersQuantity}</p>
                        </div>
                        <div className="cart__header-calendar">
                            <button className="cart__date-choise"><img src="/IMAGES/Button%20(3).png"
                                                                       alt="calendar"/></button>
                            <button className="cart__date--now">
                                <p className="cart__date-text">Сегодня</p>
                                <p className="cart__date-quantity">10</p></button>
                            <button className="cart__date--next">
                                <p className="cart__date-text">1 апреля</p>
                                <p className="cart__date-quantity">2</p></button>
                            <button className="cart__date--next">
                                <p className="cart__date-text">5 апреля</p>
                                <p className="cart__date-quantity">1</p></button>
                        </div>
                    </div>

                    <div className="orders">
                        <div className="order">
                            <div className="order__time">
                                <img src="/IMAGES/Frame%20211%20(2).png" alt="time" className="order__time-img"/>
                                <h1 className="order__time-title">11:00</h1>
                            </div>
                            <div className="order__district">
                                <button className="order__district-first">
                                    <p className="cart__date-text">Усть-Ижма</p>
                                    <p className="cart__date-quantity">3</p></button>
                                <button className="order__district-next">
                                    <p className="cart__date-text">Галово</p>
                                    <p className="cart__date-quantity">2</p></button>
                            </div>
                            <div className="order-items">
                                <div className="order__item">
                                    <h1 className="order__item-value">222</h1>
                                    <div className="order__item-deliveryman">
                                        <img src="/IMAGES/avatar.png" alt="avatar"/>
                                        <p className="">Дмитрий</p>
                                    </div>
                                    <div className="order__item-telephone">
                                        <img src="/IMAGES/phone.png" alt="phone" className=""/>
                                        <p className="order__item-contact">+79128883443</p>
                                    </div>
                                    <button className="order__item-confirmed">
                                        <img src="/IMAGES/check-circle.png" alt="check"/>
                                        <p className="order__item-confirmed-text">Подтвержден</p>
                                        <img src="/IMAGES/chevron-down.png" alt="down"/>
                                    </button>
                                    <button className="order__item-check">
                                        <img src="/IMAGES/eye.png" alt="shape"/>
                                        <p className="order__item-status-text">Просмотреть заказ</p>
                                    </button>
                                    <button className="order__item-chat"><img src="/IMAGES/Button%20(4).png"
                                                                              alt="chat"/></button>
                                </div>
                                <div className="order__item">
                                    <h1 className="order__item-value">222</h1>
                                    <div className="order__item-deliveryman">
                                        <img src="/IMAGES/avatar.png" alt="avatar"/>
                                        <p className="">Дмитрий</p>
                                    </div>
                                    <div className="order__item-telephone">
                                        <img src="/IMAGES/phone.png" alt="phone" className=""/>
                                        <p className="order__item-contact">+79128883443</p>
                                    </div>
                                    <button className="order__item-confirmed">
                                        <img src="/IMAGES/check-circle.png" alt="check"/>
                                        <p className="order__item-confirmed-text">Подтвержден</p>
                                        <img src="/IMAGES/chevron-down.png" alt="down"/>
                                    </button>
                                    <button className="order__item-check">
                                        <img src="/IMAGES/eye.png" alt="shape"/>
                                        <p className="order__item-status-text">Просмотреть заказ</p>
                                    </button>
                                    <button className="order__item-chat"><img src="/IMAGES/Button%20(4).png"
                                                                              alt="chat"/></button>
                                </div>
                                <div className="order__item">
                                    <h1 className="order__item-value">222</h1>
                                    <div className="order__item-deliveryman">
                                        <img src="/IMAGES/avatar.png" alt="avatar"/>
                                        <p className="">Дмитрий</p>
                                    </div>
                                    <div className="order__item-telephone">
                                        <img src="/IMAGES/phone.png" alt="phone" className=""/>
                                        <p className="order__item-contact">+79128883443</p>
                                    </div>
                                    <button className="order__item-refund">
                                        <img src="/IMAGES/alert-triangle.png" alt="check"/>
                                        <p className="order__item-refund-text">Возврат</p>
                                        <img src="/IMAGES/chevron-down.png" alt="down"/>
                                    </button>
                                    <button className="order__item-check">
                                        <img src="/IMAGES/eye.png" alt="shape"/>
                                        <p className="order__item-status-text">Просмотреть заказ</p>
                                    </button>
                                    <button className="order__item-chat"><img src="/IMAGES/Button%20(4).png"
                                                                              alt="chat"/></button>
                                </div>
                            </div>
                        </div>
                        <div className="order">
                            <div className="order__time">
                                <img src="/IMAGES/Frame%20211%20(2).png" alt="time" className="order__time-img"/>
                                <h1 className="order__time-title">14:00</h1>
                            </div>
                            <div className="order__district">
                                <button className="order__district-first">
                                    <p className="cart__date-text">Усть-Ижма</p>
                                    <p className="cart__date-quantity">3</p></button>
                                <button className="order__district-next">
                                    <p className="cart__date-text">Галово</p>
                                    <p className="cart__date-quantity">2</p></button>
                            </div>
                            <div className="order-items">
                                <div className="order__item">
                                    <h1 className="order__item-value">222</h1>
                                    <div className="order__item-deliveryman">
                                        <img src="/IMAGES/avatar.png" alt="avatar"/>
                                        <p className="">Дмитрий</p>
                                    </div>
                                    <div className="order__item-telephone">
                                        <img src="/IMAGES/phone.png" alt="phone" className=""/>
                                        <p className="order__item-contact">+79128883443</p>
                                    </div>
                                    <button className="order__item-confirmed">
                                        <img src="/IMAGES/check-circle.png" alt="check"/>
                                        <p className="order__item-confirmed-text">Подтвержден</p>
                                        <img src="/IMAGES/chevron-down.png" alt="down"/>
                                    </button>
                                    <button className="order__item-check">
                                        <img src="/IMAGES/eye.png" alt="shape"/>
                                        <p className="order__item-status-text">Просмотреть заказ</p>
                                    </button>
                                    <button className="order__item-chat"><img src="/IMAGES/Button%20(4).png"
                                                                              alt="chat"/></button>
                                </div>
                                <div className="order__item">
                                    <h1 className="order__item-value">222</h1>
                                    <div className="order__item-deliveryman">
                                        <img src="/IMAGES/avatar.png" alt="avatar"/>
                                        <p className="">Дмитрий</p>
                                    </div>
                                    <div className="order__item-telephone">
                                        <img src="/IMAGES/phone.png" alt="phone" className=""/>
                                        <p className="order__item-contact">+79128883443</p>
                                    </div>
                                    <button className="order__item-confirmed">
                                        <img src="/IMAGES/check-circle.png" alt="check"/>
                                        <p className="order__item-confirmed-text">Подтвержден</p>
                                        <img src="/IMAGES/chevron-down.png" alt="down"/>
                                    </button>
                                    <button className="order__item-check">
                                        <img src="/IMAGES/eye.png" alt="shape"/>
                                        <p className="order__item-status-text">Просмотреть заказ</p>
                                    </button>
                                    <button className="order__item-chat"><img src="/IMAGES/Button%20(4).png"
                                                                              alt="chat"/></button>
                                </div>
                                <div className="order__item">
                                    <h1 className="order__item-value">222</h1>
                                    <div className="order__item-deliveryman">
                                        <img src="/IMAGES/avatar.png" alt="avatar"/>
                                        <p className="">Дмитрий</p>
                                    </div>
                                    <div className="order__item-telephone">
                                        <img src="/IMAGES/phone.png" alt="phone" className=""/>
                                        <p className="order__item-contact">+79128883443</p>
                                    </div>
                                    <button className="order__item-refund">
                                        <img src="/IMAGES/alert-triangle.png" alt="check"/>
                                        <p className="order__item-refund-text">Возврат</p>
                                        <img src="/IMAGES/chevron-down.png" alt="down"/>
                                    </button>
                                    <button className="order__item-check">
                                        <img src="/IMAGES/eye.png" alt="shape"/>
                                        <p className="order__item-status-text">Просмотреть заказ</p>
                                    </button>
                                    <button className="order__item-chat"><img src="/IMAGES/Button%20(4).png"
                                                                              alt="chat"/></button>
                                </div>
                            </div>
                        </div>
                        <div className="order">
                            <div className="order__time">
                                <img src="/IMAGES/Frame%20211%20(2).png" alt="time" className="order__time-img"/>
                                <h1 className="order__time-title">18:00</h1>
                            </div>
                            <div className="order__district">
                                <button className="order__district-first">
                                    <p className="cart__date-text">Усть-Ижма</p>
                                    <p className="cart__date-quantity">3</p></button>
                                <button className="order__district-next">
                                    <p className="cart__date-text">Галово</p>
                                    <p className="cart__date-quantity">2</p></button>
                            </div>
                            <div className="order-items">
                                <div className="order__item">
                                    <h1 className="order__item-value">222</h1>
                                    <div className="order__item-deliveryman">
                                        <img src="/IMAGES/avatar.png" alt="avatar"/>
                                        <p className="">Дмитрий</p>
                                    </div>
                                    <div className="order__item-telephone">
                                        <img src="/IMAGES/phone.png" alt="phone" className=""/>
                                        <p className="order__item-contact">+79128883443</p>
                                    </div>
                                    <button className="order__item-confirmed">
                                        <img src="/IMAGES/check-circle.png" alt="check"/>
                                        <p className="order__item-confirmed-text">Подтвержден</p>
                                        <img src="/IMAGES/chevron-down.png" alt="down"/>
                                    </button>
                                    <button className="order__item-check">
                                        <img src="/IMAGES/eye.png" alt="shape"/>
                                        <p className="order__item-status-text">Просмотреть заказ</p>
                                    </button>
                                    <button className="order__item-chat"><img src="/IMAGES/Button%20(4).png"
                                                                              alt="chat"/></button>
                                </div>
                                <div className="order__item">
                                    <h1 className="order__item-value">222</h1>
                                    <div className="order__item-deliveryman">
                                        <img src="/IMAGES/avatar.png" alt="avatar"/>
                                        <p className="">Дмитрий</p>
                                    </div>
                                    <div className="order__item-telephone">
                                        <img src="/IMAGES/phone.png" alt="phone" className=""/>
                                        <p className="order__item-contact">+79128883443</p>
                                    </div>
                                    <button className="order__item-confirmed">
                                        <img src="/IMAGES/check-circle.png" alt="check"/>
                                        <p className="order__item-confirmed-text">Подтвержден</p>
                                        <img src="/IMAGES/chevron-down.png" alt="down"/>
                                    </button>
                                    <button className="order__item-check">
                                        <img src="/IMAGES/eye.png" alt="shape"/>
                                        <p className="order__item-status-text">Просмотреть заказ</p>
                                    </button>
                                    <button className="order__item-chat"><img src="src/IMAGES/Button%20(4).png"
                                                                              alt="chat"/></button>
                                </div>
                                <div className="order__item">
                                    <h1 className="order__item-value">222</h1>
                                    <div className="order__item-deliveryman">
                                        <img src="/IMAGES/avatar.png" alt="avatar"/>
                                        <p className="">Дмитрий</p>
                                    </div>
                                    <div className="order__item-telephone">
                                        <img src="/IMAGES/phone.png" alt="phone" className=""/>
                                        <p className="order__item-contact">+79128883443</p>
                                    </div>
                                    <button className="order__item-new">
                                        <img src="/IMAGES/bag.png" alt="bag"/>
                                        <p className="order__item-new-text">Новый</p>
                                        <img src="/IMAGES/chevron-down.png" alt="down"/>
                                    </button>
                                    <button className="order__item-upload">
                                        <img src="/IMAGES/upload.png" alt="upload"/>
                                        <p className="order__item-status-text">Выгрузить в 1с</p>
                                    </button>
                                    <button className="order__item-chat"><img src="/IMAGES/Button%20(4).png"
                                                                              alt="chat"/></button>
                                </div>
                            </div>
                            <div className="order__products">
                                <div className="order__product">
                                    <article className="product-card">
                                        <img className='product-card__image' src="src/IMAGES/image.png" alt="product"/>
                                        <button className="product-card__cart">
                                            <img src="/IMAGES/shopping-cart.png" alt="cart"/>
                                            <p className="product-card__cart-counter">4</p>
                                        </button>
                                        <button className="product-card__warehouse">
                                            <img src="/IMAGES/box1.png" alt="box1"/>
                                            <p className="product-card__warehouse-counter">40</p>
                                        </button>
                                    </article>
                                    <div className="order__product-description">
                                        <p className="order__product-name">Снеки</p>
                                        <p className="order__product-about">Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»</p>
                                    </div>
                                </div>
                                <div className="order__product">
                                    <article className="product-card">
                                        <img className='product-card__image' src="src/IMAGES/image.png" alt="product"/>
                                        <button className="product-card__cart">
                                            <img src="/IMAGES/shopping-cart.png" alt="cart"/>
                                            <p className="product-card__cart-counter">4</p>
                                        </button>
                                        <button className="product-card__warehouse">
                                            <img src="/IMAGES/box1.png" alt="box1"/>
                                            <p className="product-card__warehouse-counter">40</p>
                                        </button>
                                    </article>
                                    <div className="order__product-description">
                                        <p className="order__product-name">Снеки</p>
                                        <p className="order__product-about">Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»</p>
                                    </div>
                                </div>
                                <div className="order__product">
                                    <article className="product-card">
                                        <img className='product-card__image' src="src/IMAGES/image.png" alt="product"/>
                                        <button className="product-card__cart">
                                            <img src="/IMAGES/shopping-cart.png" alt="cart"/>
                                            <p className="product-card__cart-counter">4</p>
                                        </button>
                                        <button className="product-card__warehouse">
                                            <img src="/IMAGES/box1.png" alt="box1"/>
                                            <p className="product-card__warehouse-counter">40</p>
                                        </button>
                                    </article>
                                    <div className="order__product-description">
                                        <p className="order__product-name">Снеки</p>
                                        <p className="order__product-about">Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»</p>
                                    </div>
                                </div>
                                <div className="order__product">
                                    <article className="product-card">
                                        <img className='product-card__image' src="/IMAGES/image.png" alt="product"/>
                                        <button className="product-card__cart">
                                            <img src="/IMAGES/shopping-cart.png" alt="cart"/>
                                            <p className="product-card__cart-counter">4</p>
                                        </button>
                                        <button className="product-card__warehouse">
                                            <img src="/IMAGES/box1.png" alt="box1"/>
                                            <p className="product-card__warehouse-counter">40</p>
                                        </button>
                                    </article>
                                    <div className="order__product-description">
                                        <p className="order__product-name">Снеки</p>
                                        <p className="order__product-about">Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»</p>
                                    </div>
                                </div>
                            </div>
                            <div className="order__item-check-center">
                                <button className="order__item-check">
                                    <img src="/IMAGES/eye.png" alt="shape"/>
                                    <p className="order__item-status-text">Просмотреть заказ</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
);
};

export default ManagerPage;