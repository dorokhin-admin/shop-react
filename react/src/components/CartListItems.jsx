import React from 'react';
import CartItem from "./CartItem.jsx";

const CartListItems = (props) => {
    const {
        items = [],
        isDone
    } = props;

    const hasItem = true;

    if(!hasItem){
        return <div className="empty-message"></div>
    }

    return (
        <div className="cart_items">
            {items.map((item) => (
                <CartItem items={items}/>
            ))}
        </div>
    );
};

export default CartListItems;