import React from 'react';
import {useShopStore} from "../../store/useShopStore.js";

const HeaderCart = () => {

    const ordersQuantity = useShopStore(state => state.getTotalQuantity());
    const selectAll = useShopStore(state => state.selectAll);
    const deleteItems  = useShopStore(state => state.deleteItems );

    return (
        <>
            <div className="cart-header__header">
                <div className="cart-head__cart">
                    <h1 className="cart-title-header">Корзина</h1>
                    <div className="cart-head__cart-wrapper">{ordersQuantity}</div>
                </div>
            </div>
            <div className="cart-actions__header">
                <button className="cart__select"><img src="/IMAGES/Checkbox%20(1).png" alt=""
                                                      className="cart__select"/></button>
                <button className="cart-select-all" onClick={selectAll}>Выделить всё</button>
                <button className="cart-delete-all" onClick={deleteItems}>Удалить выбранные</button>
            </div>
        </>
    );
}
export default HeaderCart;