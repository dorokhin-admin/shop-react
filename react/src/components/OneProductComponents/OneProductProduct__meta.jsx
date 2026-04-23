import React from 'react';
import {useShopStore} from "../../store/useShopStore.js";
import {useParams} from "react-router-dom";

const OneProductProductMeta = ({items}) => {
    const {id} = useParams();

    const favorites = useShopStore(state => state.favorites);
    const addToFavorite = useShopStore(state => state.addToFavorite);
    const removeFromFavorite = useShopStore(state => state.removeFromFavorite);

    const product = items.find(item => item.id ===id);
    const isFavorite = favorites.some(favorite => favorite.id === product.id)

    return (
    <>
    <span className="product__title">Масло ПРОСТОКВАШИНО сливочное в/с 82% фольга без змж, Россия, 180 г</span>
        <div className="product__meta">
                <span className="product__sku">арт. 371431</span>
                <div className="product__rating">
                    <button className="product__star" ><img src="/IMAGES/star.png" alt="star"/></button>
                    <button className="product__star" ><img src="/IMAGES/star.png" alt="star"/></button>
                    <button className="product__star" ><img src="/IMAGES/star.png" alt="star"/></button>
                    <button className="product__star" ><img src="/IMAGES/star.png" alt="star"/></button>
                    <button className="product__star" ><img src="/IMAGES/star.png" alt="star"/></button>
                    <span className="feedback-wrapper">3 отзыва</span>
                </div>

                <div className="product__share">
                    <img src="/IMAGES/share-2.png" alt="share"
                         className="product__share-icon"/>
                    <a className="product__share-text">Поделиться</a>
                </div>

                <button className={`product__favorite ${isFavorite ? 'active' : ''}`}
                        onClick={() =>{
                            if(isFavorite){
                                removeFromFavorite(product.id);
                            }else{
                                addToFavorite(product);
                        }
                }}
                >
                    <img src="/IMAGES/heart.png" alt="heart"
                         className="product__favorite-icon"/>
                    <a className="product__favorite-text">В избраное</a>
                </button>
        </div>
    </>
    );
};

export default OneProductProductMeta;