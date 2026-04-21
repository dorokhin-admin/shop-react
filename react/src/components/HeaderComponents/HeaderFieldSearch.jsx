import {useShopStore} from "../../store/useShopStore.js";

const HeaderFieldSearch  = () => {

    const searchQuery = useShopStore(state=>state.searchQuery);
    const setSearchQuery = useShopStore(state=>state.setSearchQuery);

    return (
            <div className='header__search'>
                <label
                    className='header__search-label'
                    htmlFor='search-input'
                >
                </label>
                <input
                    className='header__search-input'
                    id='search-input'
                    type="text"
                    placeholder="Найти товар"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button>
                    <img src="src/IMAGES/search.png"
                         alt="header__search-input"
                    /></button>
            </div>
        );
    }

export default HeaderFieldSearch;