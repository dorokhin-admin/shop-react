import React from 'react';
import Header from "../components/HeaderComponents/Header.jsx";
import HeaderNav from "../components/HeaderComponents/HeaderNav.jsx";
import Footer from "../components/Footer.jsx";
import DeliveryMakingOrder from "../components/DeliveryComponents/DeliveryMakingOrder.jsx";
import {useShopStore} from "../store/useShopStore.js";
import {Link} from "react-router-dom";

const DeliveryPage = () => {
    const ordersQuantity = useShopStore(state => state.getTotalQuantity());
    return (
        <>
            <header>
                <div className="container">
                    <div className='header__inner'>
                        <Header/>
                        <HeaderNav/>
                    </div>
                </div>
            </header>

            <div className="container">
                <section className="page page--delivery">
                    <div className="cart-head">
                        <Link className="cart-head__main" to={'/'}>Главная</Link>
                        <img src="/IMAGES/chevron-right.png" alt="" className="arrow"/>
                        <p className="cart-head__cart--text">Корзина</p>
                    </div>

                    <div className="cart__header">
                        <div className="cart-head__cart">
                            <h1 className="cart-title">Доставка</h1>
                            <p className="cart-head__cart-wrapper">{ordersQuantity}</p>
                        </div>
                    </div>

                    <div className="delivery__block-cart">
                        <form action="" className="delivery">
                            <h1 className="delivery__title">Куда</h1>
                            <div className="delivery__fields">
                                <div className="delivery__field">
                                    <p className="delivery__label">Населенный пункт</p>
                                    <button className="delivery__city">
                                        <p>Усть-Ижма</p>
                                        <img src="/IMAGES/chevron-down.png" alt=""/></button>
                                </div>
                                <div className="delivery__field">
                                    <p className="delivery__label">Улица</p>
                                    <textarea className='delivery__input' name="delivery__street" id="1" cols="20"
                                              rows="1"></textarea>
                                </div>
                                <div className="delivery__field">
                                    <p className="delivery__label">Дом</p>
                                    <textarea className='delivery__input' name="delivery__house" id="2" cols="3"
                                              rows="1"></textarea>
                                </div>
                                <div className="delivery__field">
                                    <p className="delivery__label">Квартира</p>
                                    <textarea className='delivery__input' name="delivery__float" id="3" cols="4"
                                              rows="1"></textarea>
                                </div>
                                <div className="delivery__field">
                                    <p className="delivery__label">Дополнительно</p>
                                    <textarea className='delivery__input' name="delivery__additionally" id="4" cols="10"
                                              rows="1"></textarea>
                                </div>
                            </div>

                            <h1 className="delivery__title">Когда</h1>
                            <div className="delivery__fields">
                                <div className="delivery__field">
                                    <p className="delivery__label">Дата</p>
                                    <button className="delivery__date">
                                        <p>20.02.2021</p>
                                        <img src="/IMAGES/chevron-down.png" alt=""/></button>
                                </div>
                                <div className="delivery__field">
                                    <p className="delivery__label">Время</p>
                                    <div className="delivery__time">
                                        <button className='delivery__time--transparent'>8:00 - 14:00</button>
                                        <button className='delivery__time--green'>14:00 - 18:00</button>
                                        <button className='delivery__time--block'>18:00 - 20:00</button>
                                        <button className='delivery__time--block'>20:00 - 22:00</button>
                                    </div>
                                </div>
                            </div>

                            <h1 className="delivery__title">Вход</h1>
                            <div className="delivery__fields">
                                <div className="delivery__field-footer">
                                    <input className='delivery__telephone' name="delivery__input" id="5"
                                           placeholder="+79128883443"/>
                                    <button className='delivery__getcode'>Получить код</button>
                                    <button className='delivery__loginbymail'>Войти по почте</button>
                                </div>
                            </div>
                        </form>

                        <DeliveryMakingOrder/>

                    </div>

                </section>
            </div>
            <Footer/>

        </>
    );
};

export default DeliveryPage;