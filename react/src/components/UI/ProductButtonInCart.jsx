import React from 'react';

const ProductButtonInCart = ({isActive, removeFromCart, addToCart, product , order}) => {

        return (
            <button
            className={`product-card__add-to-cart ${isActive ? 'active' : ''}`}
            onClick={() =>{
                if(isActive) {
                removeFromCart(order.id);
            }else{
                addToCart(product)
                }
            }}
               >
                {isActive ? 'В корзине' : 'В корзину'}
            </button>
        );
}

export default ProductButtonInCart;