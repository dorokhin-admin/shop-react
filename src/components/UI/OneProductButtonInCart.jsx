import React from 'react';

const ProductButtonInCart = ({isActive, removeFromCart, addToCart, product , order}) => {

        return (
            <button
                className={`product__add-to-cart ${isActive ? 'active' : ''}`}
                onClick={() =>{
                    if(isActive) {
                        removeFromCart(order.id);
                    }else{
                        addToCart(product)
                    }
                }}
            >
                <img src="/IMAGES/shopping-cart2.png" alt="cart-icon"
                     className="cart-icon"/>
                <span>{isActive ? 'В корзине' : 'В корзину'}</span>
            </button>
        );
}

export default ProductButtonInCart;