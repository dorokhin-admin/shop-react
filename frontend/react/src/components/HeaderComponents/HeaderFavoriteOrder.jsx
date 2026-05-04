import React from 'react';
import HeaderProductButtonInCart from "./HeaderProductButtonInCart.jsx";
import {useShopStore} from "../../store/useShopStore.js";

const HeaderFavoriteOrder = () => {

    const favorites = useShopStore(state => state.favorites);
    const addToFavorite = useShopStore(state => state.addToFavorite);
    const removeFromFavorite = useShopStore(state => state.removeFromFavorite);

    return (
        <div className="products-favorite__list">
            {favorites.map(product => {
                const discontPrice = product.price - (product.price * product.promo) / 100;

                return (
                    <article
                    className="product-favorite__card"
                    key={product.id}>
                        <div className="product-card__image">
                            <img className="product-header--card__img"
                                 src={product.imgSrc}
                                 alt="product"
                            />
                            <p className="product__card-promo">
                                -{product.promo}%
                            </p>
                        </div>
                        <button className="product-card__favorite"
                                onClick={() => {
                                    if (favorites.some(favorite => favorite.id === product.id)) {
                                        removeFromFavorite(product.id)
                                    }else {
                                        addToFavorite(product)
                                    }
                                }}>
                            <img src="/IMAGES/Button.png" alt="favorite"/>
                        </button>
                        <div className="product__card-price">
                            <div className="">
                                <p className="product-header__card-price-discont">{discontPrice} {product.currency}</p>
                                <p className="product__card-price-discont-text">{product.priceDiscontText}</p>
                            </div>
                            <div className="">
                                <p className="product-header__card-price-regular">{product.price} {product.currency}</p>
                                <p className="product__card-price-regular-text">{product.priceText}</p>
                            </div>
                        </div>
                        <p className="product-header__card-discription">{product.title}</p>
                        <p className="product-header__card-discription">{product.country}</p>
                        <div className="product__card-rating">
                            <button className="product__star" ><img src="/IMAGES/star.png" alt="star"/></button>
                            <button className="product__star" ><img src="/IMAGES/star.png" alt="star"/></button>
                            <button className="product__star" ><img src="/IMAGES/star.png" alt="star"/></button>
                            <button className="product__star" ><img src="/IMAGES/star.png" alt="star"/></button>
                            <button className="product__star" ><img src="/IMAGES/star.png" alt="star"/></button>
                        </div>
                        <HeaderProductButtonInCart
                            product={product}
                        />
                    </article>
                )
            })}
        </div>
    );
};

export default HeaderFavoriteOrder;