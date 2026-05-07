import HeaderFieldSearch from "./HeaderFieldSearch.jsx";
import HeaderButtonCatalog from "./HeaderButtonCatalog.jsx";
import {Link} from "react-router-dom";

const Header = () => {

        return (
                <>
                        <button>
                            <Link className='header__logo-button' to="/">
                                <img className='header__logo-icon' src="/IMAGES/Group.png" alt="header__logo-iconо"/>
                                <h1 className="header__logo-text">СЕВЕРЯНОЧКА</h1>
                            </Link>
                        </button>
                        <div className='header__controls'>
                            <HeaderButtonCatalog/>
                            <HeaderFieldSearch/>
                        </div>
                </>

        );
}

export default Header;

