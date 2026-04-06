import React, {Component} from 'react';
import CartHead from "./CartHead.jsx";
import CartItem from "./CartItem.jsx";
import CartListItems from "./CartListItems.jsx";
import CartOrder from "./CartOrder.jsx";

class Cart extends Component {
    render() {
        const {
            items = [],
            orders,
            cartOpen,
            addToCart,
            plus,
            deleteItems,
            toggleSelect,
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

                <div className={`block-cart ${orders.length>0 ? 'active' : ''}`}>
                    {orders.map((orderItem, index) => (
                        <CartOrder
                            key={`${orderItem.id} - ${index}`}
                            orderItem={orderItem}
                            addToCart={addToCart}
                            plus={plus}
                            toggleSelect={toggleSelect}
                        />
                    ))}
                </div>
            </section>

    );
    }
}

    export default Cart;