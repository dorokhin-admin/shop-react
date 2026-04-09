import React, {useState} from 'react';
import HeaderMakingOrder from "./HeaderMakingOrder.jsx";
import HeaderOrder from "./HeaderOrder.jsx";
import HeaderCartHead from "./HeaderCartHead.jsx";

const HeaderCart = ({   orders = [],
                        addToCart,
                        plus,
                        minus,
                        selectAll,
                        deleteItems,
                        toggleSelect,
                        ordersQuantity,
                                        }) => {

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
                            ordersQuantity={ordersQuantity}
                            selectAll={selectAll}
                            deleteItems={deleteItems}
                        />

                        {orders.map((orderItem, index) => (
                            <HeaderOrder
                                key={`${orderItem.id} - ${index}`}
                                orderItem={orderItem}
                                addToCart={addToCart}
                                plus={plus}
                                minus={minus}
                                toggleSelect={toggleSelect}
                                total={totalOrders}
                            />
                        ))}

                        <HeaderMakingOrder
                            ordersQuantity={ordersQuantity}
                            orders={orders}
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