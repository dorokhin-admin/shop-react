import React, {Component} from 'react';

class HeaderProductButtonInCart extends Component {
    render() {

        const {
            addToCart,
            item,
            isActive,
            removeFromCart,
        } = this.props;

        return (
            <button
            className={`product-header-card__add ${isActive ? 'active' : ''}`}
            onClick={() =>{
                if(isActive) {
                removeFromCart(item.id);
            }else{
                addToCart(item)
                }
            }}
               >
                {isActive ? 'В корзине' : 'В корзину'}
            </button>
        );
    }
}

export default HeaderProductButtonInCart;