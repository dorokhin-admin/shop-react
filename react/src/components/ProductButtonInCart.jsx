import React from 'react';

const ProductButtonInCart = ({isActive, removeFromCart, addToCart, product }) => {

        return (
            <button
            className={`product-card__add-to-cart ${isActive ? 'active' : ''}`}
            onClick={() =>{
                if(isActive) {
                removeFromCart(product.id);
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