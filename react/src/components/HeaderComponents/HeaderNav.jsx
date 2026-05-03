import HeaderCart from "./HeaderCart.jsx";
import HeaderOrders from "./HeaderOrders.jsx";
import HeaderFavorite from "./HeaderFavorite.jsx";
import HeaderProfile from "./HeaderProfile.jsx";

const HeaderNav = () => {


    return (
        <div className='header__nav'>
            <HeaderFavorite/>

            <HeaderOrders/>

            <HeaderCart />

            <HeaderProfile />

        </div>
    );
}

export default HeaderNav;