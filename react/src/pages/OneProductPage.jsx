import Header from "../components/HeaderComponents/Header.jsx";
import HeaderNav from "../components/HeaderComponents/HeaderNav.jsx";
import Footer from "../components/Footer.jsx";
import OneProductBreadcrumbs from "../components/OneProductComponents/OneProductBreadcrumbs.jsx";
import OneProductProductMeta from "../components/OneProductComponents/OneProductProduct__meta.jsx";
import OneProductProductContent from "../components/OneProductComponents/OneProductProductContent.jsx";
import OneProductProducts from "../components/OneProductComponents/OneProductProducts.jsx";
import OneProductsFeedbacks from "../components/OneProductComponents/OneProductsFeedbacks.jsx";
import OneProductProductsSale from "../components/OneProductComponents/OneProductProductsSale.jsx";

const oneProductPage = ({items}) => {
    return (
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
                <section className="page page--product">
                    <OneProductBreadcrumbs/>

                    <section className="product">
                       <OneProductProductMeta/>
                        <OneProductProductContent
                            items={items}
                        />
                    </section>

                    <section className="products">
                        <OneProductProducts
                        items={items}
                        />
                    </section>

                    <section className="feedbacks">
                        <OneProductsFeedbacks/>
                    </section>


                    <section className="products products--sale">
                        <OneProductProductsSale
                            items={items}
                        />
                    </section>
                </section >
            </div>
            <Footer/>
        </>
    )
}

export default oneProductPage;