import React from 'react';

const CartMakingOrder = () => {
    return (
        <div className="making-order">
            <div className="making-order__bonus-toggle">
                <button className="making-order__toggle ">
                    <div className="making-order__toggle-circle"></div>
                </button>
                <p className="making-order__writeoff">Списать 200 ₽ </p>
            </div>
            <p className="making-order__accumulated">На карте накоплено 200 ₽</p>
            <div className="making-order__summary">
                <div className="making-order__summary-left">
                    <p className="making-order__quantity" data-cart-counter></p>
                    <p className="making-order__discount-label">Скидка</p>
                </div>
                <div className="making-order__summary-right">
                    <p className="making-order__sum-items"></p>
                    <p className="making-order__discount"></p>
                </div>
            </div>
            <div className="making-order__total">
                <p className="making-order__total--result">Итог</p>
                <p className="making-order__total--priсe"></p>
            </div>
            <div className="making-order__bonus">

            </div>
            <p className="making-order__min-limit">Минимальная сумма заказа 1000р</p>
            <button className="making-order__button">Оформить заказ</button>
        </div>
    );
};

export default CartMakingOrder;