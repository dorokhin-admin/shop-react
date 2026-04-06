import HeaderCartHead from "./HeaderCartHead.jsx";
import CartOrder from "./CartOrder.jsx";
import React from 'react';
import CartMakingOrder from "./CartMakingOrder.jsx";

const Cart = ({   items = [],
                  orders = [],
                  cartOpen,
                  addToCart,
                  plus,
                  minus,
                  selectAll,
                  deleteItems,
                  toggleSelect,
                  ordersQuantity
              }) => {



    return (
    <section className="page page--cart">
        <div className="cart-head">
            <a className="cart-head__main">Главная</a>
            <img src="src/IMAGES/chevron-right.png" alt="chevron" className="arrow"/>
            <p className="cart-head__cart--text">Корзина</p>
        </div>

        <HeaderCartHead
            ordersQuantity={ordersQuantity}
            selectAll={selectAll}
            deleteItems={deleteItems}
            orders={orders}
        />

        <div className="container-block-cart">
            <div className={`block-cart ${orders.length>0 ? 'active' : ''}`}>
                {orders.map((orderItem, index) => (
                    <CartOrder
                        key={`${orderItem.id} - ${index}`}
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