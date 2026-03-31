import React, {Component} from 'react';
import CartHead from "./CartHead.jsx";
import CartItem from "./CartItem.jsx";
import CartListItems from "./CartListItems.jsx";

class Cart extends Component {
    render() {
        const {
            items = [],
            addToCart,
            deleteItems,
        } = this.props;

        return (
            <section className="page page--cart">
                <div className="cart-head">
                    <a className="cart-head__main">Главная</a>
                    <img src="src/IMAGES/chevron-right.png" alt="chevron" className="arrow"/>
                    <p className="cart-head__cart--text">Корзина</p>
                </div>

                <CartHead
                    total={items.length}
                    done={items.filter((isDone) => isDone).length}
                    deleteItems={deleteItems}
                />

                <div className="block-cart">
                    <CartListItems
                        items={items}
                        addToCart={addToCart}
                        />
                </div>
            </section>

    );
    }
}

    export default Cart;