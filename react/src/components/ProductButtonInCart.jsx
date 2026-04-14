import React from 'react';
import products from "./Products.jsx";

const ProductButtonInCart = ({isActive, removeFromCart, addToCart, product , setOrders}) => {

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