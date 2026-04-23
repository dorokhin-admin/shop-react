import React from 'react';

const OneProductBreadcrumbs = () => {
    return (
        <div className="breadcrumbs">
            <a className='breadcrumbs__link breadcrumbs__link--current' href="#">Главная</a>
            <span className="breadcrumbs__separator"><img src="/IMAGES/chevron-right.png"
                                                          alt="chevron"/></span>
            <a className="breadcrumbs__link breadcrumbs__link--current" href="#">Каталог</a>
            <span className="breadcrumbs__separator"><img src="/IMAGES/chevron-right.png"
                                                          alt="chevron"/></span>
            <a className="breadcrumbs__link breadcrumbs__link--current" href="#">Молоко, сыр, яйцо</a>
            <span className="breadcrumbs__separator"><img src="/IMAGES/chevron-right.png"
                                                          alt="chevron"/></span>
            <a className="breadcrumbs__link breadcrumbs__link--current" href="#">Масло ПРОСТОКВАШИНО
                сливочное в/с 82% фольга без змж, Россия, 180 г</a>
        </div>
    );
};

export default OneProductBreadcrumbs;