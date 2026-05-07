import React from 'react';
import CartItem from "./CartItem.jsx";

const CartListItems = (props) => {
    const {
        items = [],
        addToCart
    } = props;

    const hasItem = true;

    if(!hasItem){
        return <div className="empty-message"></div>
    }

    return (
        <div className="cart_items">
            {items.map((item) => (
                <CartItem
                    key={item.id}
                    items={items}
                    addToCart={addToCart}
                />
            ))}
        </div>
    );
};

export default CartListItems;