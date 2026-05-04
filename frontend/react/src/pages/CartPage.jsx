import Cart from "../components/CartComponents/Cart.jsx";
import Header from "../components/HeaderComponents/Header.jsx";
import HeaderNav from "../components/HeaderComponents/HeaderNav.jsx";
import HeaderHero from "../components/HeaderComponents/HeaderHero.jsx";
import Products from "../components/ProductsComponents/Products.jsx";
import Footer from "../components/Footer.jsx";

const CartPage = () => {
    return(
        <>
            <header>
                <div className="container">
                    <div className='header__inner'>
                        <Header/>
                        <HeaderNav/>
                    </div>
                </div>
            </header>
            <div className="container">
                <Cart/>
            </div>
            <Footer/>
        </>
    )
}
export default CartPage