import React, {useMemo} from 'react';
import {useShopStore} from "../../store/useShopStore.js";
import {selectCartTotals} from "../../store/selectors/cartCalculations.jsx";
import fakePaymentAPI from "../../api/paymentAPI.js";

const DeliveryMakingOrder = () => {
    const orders = useShopStore(state => state.orders);
    const ordersQuantity = useShopStore(state => state.getTotalQuantity());
    const createOrderFromCart = useShopStore(state => state.createOrderFromCart);

    const [isActive, setActive] = React.useState(false);

    const {
        sumResult,
        sumPromo,
        discontSumPrice,
        bonus,
        appliedBonus,
        finalPrice,
        canOrder,
        bonusAmount,
    } = selectCartTotals(orders);

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

    const handlePay = async () => {
        try {
            const res = await fakePaymentAPI({amount: finalPrice });
            if (res?.success) {
                createOrderFromCart();
            }else {
                alert('оплата не прошла');
            }
        } catch (error) {
            console.error("Payment error:", error);
            alert("Ошибка оплаты");
        }
    }
    return (
        <div className="making-order">
            <div className="making-order__bonus-toggle">
                <button className={`making-order__toggle ${isActive ? 'active' : ''}`} onClick={toggleActive}>
                    <div className="making-order__toggle-circle"></div>
                </button>
                <p className="making-order__writeoff">Списать {appliedBonus.toFixed(0)} ₽ </p>
            </div>
            <p className="making-order__accumulated">На карте накоплено {bonusAmount} ₽</p>

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

            <div className="making-order__total">
                <p className="making-order__total--result">Итог</p>
                <p className="making-order__total--priсe">{finalPrice.toFixed(2)} ₽</p>
            </div>
            <div className="making-order__bonus">
                <img src="/IMAGES/smile.png" alt="smile"/>
                <span className="making-order__bonus-text">Вы получаете {bonus.toFixed(0)} <span
                    className="product__bonus-text--bold">бонусов</span></span>
            </div>
            <button className="making-order__pay--online"
                    onClick={handlePay}
            >Оплатить на сайте</button>
            <button className="making-order__pay--offline"
                    onClick={createOrderFromCart}
            >Оплатить при получении</button>
        </div>
    );
};

export default DeliveryMakingOrder;