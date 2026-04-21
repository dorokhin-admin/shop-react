import {useShopStore} from "../../store/useShopStore.js";
import Product from "./Product.jsx";

const Products = ({items,}) => {
    const searchQuery = useShopStore(state => state.searchQuery);

    const clearSearchQuery = searchQuery.trim().toLowerCase();
    const filterItems = clearSearchQuery.length > 0
        ? items.filter((item) => item.title.toLowerCase().includes(clearSearchQuery))
        : items;

    if(filterItems.length === 0) {
        return <div className='product__empty-message'>Таких продуктов нет :(</div>;
    }

    return (
        <div className="products__list">
            {filterItems.map(product => (
                <Product
                key={product.id}
                product={product}/>
            ))}
        </div>
    )
}

export default Products;