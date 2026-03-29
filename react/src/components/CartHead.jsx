import React, {Component} from 'react';

class CartHead extends Component {
    render() {
        return (
            <div className="cart__header">
                <div className="cart-head__cart">
                    <h1 className="cart-title">Корзина</h1>
                    <p className="cart-head__cart-wrapper">3</p>
                </div>
                <div className="cart__actions">
                    <button className="cart__select"><img src="src/IMAGES/Checkbox%20(1).png" alt=""
                                                          className="cart__select"/></button>
                    <button className="cart-select-all">Выделить всё</button>
                    <button className="cart-delete-all">Удалить выбранные</button>
                </div>
            </div>
        );
    }
}

export default CartHead;