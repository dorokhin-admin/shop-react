import React from 'react';
import {useShopStore} from "../../store/useShopStore.js";
import { useNavigate} from "react-router-dom";
import {selectCartTotals} from "../../store/selectors/cartCalculations.jsx";

const CartMakingOrder = () => {
    const cart = useShopStore(state => state.cart);
    const ordersQuantity = useShopStore(state => state.getTotalQuantity());

    const [isBonusActive, setBonusActive] = React.useState(false);

    const {
        sumResult,
        sumPromo,
        discontSumPrice,
        bonus,
        appliedBonus,
        finalPrice,
        canOrder,
        bonusAmount,
    } = selectCartTotals(cart, isBonusActive);

    React.useEffect(() => {
        if (discontSumPrice < 1000) {
            setBonusActive(false);
        }
    }, [discontSumPrice]);

    const toggleActive = () => {
        if (discontSumPrice >= 1000) {
            setBonusActive(prev => !prev);
        }
    };

    const navigate = useNavigate();
    const handleClick = () => {
        if(!canOrder) return;
        navigate('/delivery');
    }

    return (
        <div className="making-order">
            <div className="making-order__bonus-toggle">
                <button className={`making-order__toggle ${isBonusActive ? 'active' : ''}`} onClick={toggleActive}>
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
                <img src="/IMAGES/smile.png" alt="smile"/>
                <span className="making-order__bonus-text">Вы получаете {bonus.toFixed(0)} <span
                    className="product__bonus-text--bold">бонусов</span></span>
            </div>
            <p className={`making-order__min-limit ${finalPrice <= 1000 ? 'active' : 'hidden'}`}>Минимальная сумма заказа 1000р</p>
            <button className={`making-order__button ${canOrder ? 'active' : ''}`}
                disabled={!canOrder}
                onClick={handleClick}
            >Оформить заказ
            </button>
        </div>
    );
};

export default CartMakingOrder;