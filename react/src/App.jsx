import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Products from "./components/Products.jsx";
import Cart from "./components/Cart.jsx";
import HeaderNav from "./components/HeaderNav.jsx";
import HeaderHero from "./components/HeaderHero.jsx";
import React, {useEffect, useState} from "react";

const App = () =>  {

    const [items, setItems] = useState( []);

    useEffect(() => {
        fetch("http://localhost:3001/items")
            .then(res => res.json())
            .then(data => {
                setItems(data);
        })
    }, [])

    return (
        <div>
            <header>
                <div className="container">
                    <div className='header__inner'>
                        <Header/>
                        <HeaderNav/>
                    </div>
                    <HeaderHero/>
                </div>
            </header>

            <div className="container">
                <Products
                   items={items}
                />
                <Cart
                />
            </div>
            <Footer/>
        </div>
    )
}

export default App
