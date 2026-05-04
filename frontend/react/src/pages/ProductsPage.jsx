import Header from "../components/HeaderComponents/Header.jsx";
import HeaderNav from "../components/HeaderComponents/HeaderNav.jsx";
import Products from "../components/ProductsComponents/Products.jsx";
import Footer from "../components/Footer.jsx";
import HeaderHero from "../components/HeaderComponents/HeaderHero.jsx";

const ProductsPage = ({items}) => {
    return (
     <>
         <header>
            <div className="container">
                <div className='header__inner'>
                    <Header/>
                    <HeaderNav/>
                </div>
            </div>
             <HeaderHero/>
        </header>

        <div className="container">
            <Products
                items={items}/>
        </div>
        <Footer/>
     </>
    )
}

export default ProductsPage