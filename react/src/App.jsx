import Header from "./components/HeaderComponents/Header.jsx";
import Footer from "./components/Footer.jsx";
import Products from "./components/ProductsComponents/Products.jsx";
import Cart from "./components/CartComponents/Cart.jsx";
import HeaderNav from "./components/HeaderComponents/HeaderNav.jsx";
import HeaderHero from "./components/HeaderComponents/HeaderHero.jsx";
import React, {useEffect, useState} from "react";
import {useShopStore} from "./store/useShopStore.js";

import Router from "./Router.jsx";
import CartPage from "./pages/CartPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import OneProductPage from "./pages/OneProductPage.jsx";


const App = () =>  {
    const [items, setItems] = useState( []);

    useEffect(() => {
        fetch("http://localhost:3001/items")
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    useEffect(() => {
        useShopStore.setState({orders: []})
        useShopStore.getState().fetchOrders();
    }, [])

    const routes = {
        '*': () => <div>404 Page not found</div>,
        '/': () =>
            <ProductsPage
            items={items}
            />,
        '/cart': () => <CartPage/>,//по адресу символ слеша будем отображать корзину и тд
        '/oneProductPage': () =>
            <OneProductPage
            items={items}
            />,
    }

    return (
        <div>
            <Router routes={routes}/>
        </div>

    )
}

export default App
