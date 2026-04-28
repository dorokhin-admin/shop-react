import React from 'react';
import Header from "../components/HeaderComponents/Header.jsx";
import Footer from "../components/Footer.jsx";
import ManagerHeaderNav from "../components/ManagerComponents/ManagerHeaderNav.jsx";
import {Link} from "react-router-dom";
import {useShopStore} from "../store/useShopStore.js";

const ManagerPage = () => {
    const ordersQuantity = useShopStore(state => state.getTotalQuantity());
    const orders = useShopStore(state => state.orders)

    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    const dayAfterTomorrow = new Date();
    dayAfterTomorrow.setDate(today.getDate() + 2);

    const formatDate = (date) =>
        date.toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long'
        });

    const isSameDay = (d1, d2) =>
        d1.getDate() === d2.getDate() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getFullYear() === d2.getFullYear();

    const todayOrders = orders.filter(order =>
        isSameDay(new Date(order.date), today)
    );

    const tomorrowOrders = orders.filter(order =>
        isSameDay(new Date(order.date), tomorrow)
    );

    const afterTomorrowOrders = orders.filter(order =>
        isSameDay(new Date(order.date), dayAfterTomorrow)
    )

    const todayCount = todayOrders.length;
    const tomorrowCount = tomorrowOrders.length;
    const afterTomorrowCount = afterTomorrowOrders.length;

    const getNormaliedTime = (date) => {
        const hours = new Date(date).getHours();

        if(hours >= 18) {
            return {time: '11:00', nextDay: true}
        }
        if (hours < 11) {
            return { time: "14:00", nextDay: false };
        }
        if (hours < 14) {
            return { time: "16:00", nextDay: false };
        }
        if (hours < 16) {
            return { time: "18:00", nextDay: false };
        }
        return { time: "18:00", nextDay: false };
    }

    const normalizeOrderDate = (orderDate) => {
        const {time, nextDay} = getNormaliedTime(orderDate);

        const date = new Date(orderDate);

        if(nextDay) {
            date.setDate(date.getDate() + 1);
        }

        const [hours, minutes] = time.split(":");

        date.setHours(Number(hours));
        date.setMinutes(Number(minutes));
        date.setSeconds(0);

        return {
            ...date,
            labelTime: time
        }
    }


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
                                <p className="cart__date-quantity">{todayCount}</p></button>
                            <button className="cart__date--next">
                                <p className="cart__date-text">{formatDate(tomorrow)}</p>
                                <p className="cart__date-quantity">{tomorrowCount}</p></button>
                            <button className="cart__date--next">
                                <p className="cart__date-text">{formatDate(dayAfterTomorrow)}</p>
                                <p className="cart__date-quantity">{afterTomorrowCount}</p></button>
                        </div>
                    </div>

                    <div className="orders">
                        {orders.map(order => (
                            <div className="order" key={order.id}>
                                <div className="order__time" >
                                    <img src="/IMAGES/Frame%20211%20(2).png" alt="time" className="order__time-img"/>
                                    <h1 className="order__time-title">{order.time}</h1>
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
                                    {order.items.map((item, index) => (
                                        <div className="order__item" key={`${item.id}-${index}`}>
                                            <h1 className="order__item-value">{item.id.slice(-4)}</h1>
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
                                            <button className="order__item-chat">
                                                <img src="/IMAGES/Button%20(4).png" alt="chat"/>
                                            </button>
                                        </div>
                                        ))}
                                </div>
                            </div>
                        ))}
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