import React from 'react';

const HeaderHero = () => {
    return (
        <div className='hero'>
            <img className="hero__image-cart" src='/IMAGES/cart.png' alt="фон"/>
            <span className="hero__caption">Доставка бесплатно от 1000 ₽</span>
        </div>
    );
};

export default HeaderHero;