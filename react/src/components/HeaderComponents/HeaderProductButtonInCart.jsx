import React from 'react';
import {useShopStore} from "../../store/useShopStore.js";

const HeaderProductButtonInCart = ({product}) => {

    const orders = useShopStore(state => state.orders);
    const addToCart = useShopStore(state => state.addToCart);
    const removeFromCart = useShopStore(state => state.removeFromCart)
    const isActive = orders.some(order => order.id === product.id)

        return (
            <button
            className={`product-header-card__add ${isActive ? 'active' : ''}`}
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

export default HeaderProductButtonInCart;