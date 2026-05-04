import React from 'react';
import Product from "../ProductsComponents/Product.jsx";

const OneProductProductsSale = ({items}) => {
    return (
        <>
            <h2 className='section-title'>Акции</h2>

            <div className="products__list">
                {items.map(product => (
                    <Product
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </>
    );
};

export default OneProductProductsSale;