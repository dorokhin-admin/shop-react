import React, {Component} from 'react';

const CartItem = ({items = [], addToCart}) => {
        return (
            <>
                {items.map(product => {
                    const discontSumPrice = product.price * product.quantity * (1 - product.promo / 100);
                    const sumPrice = product.price * product.quantity;
                    return (
                        <div key={product.id} className="cart-item" data-id={product.id}>
                            <div className="cart-item__image">
                                <button className="cart-item__checkbox-select active"><img
                                    src="/IMAGES/Checkbox%20(2).png"
                                    alt="Checkbox"/></button>
                                <button className="cart-item__checkbox-empty hidden"><img
                                    src="/IMAGES/Checkbox%20(3).png"
                                    alt="Checkbox"/></button>
                                <img src={product.imgSrc} alt="cart-image" className="cart-image__img"/>
                            </div>
                            <div className="cart-item__info">
                                <h3 className="cart-item__title">Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»</h3>
                                <div className="cart-item__prices">
                                    <div className="cart-item__price--card">
                                        <div className="cart-item__price-value">
                                            <p className="cart-item__amount">44,50 </p>
                                            <p className="cart__price-currency">{product.currency}</p>
                                        </div>
                                        <p className="cart-item__price-label">С картой</p>
                                    </div>
                                    <div className="cartcart__usual-card">
                                        <div className="cart-price__usual-card">
                                            <p className="cart-item__amount--regular">50,50 </p>
                                            <p className="cart__price-currency--regular">{product.currency}</p>
                                            <p className="cart-item__unit">за шт.</p>
                                        </div>
                                        <p className="cart-item__price-label">Обычная</p>
                                    </div>
                                    <p className="cart-item__promo">-10%</p>
                                </div>
                            </div>
                            <div className="cart__quantity-wrapper">
                                <div className="cart__quantity">
                                    <button className="cart__quantity-btn--minus"><img src="/IMAGES/minus.png"
                                                                                       alt="minus"/>
                                    </button>
                                    <p className="cart__quantity-number">{product.quantity}</p>
                                    <button
                                        className="cart__quantity-btn--plus"
                                        onClick={() => addToCart(product)}
                                    >
                                        <img src="/IMAGES/plus.png" alt="plus"/>
                                    </button>
                                </div>
                                <div className="cart__sum-price">
                                    <p className="cart__sum-price-number">{discontSumPrice} {product.currency}</p>
                                    <s className="cart__sum-price-under-number">{sumPrice} {product.currency}</s>
                                </div>
                            </div>
                        </div>
                    )
                })}
             </>
        )
     }




export default CartItem;