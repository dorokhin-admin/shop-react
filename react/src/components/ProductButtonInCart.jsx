import React, {Component} from 'react';

class ProductButtonInCart extends Component {
    render() {

        const {
            addToCart,
            product,
            isActive,
            removeFromCart,
        } = this.props;

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
}

export default ProductButtonInCart;