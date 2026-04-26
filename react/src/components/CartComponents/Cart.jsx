import HeaderCartHead from "../HeaderComponents/HeaderCartHead.jsx";
import CartOrder from "./CartOrder.jsx";
import React, {useMemo} from 'react';
import CartMakingOrder from "./CartMakingOrder.jsx";
import {useShopStore} from "../../store/useShopStore.js";
import {Link} from "react-router-dom";

const Cart = () => {
    const orders = useShopStore(state => state.orders);
    const plus = useShopStore(state => state.plus);
    const minus = useShopStore(state => state.minus);
    const toggleSelect = useShopStore(state => state.toggleSelect);
    const ordersQuantity = useShopStore(state => state.getTotalQuantity());
    const addToCart = useShopStore(state => state.addToCart);

    return (
    <section className="page page--cart">
        <div className="cart-head">
            <Link
                className="cart-head__main"
                to={'/'}
                aria-label='go to main'
            > Главная
            </Link>
            <img src="/IMAGES/chevron-right.png" alt="chevron" className="arrow"/>
            <p className="cart-head__cart--text">Корзина</p>
        </div>

        <HeaderCartHead
        />

        <div className="container-block-cart">
            <div className={`block-cart ${orders.length>0 ? 'active' : ''}`}>
                {orders.map((orderItem) => (
                    <CartOrder
                        key={orderItem.id}
                        orderItem={orderItem}
                        addToCart={addToCart}
                        plus={plus}
                        minus={minus}
                        toggleSelect={toggleSelect}
                    />
                ))}
            </div>
            <CartMakingOrder
                ordersQuantity={ordersQuantity}
                orders={orders}
            />
        </div>

    </section>
    );
};

export default Cart;