import React, {useState} from 'react';
import CartOrder from "./CartOrder.jsx";



const HeaderNav = ({items =[], orders, addToCart}) => {

    let [cartOpen, setCartOpen] = useState(false);
    const totalOrders = orders.length

    const showOrders = () => {
        return orders.map((orderItem, index) => (
            <CartOrder
                key={`${orderItem.id} - ${index}`}
                orderItem={orderItem}
                addToCart={addToCart}
            />
        ))
    }

    const showNothing = () => {
        return <div className="cart-empty">
            <h2>Товаров нет</h2>
        </div>
    }

    return (
        <div className='header__nav'>
            <a className='header__link header__link--favorite' href="#">
                <img className='heart' src='src/IMAGES/heart.png' alt="header__link--favorite"/>
                <span className='header__link-text'>Избранное</span>
            </a>


            <a className='header__link header__link--orders' href="#">
                <img className='orderImg' src='src/IMAGES/Frame%20211%20(3).png'
                     alt="header__link--orders"/>
                <span className='header__link-text'>Заказы</span>
            </a>

            <div className={`header__link header__link--cart ${cartOpen && 'active'}`}
            onClick={() => setCartOpen(prev => !prev)}
            >
                <img src='src/IMAGES/shopping-cart.png' alt="header__link--cart"/>
                <p className='header__link-text'>Корзина</p>
                <p className="header__link-counter">{totalOrders}</p>
                {cartOpen &&  (
                    <div
                        className={`header__link cart__Drawer ${cartOpen ? 'active' : ''}`}
                        onClick={(e) => e.stopPropagation()}//чтобы при клике по области корзины она не закрывалась
                    >
                        {totalOrders
                        ? showOrders()
                        : showNothing()}
                    </div>
                )}
            </div>


            <a className='header__profile' href="#">
                <img src="src/IMAGES/avatar.png" alt="avatar"/>
                <span className="header__profile-name">Алексей</span>
                <img src='src/IMAGES/chevron-down.png' alt="avatar"/>
            </a>
        </div>
    );
}

export default HeaderNav;