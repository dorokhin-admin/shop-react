import React, {Component} from 'react';

class HeaderFieldSearch extends Component {
    render() {
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
                />
                <button>
                    <img src="src/IMAGES/search.png"
                         alt="header__search-input"
                    /></button>
            </div>
        );
    }
}

export default HeaderFieldSearch;