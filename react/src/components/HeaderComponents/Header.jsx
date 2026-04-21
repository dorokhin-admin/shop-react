import HeaderFieldSearch from "./HeaderFieldSearch.jsx";
import HeaderButtonCatalog from "./HeaderButtonCatalog.jsx";

const Header = () => {

        return (
                <>
                        <img className='header__logo-icon' src="src/IMAGES/Group.png" alt="header__logo-iconо"/>
                        <h1 className="header__logo-text">СЕВЕРЯНОЧКА</h1>
                        <div className='header__controls'>
                            <HeaderButtonCatalog/>
                            <HeaderFieldSearch/>
                        </div>
                </>

        );
}

export default Header;

