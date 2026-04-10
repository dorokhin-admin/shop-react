import React, {PureComponent } from 'react';
import HeaderFieldSearch from "./HeaderFieldSearch.jsx";
import HeaderButtonCatalog from "./HeaderButtonCatalog.jsx";
import HeaderNav from "./HeaderNav.jsx";

class Header extends PureComponent  {

    render() {

        const {
            searchQuery,
            setSearchQuery,
            newOrderInputRef,
        } = this.props;//в классе так
        return (
                <>
                        <img className='header__logo-icon' src="src/IMAGES/Group.png" alt="header__logo-iconо"/>
                        <h1 className="header__logo-text">СЕВЕРЯНОЧКА</h1>
                        <div className='header__controls'>
                            <HeaderButtonCatalog/>
                            <HeaderFieldSearch
                                searchQuery={searchQuery}
                                setSearchQuery={setSearchQuery}
                                newOrderInputRef={newOrderInputRef}
                            />
                        </div>
                </>

        );
    }
}

export default Header;

