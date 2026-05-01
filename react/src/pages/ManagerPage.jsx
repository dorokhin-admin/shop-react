import React from 'react';
import Header from "../components/HeaderComponents/Header.jsx";
import Footer from "../components/Footer.jsx";
import ManagerHeaderNav from "../components/ManagerComponents/ManagerHeaderNav.jsx";
import {Link} from "react-router-dom";
import {useShopStore} from "../store/useShopStore.js";

const ManagerPage = () => {
    const orders = useShopStore(state => state.orders)
    const updateOrderStatus = useShopStore(state => state.updateOrderStatus);

    const [openStatusId, setOpenStatusId] = React.useState(null)
    const [openOrderId, setOpenOrderId] = React.useState(null)

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

    const todayStr = today.toISOString().split('T')[0];

    const tomorrowStr = tomorrow.toISOString().split('T')[0];

    const afterTomorrowStr = dayAfterTomorrow.toISOString().split('T')[0];

    const todayOrders = orders.filter(order =>
        order.date === todayStr
    );

    const tomorrowOrders = orders.filter(order =>
        order.date === tomorrowStr
    );

    const afterTomorrowOrders = orders.filter(order =>
        order.date === afterTomorrowStr
    );

    const todayCount = todayOrders.length;
    const tomorrowCount = tomorrowOrders.length;
    const afterTomorrowCount = afterTomorrowOrders.length;

    const getTimeSlot = (time) => {
        const hour = Number(time.split(":")[0]);

        if (hour >= 8 && hour < 14) {
            return "08:00 - 14:00";
        }

        if (hour >= 14 && hour < 18) {
            return "14:00 - 18:00";
        }

        if (hour >= 18 && hour < 22) {
            return "18:00 - 22:00";
        }

        return "00:00 - 08:00";
    };

    const groupOrdersByTime = (orders) => {
        return orders.reduce((acc, order) => {
            const slot = getTimeSlot(order.time);

            if (!acc[slot]) {
                acc[slot] = [];
            }

            acc[slot].push(order);

            return acc;
        }, {});
    };
    const groupedOrders = groupOrdersByTime(orders);

    const statuses = [
        { value: "new", label: "Новый" },
        { value: "confirmed", label: "Подтвержден" },
        { value: "refund", label: "Возврат" }
    ];

    const getStatusClass = (status) => {
        if (status === "new") return "order__item-new";
        if (status === "confirmed") return "order__item-confirmed";
        if (status === "refund") return "order__item-refund";
        return "";
    };

    const getStatusText = (status) => {
        if (status === "new") return "Новый";
        if (status === "confirmed") return "Подтвержден";
        if (status === "refund") return "Возврат";
        return "Неизвестно";
    };

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
                            <p className="cart-head__cart-wrapper">{orders.length}</p>
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
                                            <div className="order__status-wrapper">
                                                <button
                                                    className={getStatusClass(order.status)}
                                                    onClick={() =>
                                                        setOpenStatusId(prev =>
                                                            prev === order.id ? null : order.id
                                                        )
                                                    }
                                                >
                                                    {getStatusText(order.status)}
                                                    <img className='down' src="/IMAGES/chevron-down.png" alt="down" />
                                                </button>

                                                {openStatusId === order.id && (
                                                    <div className="order__status-dropdown">
                                                        {statuses.map(status => (
                                                            <div
                                                                key={status.value}
                                                                className="order__status-option"
                                                                onClick={() => {
                                                                    updateOrderStatus(order.id, status.value);
                                                                    setOpenStatusId(null);
                                                                }}
                                                            >
                                                                {status.label}
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                            <button className="order__item-check">
                                                <img src="/IMAGES/eye.png" alt="shape"/>
                                                <p className="order__item-status-text"
                                                    onClick={() =>
                                                setOpenOrderId(prev =>
                                                prev === order.id ? null : order.id)}
                                                >Просмотреть заказ</p>
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
                                {openOrderId  === order.id && (
                                    <div className="order__products">
                                        {order.items.map(item =>(
                                            <div className="order__product" key={item.id}>
                                                <article className="product-card">
                                                    <img
                                                        className='product-card__image'
                                                        src={item.imgSrc}
                                                        alt="product"
                                                    />
                                                    <button className="product-card__cart">
                                                        <img src="/IMAGES/shopping-cart.png" alt="cart"/>
                                                        <p className="product-card__cart-counter">
                                                            {item.quantity}
                                                        </p>
                                                    </button>
                                                    <button className="product-card__warehouse">
                                                        <img src="/IMAGES/box1.png" alt="box1"/>
                                                        <p className="product-card__warehouse-counter">40</p>
                                                    </button>
                                                    <div className="order__product-description">
                                                        <p className="order__product-name">{item.category}</p>
                                                        <p className="order__product-about">{item.title}»</p>
                                                    </div>
                                                </article>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <Footer/>
        </>
);
};

export default ManagerPage;