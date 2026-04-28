import React from 'react';
import Header from "../components/HeaderComponents/Header.jsx";
import HeaderNav from "../components/HeaderComponents/HeaderNav.jsx";
import Footer from "../components/Footer.jsx";
import DeliveryMakingOrder from "../components/DeliveryComponents/DeliveryMakingOrder.jsx";
import {useShopStore} from "../store/useShopStore.js";
import {Link, useNavigate} from "react-router-dom";
import {selectCartTotals} from "../store/selectors/cartCalculations.jsx";

const DeliveryPage = () => {
    const ordersQuantity = useShopStore(state => state.getTotalQuantity());

    const timeSlots = [
        { label: "8:00 - 14:00", start: 8, end: 14 },
        { label: "14:00 - 18:00", start: 14, end: 18 },
        { label: "18:00 - 20:00", start: 18, end: 20 },
        { label: "20:00 - 22:00", start: 20, end: 22 },
    ];

    const getInitialTimeSlot = () => {
        const now = new Date();
        const currentHour = now.getHours();

        const availableSlot = timeSlots.find(slot => currentHour < slot.end);

        return availableSlot ? availableSlot.label : timeSlots[0].label;
    };

    const today = new Date().toISOString().split('T')[0];
    const [form, setForm] = React.useState({
        city: "Усть-Ижма",
        street: "",
        house: "",
        float: "",
        additionally: "",
        date: today,
        time: getInitialTimeSlot()
    });


    const now = new Date();
    const currentHour = now.getHours();
    const isToday = form.date === new Date().toISOString().split('T')[0];
    const getTimeClass = (slot) => {
        const isSelected = form.time === slot.label;

        const isPast = isToday && currentHour >= slot.end;

        if (isSelected) return "delivery__time--green";
        if (isPast) return "delivery__time--block";

        return "delivery__time--transparent";
    };


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
                                    <textarea className='delivery__input' name="delivery__street" id="1" cols="20" rows="1"
                                                value={form.street}
                                                onChange={(e) => {
                                                    setForm(prev => ({...prev, street: e.target.value}))
                                                }}
                                    ></textarea>
                                </div>
                                <div className="delivery__field">
                                    <p className="delivery__label">Дом</p>
                                    <textarea className='delivery__input' name="delivery__house" id="2" cols="3" rows="1"
                                              value={form.house}
                                              onChange={(e) => {
                                                  setForm(prev => ({...prev, house: e.target.value}))
                                              }}
                                    ></textarea>
                                </div>
                                <div className="delivery__field">
                                    <p className="delivery__label">Квартира</p>
                                    <textarea className='delivery__input' name="delivery__float" id="3" cols="4"  rows="1"
                                              value={form.float}
                                              onChange={(e) => {
                                                  setForm(prev => ({...prev, float: e.target.value}))

                                              }}
                                    ></textarea>
                                </div>
                                <div className="delivery__field">
                                    <p className="delivery__label">Дополнительно</p>
                                    <textarea className='delivery__input' name="delivery__additionally" id="4" cols="10" rows="1"
                                              value={form.additionally}
                                              onChange={(e) => {
                                                  setForm(prev => ({...prev, additionally: e.target.value}))
                                              }}
                                    ></textarea>
                                </div>
                            </div>

                            <h1 className="delivery__title">Когда</h1>
                            <div className="delivery__fields">
                                <div className="delivery__field">
                                    <p className="delivery__label">Дата</p>
                                    <input
                                        type="date"
                                        className="delivery__date"
                                        value={form.date}
                                        onChange={(e) =>
                                            setForm(prev => ({ ...prev, date: e.target.value }))
                                        }
                                    />
                                </div>
                                <div className="delivery__field">
                                    <p className="delivery__label">Время</p>
                                    <div className="delivery__time">
                                        <div className="delivery__time">
                                            {timeSlots.map((slot) => (
                                                <button
                                                    type="button"
                                                    key={slot.label}
                                                    className={getTimeClass(slot)}
                                                    onClick={() => {
                                                        if (isToday && currentHour >= slot.end) return;
                                                        setForm(prev => ({
                                                            ...prev,
                                                            time: slot.label
                                                        }));
                                                    }}
                                                >
                                                    {slot.label}
                                                </button>
                                            ))}
                                        </div>
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

                        <DeliveryMakingOrder
                            form={form}
                        />

                    </div>

                </section>
            </div>
            <Footer/>

        </>
    );
};

export default DeliveryPage;