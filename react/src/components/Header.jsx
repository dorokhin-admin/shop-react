import React, {Component} from 'react';
import HeaderFieldSearch from "./HeaderFieldSearch.jsx";
import HeaderButtonCatalog from "./HeaderButtonCatalog.jsx";
import HeaderNav from "./HeaderNav.jsx";

class Header extends Component {
    render() {

        const {
            items,
            orders,
            addToCart,
            filterProduct,
            plus,
            minus,
            toggleSelect,
            ordersQuantity,
            selectAll,
            deleteItems,
        } = this.props;//в классе так

        return (
            <header>
                <div className="container">
                    <div className='header__inner'>
                        <img className='header__logo-icon' src="src/IMAGES/Group.png" alt="header__logo-iconо"/>
                        <h1 className="header__logo-text">СЕВЕРЯНОЧКА</h1>
                        <div className='header__controls'>
                            <HeaderButtonCatalog/>
                            <HeaderFieldSearch
                                filterProduct={filterProduct}
                            />
                        </div>
                            <HeaderNav
                                items={items}
                                orders={orders}
                                addToCart={addToCart}
                                plus={plus}
                                minus={minus}
                                toggleSelect={toggleSelect}
                                ordersQuantity={ordersQuantity}
                            />
                    </div>
                </div>
                <div className='hero'>
                    <img className="hero__image" src='src/IMAGES/Sliders.png' alt="Что-то"/>
                    <span className="hero__caption">Доставка бесплатно от 1000 ₽</span>
                </div>
            </header>
        );
    }
}

export default Header;

