import React from 'react';
import {Link} from "react-router-dom";

const OneProductBreadcrumbs = () => {
    return (
        <div className="breadcrumbs">
            <Link className='breadcrumbs__link breadcrumbs__link--current' to={'/'}>Главная</Link>
            <span className="breadcrumbs__separator"><img src="/IMAGES/chevron-right.png"
                                                          alt="chevron"/></span>
            <Link className="breadcrumbs__link breadcrumbs__link--current" to={'/catalog'}>Каталог</Link>
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