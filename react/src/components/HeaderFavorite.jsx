import React from 'react';
import HeaderFavoriteOrder from "./HeaderFavoriteOrder.jsx";

const HeaderFavorite = ({   orders = [],
                            favorites =[],
                            totalFavorites,
                            addToCart,
                            addToFavorite,
                            removeFromCart,
                            removeFromFavorite,
                        }) => {
    let [isOpen, setOpen] = React.useState(false);
    const favoritesLength = favorites.length

    return (

    <div className='header__link header__link--favorite'
        onClick={() => setOpen(prev => !prev)}>
        <img className='heart' src='src/IMAGES/heart.png' alt="header__link--favorite"/>
        <span className='header__link-text'>Избранное</span>
        <p className="header__link-counter">{totalFavorites}</p>
        { isOpen && (
            <div className={`cart__Drawer ${isOpen && 'active'}`}
                onClick={(e) => e.stopPropagation()}
            >
                {favoritesLength ? (
                    <>
                        <div className="cart-head__header">
                            <a className="cart-head-header__main">Главная</a>
                            <img src="src/IMAGES/chevron-right.png" alt="chevron" className="arrow"/>
                            <p className="cart-head-header__cart--text">Избранное</p>
                        </div>

                        <div className="cart-header__header">
                            <div className="cart-head__cart">
                                <h1 className="cart-title-header">Избранное</h1>
                                <div className="cart-head__cart-wrapper">{totalFavorites}</div>
                            </div>
                        </div>

                        <div><button
                            className="cart-header-favorite__filter"
                        >
                        Фильтр
                        </button></div>

                            <HeaderFavoriteOrder
                                orders={orders}
                                favorites={favorites}
                                addToCart={addToCart}
                                addToFavorite={addToFavorite}
                                removeFromCart={removeFromCart}
                                removeFromFavorite={removeFromFavorite}
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

export default HeaderFavorite;