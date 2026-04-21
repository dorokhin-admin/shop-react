import HeaderCart from "./HeaderCart.jsx";
import HeaderOrders from "./HeaderOrders.jsx";
import HeaderFavorite from "./HeaderFavorite.jsx";

const HeaderNav = () => {


    return (
        <div className='header__nav'>
            <HeaderFavorite/>

            <HeaderOrders/>

            <HeaderCart />

                <button  className='header__profile'>
                    <img src="src/IMAGES/avatar.png" alt="avatar"/>
                    <span className="header__profile-name">Алексей</span>
                    <img src='src/IMAGES/chevron-down.png' alt="avatar"/>
                </button>
        </div>
    );
}

export default HeaderNav;