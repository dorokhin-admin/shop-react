import React from 'react';
import {useShopStore} from "../store/useShopStore.js";

const HeaderOrder = ({orderItem}) => {
    const plus = useShopStore(state => state.plus);
    const minus = useShopStore(state => state.minus);
    const toggleSelect = useShopStore(state => state.toggleSelect);

    const discontPrice = orderItem.price - (orderItem.price * orderItem.promo) / 100;
    const discontSumPrice = (orderItem.price * orderItem.quantity * (1 - orderItem.promo / 100)).toFixed(2);

    return (
        <div className="block-cart-item__header">
            <div  className={`cart-item__header ${!orderItem.selected ? 'cart-item-blure__header' : ''}`}>
                <div className="cart-item__image">
                    <button className="cart-item__checkbox-select"
                            onClick={() => toggleSelect(orderItem.id)}
                    >
                        {orderItem.selected === true
                            ? <img
                                src="src/IMAGES/Checkbox%20(2).png"
                                alt="have Checkbox"/>
                            : <img
                                src="src/IMAGES/Checkbox%20(3).png"
                                alt="no Checkbox"/>}
                    </button>
                    <img src={orderItem.imgSrc} alt="cart-image"
                         className="cart-image__img"/>
                </div>
                <div className="cart-item__info">
                    <h3 className="cart-item__title">Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»</h3>
                    <div className="cart-item__prices">
                        <div className="cart-item__price--card">
                            <div className="cart-item__price-value">
                                <p className="cart-item__amount">{discontPrice}</p>
                                <p className="cart__price-currency">{orderItem.currency}</p>
                            </div>
                        </div>
                        <div className="cartcart__usual-card">
                            <div className="cart-price__usual-card">
                                <p className="cart-item__unit">за шт.</p>
                            </div>
                        </div>
                        <p className="cart-item__promo">-10%</p>
                    </div>
                </div>
            </div>
            <div className="cart__quantity-wrapper">
                <div className="cart-header__quantity">
                    <button
                        className="cart__quantity-btn--minus"
                        onClick={() => minus(orderItem.id)}
                    >
                        <img src="src/IMAGES/minus.png"  alt="minus"/>
                    </button>
                    <p className="cart__quantity-number">{orderItem.quantity}</p>
                    <button
                        className="cart__quantity-btn--plus"
                        onClick={() => plus(orderItem.id)}
                    >
                        <img src="src/IMAGES/plus.png" alt="plus"/>
                    </button>
                </div>
                <div className="cart__sum-price">
                    <p className="cart__sum-price-number">{discontSumPrice} {orderItem.currency}</p>
                </div>
            </div>
        </div>
    );
};

export default HeaderOrder;