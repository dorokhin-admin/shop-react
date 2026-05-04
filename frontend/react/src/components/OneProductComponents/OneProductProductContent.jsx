import React from 'react';
import { useParams } from "react-router-dom";
import {useShopStore} from "../../store/useShopStore.js";
import OneProductButtonInCart from "../UI/OneProductButtonInCart.jsx";

const OneProductProductContent = ({items}) => {
    const { id } = useParams();
    const orders = useShopStore(state => state.orders);
    const addToCart = useShopStore(state => state.addToCart);
    const removeFromCart = useShopStore(state => state.removeFromCart);
    const favorites = useShopStore(state => state.favorites);


    const product = items.find(item => item.id === id);

    if (!product) {
        return <div>Товар не найден</div>;
    }

    const discontPrice = product.price - (product.price * product.promo) / 100;
    const isActive = orders.some(order => order.productId  === product.id)
    const order = orders.find(order => order.productId  === product.id)
    const discontSumPrice = product.price * product.quantity * (1 - product.promo / 100);
    const bonus = discontSumPrice * 0.1;




    return (
        <div className="product__content">
            <div className="product__thumbnails">
                <div className="product__content__image">
                <img src={product.imgSrc} alt="product-photo"
                     className="product__thumbnail"/></div><
                div className="product__content__image">
                <img src={product.imgSrc} alt="product-photo"
                     className="product__thumbnail"/></div>
                <div className="product__content__image">
                <img src={product.imgSrc} alt="product-photo"
                     className="product__thumbnail"/></div>
                <div className="product__content__image">
                <img src={product.imgSrc} alt="product-photo"
                     className="product__thumbnail"/></div>
                <div className="product__content__image">
                <img src={product.imgSrc} alt="product-photo"
                     className="product__thumbnail"/></div>
            </div>
            <div className="product__image">
            <img src={product.imgSrc} alt="" />
            </div>

            <div className="product__purchase">
                <div className="product__price">
                    <div className="product__price-usual">
                        <span className="product__price-info">{product.price}</span>
                        <span className="usually-text">{product.priceText}</span>
                    </div>
                    <div className="product__price-discount">
                        <div className="discount-text-info">
                            <span className="discount-price">{discontPrice} {product.currency}</span>
                        </div>
                        <div className="discount-text-info">
                            <span className="discount-text">С картой Северяночки</span>
                            <button><img src="/IMAGES/info.png" alt="info" className="info"/></button>
                        </div>
                    </div>
                </div>

                <OneProductButtonInCart
                    isActive={isActive}
                    removeFromCart={removeFromCart}
                    addToCart={addToCart}
                    product={product}
                    order={order}
                />

                <div className="product__bonus">
                    <img src="/IMAGES/smile.png" alt="smile"/>
                    <span className="product__bonus-text">Вы получаете <span
                        className="product__bonus-text--bold">{bonus.toFixed(0)} бонусов</span></span>
                </div>
                <div className="product__notify">
                    <img src="/IMAGES/bell-off.png" alt="Notify"/>
                    <span className="product__notify-text">Уведомить о снижении цены</span>
                </div>

                <div className="product__info-row">
                    <div className="product__info-row-highlight">
                        <span className="product__info-label">Бренд</span>
                        <span className="product__info-value">ПРОСТОКВАШИНО</span>
                    </div>

                    <div className="product__info-row-nohiglights">
                        <span className="product__info-label">Страна производителя</span>
                        <span className="product__info-value">{product.country}</span>
                    </div>

                    <div className="product__info-row-highlight">
                        <span className="product__info-label">Упаковка</span>
                        <span className="product__info-value">180 г</span>
                    </div>
                </div>
            </div>
            <div className="similar-products">
                <span className="product__similar-title">Похожие</span>
                <img src="/IMAGES/Item%20(20).png" alt=""/>
                <img src="/IMAGES/Item%20(21).png" alt=""/>
                <img src="/IMAGES/Item%20(22).png" alt=""/>
                <img src="/IMAGES/Item%20(23).png" alt=""/>
            </div>
        </div>
    );
};

export default OneProductProductContent;