import React, {Component} from 'react';

class ProductButtonInCart extends Component {
    render() {

        const {
            addToCart,
            items
        } = this.props;

        return (
            <>
            {items.map(item => (
                        <button
                            key={item.id}
                            className="product-card__add-to-cart"
                             onClick={() => console.log(item.id)}>
                        В корзину
                    </button>
            ))}
            </>
        );
    }
}

export default ProductButtonInCart;