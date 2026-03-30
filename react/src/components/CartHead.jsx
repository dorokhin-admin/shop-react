import React from 'react';

const CartHead = (props) => {
    const { //в функции так
        total,
        done
    } = props

    const hasItem = total > 0

        return (
            <div className="cart__header">
                <div className="cart-head__cart">
                    <h1 className="cart-title">Корзина</h1>
                    <div className="cart-head__cart-wrapper">{total}</div>
                </div>
                <div className="cart__actions">
                    <button className="cart__select"><img src="src/IMAGES/Checkbox%20(1).png" alt=""
                                                          className="cart__select"/></button>
                    {hasItem && (
                        <button className="cart-select-all">Выделить всё</button>
                    )}
                    {hasItem && (
                        <button className="cart-delete-all">Удалить выбранные</button>
                    )}
                </div>
            </div>
        );
}
export default CartHead;