import React, {useState} from 'react';

const HeaderFieldSearch  = ({searchQuery,
                            setSearchQuery,
                            newOrderInputRef,
                            ref}) => {

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
                    ref={newOrderInputRef}
                />
                <button>
                    <img src="src/IMAGES/search.png"
                         alt="header__search-input"
                    /></button>
            </div>
        );
    }

export default HeaderFieldSearch;