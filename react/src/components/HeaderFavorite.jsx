import HeaderFavoriteOrder from "./HeaderFavoriteOrder.jsx";
import {useShopStore} from "../store/useShopStore.js";
import React, {useState} from "react";

const HeaderFavorite = () => {
    const favorites = useShopStore(state => state.favorites);
    const addToCart = useShopStore(state => state.addToCart);

    let [isOpen, setOpen] = useState(false);

    console.log('HeaderFavorite rendered') //вот чтобы не выходило при заугрзке страницы
    //и существуют оптимизационные инструм

    return (

    <div className='header__link header__link--favorite'
        onClick={() => setOpen(prev => !prev)}>
        <img className='heart' src='src/IMAGES/heart.png' alt="header__link--favorite"/>
        <span className='header__link-text'>Избранное</span>
        <p className="header__link-counter">{favorites.length}</p>
        { isOpen && (
            <div className={`cart__Drawer ${isOpen && 'active'}`}
                onClick={(e) => e.stopPropagation()}
            >
                {favorites.length ? (
                    <>
                        <div className="cart-head__header">
                            <a className="cart-head-header__main">Главная</a>
                            <img src="src/IMAGES/chevron-right.png" alt="chevron" className="arrow"/>
                            <p className="cart-head-header__cart--text">Избранное</p>
                        </div>

                        <div className="cart-header__header">
                            <div className="cart-head__cart">
                                <h1 className="cart-title-header">Избранное</h1>
                                <div className="cart-head__cart-wrapper">{favorites.length}</div>
                            </div>
                        </div>

                        <div><button
                            className="cart-header-favorite__filter"
                        >
                        Фильтр
                        </button></div>

                            <HeaderFavoriteOrder
                                favorites={favorites}
                                addToCart={addToCart}
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