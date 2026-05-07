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
                    <img src="/IMAGES/avatar.png"  alt="avatar"/>
                    <span className="header__profile-name">Алексей</span>
                    <img src="/IMAGES/chevron-down.png" alt="down"/>
                </button>
        </div>
    );
}

export default HeaderNav;