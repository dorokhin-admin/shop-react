import React, {Component} from 'react';

class Cart extends Component {
    render() {
        return (
            <section className="page page--cart">
                <div className="cart-head">
                    <a className="cart-head__main">Главная</a>
                    <img src="src/IMAGES/chevron-right.png" alt="" className="arrow"/>
                    <p className="cart-head__cart--text">Корзина</p>
                </div>

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

                <div className="block-cart">
                    <div className="cart_items">
                        {/* items*/}
                    </div>
                </div>
            </section>

    );
    }
}

    export default Cart;