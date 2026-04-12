import React, {useState} from 'react';
import {useShopStore} from "../store/useShopStore.js";
import { shallow } from 'zustand/shallow';

const CartMakingOrder = () => {
    const orders = useShopStore(state => state.orders);
    const ordersQuantity = useShopStore(state => state.getTotalQuantity());

    const [isActive, setActive] = React.useState(false);

    const sumResult = orders.reduce((sum, o) => sum + o.price * o.quantity, 0);

    const sumPromo = orders.reduce(
        (acc, o) => acc + o.quantity * (o.price * o.promo / 100),
        0
    );

    const discontSumPrice = orders.reduce(
        (acc, o) => acc + o.price * o.quantity * (1 - o.promo / 100),
        0
    );

    const bonus = discontSumPrice * 0.1;

    const bonusAmount = 200;
    const maxBonusUsage = Math.max(0, discontSumPrice - 1000);//1000 - минимальный порог
    const appliedBonus = isActive
        ? Math.min(bonusAmount, maxBonusUsage)//возвращает меньшую сумму
        : 0;
    const finalPrice = discontSumPrice - appliedBonus;
    const canOrder = finalPrice >= 1000;

    React.useEffect(() => {
        if (discontSumPrice < 1000) {
            setActive(false);
        }
    }, [discontSumPrice]);
    const toggleActive = () => {
        if (discontSumPrice >= 1000) {
            setActive(prev => !prev);
        }
    };

    return (
        <div className="making-order">
            <div className="making-order__bonus-toggle">
                <button className={`making-order__toggle ${isActive ? 'active' : ''}`} onClick={toggleActive}>
                    <div className="making-order__toggle-circle"></div>
                </button>
                <p className="making-order__writeoff">Списать {appliedBonus.toFixed(0)} ₽ </p>
            </div>
            <p className="making-order__accumulated">На карте накоплено {bonusAmount} ₽</p>

            <hr className="horizontal-line"/>

            <div className="making-order__summary">
                <div className="making-order__summary-left">
                    <p className="making-order__quantity">{ordersQuantity} товаров</p>
                    <p className="making-order__discount-label">Скидка</p>
                </div>
                <div className="making-order__summary-right">
                    <p className="making-order__sum-items">{sumResult} ₽</p>
                    <p className="making-order__discount">{sumPromo.toFixed(2)} ₽</p>
                </div>
            </div>

            <hr className="horizontal-line"/>

            <div className="making-order__total">
                <p className="making-order__total--result">Итог</p>
                <p className="making-order__total--priсe">{finalPrice.toFixed(2)} ₽</p>
            </div>
            <div className="making-order__bonus">
                <img src="src/IMAGES/smile.png" alt="smile"/>
                <span className="making-order__bonus-text">Вы получаете {bonus.toFixed(0)} <span
                    className="product__bonus-text--bold">бонусов</span></span>
            </div>
            <p className={`making-order__min-limit ${finalPrice <= 1000 ? 'active' : 'hidden'}`}>Минимальная сумма заказа 1000р</p>
            <button className={`making-order__button ${canOrder ? 'active' : ''}`} disabled={!canOrder}>Оформить заказ</button>
        </div>
    );
};

export default CartMakingOrder;