import React from 'react';
import ProductButtonInCart from "../UI/ProductButtonInCart.jsx";
import {useShopStore} from "../../store/useShopStore.js";
import { Link } from "react-router-dom";


const Product = ({product}) => {
    const cart = useShopStore(state => state.cart);
    const addToCart = useShopStore(state => state.addToCart);
    const removeFromCart = useShopStore(state => state.removeFromCart);
    const favorites = useShopStore(state => state.favorites);
    const addToFavorite = useShopStore(state => state.addToFavorite);
    const removeFromFavorite = useShopStore(state => state.removeFromFavorite);

    const discontPrice = product.price - (product.price * product.promo) / 100;
    const isActive = cart.some(item => item.productId   === product.id)
    const isFavorite = favorites.some(favorite => favorite.id === product.id)
    const order = cart.find(item => item.productId   === product.id)
    //link - куда перейти
    return (
            <article
                className={`product__card ${isActive ? "product__card--in-cart" : ''}`}>
                <div className="product-card__image">
                    <Link  to={`/product/${product.id}`}>
                        <img className="product-card__img"
                             src={product.imgSrc}
                             alt={product.title}
                        />
                    </Link>
                     <p className="product__card-promo"
                       data-promo={product.promo}>
                        -{product.promo}%
                     </p>
                </div>

                <button className={`product-card__favorite ${isFavorite ? 'active' : ''}`}
                        onClick={() => {
                            if(isFavorite) {
                                removeFromFavorite(product.id);
                            }else {
                                addToFavorite(product);
                            }
                        }}>
                    <img src="/IMAGES/Button.png" alt="favorite"/>
                </button>

                <div className="product__card-price">
                    <div className="">
                        <p className="product__card-price-discont">{discontPrice} {product.currency}</p>
                        <p className="product__card-price-discont-text">{product.priceDiscontText}</p>
                    </div>
                    <div className="">
                        <p className="product__card-price-regular">{product.price} {product.currency}</p>
                        <p className="product__card-price-regular-text">{product.priceText}</p>
                    </div>
                </div>

                <p className="product__card-title">{product.title}<br/>{product.country}</p>
                <div className="product__card-rating">
                    <button className="product__star" ><img src="/IMAGES/star.png" alt="star"/></button>
                    <button className="product__star" ><img src="/IMAGES/star.png" alt="star"/></button>
                    <button className="product__star" ><img src="/IMAGES/star.png" alt="star"/></button>
                    <button className="product__star" ><img src="/IMAGES/star.png" alt="star"/></button>
                    <button className="product__star" ><img src="/IMAGES/star.png" alt="star"/></button>
                </div>
                <ProductButtonInCart
                    isActive={isActive}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    product={product}
                    order={order}
                />
            </article>
    );
};

export default Product;