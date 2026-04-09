import React from 'react';

const HeaderCart = (props) => {
    const { //в функции так
        ordersQuantity,
        selectAll,
        deleteItems,
    } = props

    return (
        <>
            <div className="cart-header__header">
                <div className="cart-head__cart">
                    <h1 className="cart-title-header">Корзина</h1>
                    <div className="cart-head__cart-wrapper">{ordersQuantity}</div>
                </div>
            </div>
            <div className="cart-actions__header">
                <button className="cart__select"><img src="src/IMAGES/Checkbox%20(1).png" alt=""
                                                      className="cart__select"/></button>
                <button className="cart-select-all" onClick={selectAll}>Выделить всё</button>
                <button className="cart-delete-all" onClick={deleteItems}>Удалить выбранные</button>
            </div>
        </>
    );
}
export default HeaderCart;