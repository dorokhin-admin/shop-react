import {useShopStore} from "../../store/useShopStore.js";
import Product from "./Product.jsx";
import {useParams} from "react-router-dom";
import {useEffect} from "react";

const Products = () => {
    const searchQuery = useShopStore(state => state.searchQuery);
    const items = useShopStore(state => state.items);
    const fetchItems = useShopStore(state => state.fetchItems); //  запрос

    const {categoryId} = useParams();

    useEffect(() => {
        fetchItems(); //  загрузка с API
    }, []);

    const clearSearchQuery = searchQuery.trim().toLowerCase();

    const filterItems = items
        .filter(item => item.category === categoryId)
        .filter(item =>
            clearSearchQuery.length > 0
            ? item.title.toLowerCase().includes(clearSearchQuery)
            : true);

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