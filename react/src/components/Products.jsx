import React, {Component} from 'react';
import ProductButtonInCart from "./ProductButtonInCart.jsx";

const Products = ({items, addToCart}) => {
    return (
        <div className="products__list">
            {items.map(product => {
                const discontPrice = product.price - (product.price * product.promo) / 100;

                return (
                    <article
                        className="product__card"
                        key={product.id}>
                        <div className="product-card__image">
                            <img className="product-card__img"
                                 src={product.imgSrc}
                                 alt="product"
                            />
                            <p className="product__card-promo"
                               data-promo={product.promo}>
                                -{product.promo}%
                            </p>
                        </div>
                        <button className="product-card__favorite">
                            <img src="src/IMAGES/Button.png" alt="favorite"/>
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

                        <p className="product__card-discription">{product.title}</p>
                        <p className="product__card-discription">{product.country}</p>
                        <div className="product__card-rating">
                            <button className="product__star" ><img src="src/IMAGES/star.png" alt="star"/></button>
                            <button className="product__star" ><img src="src/IMAGES/star.png" alt="star"/></button>
                            <button className="product__star" ><img src="src/IMAGES/star.png" alt="star"/></button>
                            <button className="product__star" ><img src="src/IMAGES/star.png" alt="star"/></button>
                            <button className="product__star" ><img src="src/IMAGES/star.png" alt="star"/></button>
                        </div>
                        <ProductButtonInCart
                            addToCart={addToCart}
                            items={items}
                        />
                        <button className="product-card__added-to-cart">
                            В корзине
                        </button>
                    </article>
                )
            })}
        </div>
    )
}

export default Products;