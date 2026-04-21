import React from 'react';
import ProductButtonInCart from "../ProductsComponents/ProductButtonInCart.jsx";
import {useShopStore} from "../../store/useShopStore.js";

const OneProductProductContent = ({items}) => {
    // const searchQuery = useShopStore(state => state.searchQuery);
    //
    // const clearSearchQuery = searchQuery.trim().toLowerCase();
    // const filterItems = clearSearchQuery.length > 0
    //     ? items.filter((item) => item.title.toLowerCase().includes(clearSearchQuery))
    //     : items;
    //
    // if(filterItems.length === 0) {
    //     return <div className='product__empty-message'>Таких продуктов нет :(</div>;
    // }
    //
    // const orders = useShopStore(state => state.orders);
    // const addToCart = useShopStore(state => state.addToCart);
    // const removeFromCart = useShopStore(state => state.removeFromCart);
    // const favorites = useShopStore(state => state.favorites);
    // const addToFavorite = useShopStore(state => state.addToFavorite);
    // const removeFromFavorite = useShopStore(state => state.removeFromFavorite);
    //
    // const discontPrice = product.price - (product.price * product.promo) / 100;
    // const isActive = orders.some(order => order.productId  === product.id)
    // const isFavorite = favorites.some(favorite => favorite.id === product.id)
    // const order = orders.find(order => order.productId  === product.id)

    return (
        <div className="product__content">
            <div className="product__thumbnails">
                <img src="src/IMAGES/Item%20(19).png" alt="product-photo"
                     className="product__thumbnail"/>
                <img src="src/IMAGES/Item%20(19).png" alt="product-photo"
                     className="product__thumbnail"/>
                <img src="src/IMAGES/Item%20(19).png" alt="product-photo"
                     className="product__thumbnail"/>
                <img src="src/IMAGES/Item%20(19).png" alt="product-photo"
                     className="product__thumbnail"/>
                <img src="src/IMAGES/Item%20(19).png" alt="product-photo"
                     className="product__thumbnail"/>
            </div>
            <img src="src/IMAGES/img.png" alt="" className="product__image"/>

            <div className="product__purchase">
                <div className="product__price">
                    <div className="product__price-usual">
                        <span className="product__price-info">192,69 ₽</span>
                        <span className="usually-text">Обычная цена</span>
                    </div>
                    <div className="product__price-discount">
                        <div className="discount-text-info">
                            <span className="discount-price">108,99</span>
                            <span className="discount-price">₽</span>
                        </div>
                        <div className="discount-text-info">
                            <span className="discount-text">С картой Северяночки</span>
                            <img src="src/IMAGES/info.png" alt="info" className="info"/>
                        </div>
                    </div>
                </div>

                <button className="product__add-to-cart">
                    <img src="src/IMAGES/shopping-cart2.png" alt="cart-icon"
                         className="cart-icon"/>
                    <span className="add-to-cart-text">В корзину</span>
                </button>
                {/*<ProductButtonInCart*/}
                {/*    isActive={isActive}*/}
                {/*    addToCart={addToCart}*/}
                {/*    removeFromCart={removeFromCart}*/}
                {/*    product={product}*/}
                {/*    order={order}*/}
                {/*/>*/}
                <div className="product__bonus">
                    <img src="src/IMAGES/smile.png" alt="smile"/>
                    <span className="product__bonus-text">Вы получаете <span
                        className="product__bonus-text--bold">10 бонусов</span></span>
                </div>
                <div className="product__notify">
                    <img src="src/IMAGES/bell-off.png" alt="Notify"/>
                    <span className="product__notify-text">Уведомить о снижении цены</span>
                </div>

                <div className="product__info-row">
                    <div className="product__info-row-highlight">
                        <span className="product__info-label">Бренд</span>
                        <span className="product__info-value">ПРОСТОКВАШИНО</span>
                    </div>

                    <div className="product__info-row-nohiglights">
                        <span className="product__info-label">Страна производителя</span>
                        <span className="product__info-value">Россия</span>
                    </div>

                    <div className="product__info-row-highlight">
                        <span className="product__info-label">Упаковка</span>
                        <span className="product__info-value">180 г</span>
                    </div>
                </div>
            </div>
            <div className="similar-products">
                <span className="product__similar-title">Похожие</span>
                <img src="src/IMAGES/Item%20(20).png" alt=""/>
                <img src="src/IMAGES/Item%20(21).png" alt=""/>
                <img src="src/IMAGES/Item%20(22).png" alt=""/>
                <img src="src/IMAGES/Item%20(23).png" alt=""/>
            </div>
        </div>
    );
};

export default OneProductProductContent;