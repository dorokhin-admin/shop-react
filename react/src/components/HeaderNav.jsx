import HeaderCart from "./HeaderCart.jsx";
import React from "react";
import cartOrder from "./CartOrder.jsx";
import HeaderOrders from "./HeaderOrders.jsx";
import HeaderFavorite from "./HeaderFavorite.jsx";

const HeaderNav = ({   items = [],
                       orders = [],
                       favorites=[],
                       totalFavorites,
                       addToCart,
                       addToFavorite,
                       plus,
                       minus,
                       selectAll,
                       deleteItems,
                       toggleSelect,
                       ordersQuantity,
                       removeFromCart,
                       removeFromFavorite,
                   }) => {


    return (
        <div className='header__nav'>
            <HeaderFavorite
                items={items}
                orders={orders}
                favorites={favorites}
                totalFavorites={totalFavorites}
                addToFavorite={addToFavorite}
                addToCart={addToCart}
                plus={plus}
                minus={minus}
                toggleSelect={toggleSelect}
                deleteItems={deleteItems}
                selectAll={selectAll}
                removeFromCart={removeFromCart}
                removeFromFavorite={removeFromFavorite}
            />

            <HeaderOrders/>

            <HeaderCart
                items={items}
                orders={orders}
                addToCart={addToCart}
                plus={plus}
                minus={minus}
                toggleSelect={toggleSelect}
                ordersQuantity={ordersQuantity}
                deleteItems={deleteItems}
                selectAll={selectAll}
            />

            <a className='header__profile' href="#">
                <img src="src/IMAGES/avatar.png" alt="avatar"/>
                <span className="header__profile-name">Алексей</span>
                <img src='src/IMAGES/chevron-down.png' alt="avatar"/>
            </a>
        </div>
    );
}

export default HeaderNav;