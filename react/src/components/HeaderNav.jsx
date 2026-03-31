import React, {useState} from 'react';

const HeaderNav = ({items =[]}) => {

    let [cartOpen, setCartOpen] = useState(false);
    const total = orders.length

    return (
        <div className='header__nav'>
            <a className='header__link header__link--favorite' href="#">
                <img className='heart' src='src/IMAGES/heart.png' alt="header__link--favorite"/>
                <span className='header__link-text'>Избранное</span>
            </a>console.logjj


            <a className='header__link header__link--orders' href="#">
                <img className='orderImg' src='src/IMAGES/Frame%20211%20(3).png'
                     alt="header__link--orders"/>
                <span className='header__link-text'>Заказы</span>
            </a>

            <button className={`header__link header__link--cart ${cartOpen && 'active'}`}
            onClick={() => setCartOpen(prev => !prev)}>
                <img src='src/IMAGES/shopping-cart.png' alt="header__link--cart"/>
                <p className='header__link-text'>Корзина</p>
                <p className="header__link-counter">{total}</p>
                {cartOpen &&  (
                    <div className={`cart-Drawer ${cartOpen ? 'active' : ''}`}></div>
                )}
            </button>


            <a className='header__profile' href="#">
                <img src="src/IMAGES/avatar.png" alt="Что-то"/>
                <span className="header__profile-name">Алексей</span>
                <img src='src/IMAGES/chevron-down.png' alt="Что-то"/>
            </a>
        </div>
    );
}

export default HeaderNav;