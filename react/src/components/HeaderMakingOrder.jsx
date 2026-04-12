import React from 'react';

const HeaderMakingOrder = ({ordersQuantity,orders}) => {
    const sumResult = orders.reduce((sum, order) => sum + order.price * order.quantity, 0);
    const sumPromo = orders.reduce((acc, order) => acc + order.quantity * ((order.price * order.promo) / 100), 0);
    const discontSumPrice = orders.reduce((acc, order) =>
        acc + order.price * order.quantity * (1 - order.promo / 100),0);
    const bonus = discontSumPrice * 0.1;

    const [isActive, setActive] = React.useState(false);
    const toggleActive = () => {
        if(discontSumPrice >= 1000){
            setActive(prev => !prev)
        }
    };

    const bonusAmount = 200;
    const maxBonusUsage = Math.max(0, discontSumPrice - 1000);//1000 - минимальный порог
    const appliedBonus = isActive
        ? Math.min(bonusAmount, maxBonusUsage)//возвращает меньшую сумму
        : 0;
    const finalPrice = discontSumPrice - appliedBonus;
    const canOrder = finalPrice >= 1000;

    return (
        <div className="header-making-order">
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
            <div className="down-header-block">
                <p className={`header-making-order__min-limit ${finalPrice <= 1000 ? 'active' : 'hidden'}`}>Минимальная сумма заказа 1000р</p>
                <button className={`header-making-order__button ${canOrder ? 'active' : ''}`} disabled={!canOrder}>Оформить заказ</button>
            </div>
            <div className='go-cart'><button>Перейти в корзину</button></div>
        </div>
    );
};

export default HeaderMakingOrder;