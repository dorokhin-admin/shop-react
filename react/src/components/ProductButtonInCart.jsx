import React, {Component} from 'react';

class ProductButtonInCart extends Component {
    render() {

        const {
            addToCart,
            item
        } = this.props;

        return (
            <button
            key={item.id}
            className="product-card__add-to-cart"
            onClick={() => addToCart(item)}>
                В корзину
            </button>
        );
    }
}

export default ProductButtonInCart;