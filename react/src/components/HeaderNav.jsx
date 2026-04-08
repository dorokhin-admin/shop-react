import React, {useState} from 'react';
import HeaderOrder from "./HeaderOrder.jsx";
import HeaderCartHead from "./HeaderCartHead.jsx";



const HeaderNav = ({   items = [],
                       orders = [],
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

    const showOrders = () => {
        return orders.map((orderItem, index) => (
            <React.Fragment key={orderItem.id}>
                <div className="cart-head__header">
                    <a className="cart-head__main">Главная</a>
                    <img src="src/IMAGES/chevron-right.png" alt="chevron" className="arrow"/>
                    <p className="cart-head__cart--text">Корзина</p>
                </div>

                <div className="cart__actions">
                        <button className="cart__select"><img src="src/IMAGES/Checkbox%20(1).png" alt=""
                                className="cart__select"/></button>
                        <button className="cart-select-all" onClick={selectAll}>Выделить всё</button>
                        <button className="cart-delete-all" onClick={deleteItems}>Удалить выбранные</button>
                </div>

                <HeaderCartHead
                ordersQuantity={ordersQuantity}
                selectAll={selectAll}
                deleteItems={deleteItems}
            />

            <HeaderOrder
                key={`${orderItem.id} - ${index}`}
                orderItem={orderItem}
                addToCart={addToCart}
                plus={plus}
                minus={minus}
                toggleSelect={toggleSelect}
                total={totalOrders}
                ordersQuantity={ordersQuantity}
            />
          </React.Fragment>
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