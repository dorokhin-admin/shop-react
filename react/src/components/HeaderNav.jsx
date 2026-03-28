import React, {Component} from 'react';

class HeaderNav extends Component {
    render() {
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

                <a className='header__link header__link--cart' href="#">
                    <img src='src/IMAGES/shopping-cart.png' alt="header__link--cart"/>
                    <p className='header__link-text'>Корзина</p>
                    <p className="header__link-counter" data-cart-counter></p>
                </a>


                <a className='header__profile' href="#">
                    <img src="src/IMAGES/avatar.png" alt="Что-то"/>
                    <span className="header__profile-name">Алексей</span>
                    <img src='src/IMAGES/chevron-down.png' alt="Что-то"/>
                </a>
            </div>
        );
    }
}

export default HeaderNav;