import React, {useEffect, useState} from "react";
import {useShopStore} from "./store/useShopStore.js";

import CartPage from "./pages/CartPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import OneProductPage from "./pages/OneProductPage.jsx";
import { Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import CatalogPage from "./pages/CatalogPage.jsx";
import DeliveryPage from "./pages/DeliveryPage.jsx";

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
            //Route - что показать по этому адресу
        return (
            <Routes>
                <Route
                    path='/'
                    element={<MainPage
                    items={items}
                    />}
                />
                <Route
                    path='/catalog'
                    element={<CatalogPage
                    />}
                />
                <Route
                    path='/cart'
                    element={<CartPage/>}/>
                <Route
                    path='/product/:id'
                    element={<OneProductPage
                    items={items}
                    />}
                />
                <Route
                    path='/delivery'
                    element={<DeliveryPage
                        items={items}
                    />}
                />
                <Route
                    path='/catalog/:categoryId'
                    element={<ProductsPage
                        items={items}
                    />}
                />
                <Route
                    path='*'
                    element={ <div>404 Page not found</div>}/>
            </Routes>

        )
}

export default App
