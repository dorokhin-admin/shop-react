import React from 'react';

const OneProductProductMeta = () => {
    return (
    <>
    <span className="product__title">Масло ПРОСТОКВАШИНО сливочное в/с 82% фольга без змж, Россия, 180 г</span>
        <div className="product__meta">
                <span className="product__sku">арт. 371431</span>
                <div className="product__rating">
                    <img className="product__star" src="src/IMAGES/star.png" alt="star"/>
                    <img className="product__star" src="src/IMAGES/star.png" alt="star"/>
                    <img className="product__star" src="src/IMAGES/star.png" alt="star"/>
                    <img className="product__star" src="src/IMAGES/star.png" alt="star"/>
                    <img className="product__star" src="src/IMAGES/star.png" alt="star"/>
                    <span className="feedback-wrapper">3 отзыва</span>
                </div>

                <div className="product__share">
                    <img src="src/IMAGES/share-2.png" alt="share"
                         className="product__share-icon"/>
                    <a className="product__share-text">Поделиться</a>
                </div>

                <div className="product__favorite">
                    <img src="src/IMAGES/heart.png" alt="heart"
                         className="product__favorite-icon"/>
                    <a className="product__favorite-text">В избраное</a>
                </div>
        </div>
    </>
    );
};

export default OneProductProductMeta;