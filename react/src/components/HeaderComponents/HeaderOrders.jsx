import React from 'react';

const HeaderOrders = () => {
    let [isOpen, setOpen] = React.useState(false);

    return (
        <div className={`header__link header__link--orders ${isOpen && 'active'}`}
             onClick={() => setOpen(prevState => !prevState)}>
            <img className='orderImg' src='/IMAGES/Frame%20211%20(3).png'
                 alt="header__link--orders"/>
            <span className='header__link-text'>Заказы</span>
            {isOpen && (
                <div className="cart__Drawer">
                    <div className="cart-empty">
                        <h2>Товаров нет</h2>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HeaderOrders;