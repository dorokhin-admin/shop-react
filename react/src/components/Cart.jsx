import React, {Component} from 'react';
import CartHead from "./CartHead.jsx";

class Cart extends Component {
    render() {
        return (
            <section className="page page--cart">
                <div className="cart-head">
                    <a className="cart-head__main">Главная</a>
                    <img src="src/IMAGES/chevron-right.png" alt="chevron" className="arrow"/>
                    <p className="cart-head__cart--text">Корзина</p>
                </div>

                <CartHead/>

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