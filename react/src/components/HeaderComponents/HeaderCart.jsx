import React, {useState} from 'react';
import HeaderMakingOrder from "./HeaderMakingOrder.jsx";
import HeaderOrder from "./HeaderOrder.jsx";
import HeaderCartHead from "./HeaderCartHead.jsx";
import {useShopStore} from "../../store/useShopStore.js";

const HeaderCart = () => {
    const orders = useShopStore(state => state.orders);
    const ordersQuantity = useShopStore(state => state.getTotalQuantity());

    let [cartOpen, setCartOpen] = useState(false);
    const totalOrders = orders.length

    return (
        <div className={`header__link header__link--cart ${cartOpen && 'active'}`}
             onClick={() => setCartOpen(prev => !prev)}
        >
            <img src='src/IMAGES/shopping-cart.png' alt="header__link--cart"/>
            <p className='header__link-text'>Корзина</p>
            <p className="header__link-counter">{ordersQuantity}</p>
            {cartOpen &&(

                <div className={`header__link cart__Drawer ${cartOpen && 'active'}`}
                     onClick={(e) => e.stopPropagation()}//чтобы при клике по области корзины она не закрывалась
                >
                    {totalOrders ? (
                    <>
                        <div className="cart-head__header">
                            <a className="cart-head-header__main">Главная</a>
                            <img src="src/IMAGES/chevron-right.png" alt="chevron" className="arrow"/>
                            <p className="cart-head-header__cart--text">Корзина</p>
                        </div>

                        <HeaderCartHead
                        />

                        {orders.map((orderItem) => (
                            <HeaderOrder
                                orderItem={orderItem}
                                key={orderItem.id}
                            />
                        ))}

                        <HeaderMakingOrder
                            orders={orders}
                            ordersQuantity={ordersQuantity}
                        />
                    </>
                   ) : (
                    <div className="cart-empty">
                        <h2>Товаров нет</h2>
                    </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default HeaderCart;