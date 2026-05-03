import React, {useEffect, useState} from "react";
import {useShopStore} from "./store/useShopStore.js";


import CartPage from "./pages/CartPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import OneProductPage from "./pages/OneProductPage.jsx";
import { Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import CatalogPage from "./pages/CatalogPage.jsx";
import DeliveryPage from "./pages/DeliveryPage.jsx";
import ManagerPage from "./pages/ManagerPage.jsx";

const App = () =>  {
    const items = useShopStore(state => state.items);

    useEffect(() => {
      const store = useShopStore.getState();

        if (!store.items.length) {
            store.fetchItems();
        }
        store.fetchOrders();
        store.fetchCart();
    }, [])
        return (
            <>
             <Routes>
                <Route
                    path='/'
                    element={<MainPage
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
                    path='/manager'
                    element={<ManagerPage
                    />}
                />
                <Route
                    path='*'
                    element={ <div>404 Page not found</div>}/>
            </Routes>
            </>
        )
}

export default App
