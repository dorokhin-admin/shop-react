import {create} from "zustand";
import cartSlice from "./slices/cartSlice.js";
import { uiSlice } from "./slices/uiSlice.js";
import {favoritesSlice} from "./slices/favoritesSlice.js";
import ordersSlices from "./slices/ordersSlices.js";
import {getCart, getItems, getOrders} from "../api/api.js";
import {useEffect} from "react";

export const useShopStore = create((set, get) => ({
    items: [],
    cart: [],
    orders: [],
    favorites: [],
    searchQuery: '',
    ...cartSlice(set, get),
    ...ordersSlices(set, get),
    ...favoritesSlice(set, get),
    ...uiSlice(set, get),

    fetchItems: async () => {
        try {
            const res = await fetch("https://function-bun-production-512e.up.railway.app/api/items");
            const data = await res.json();
            set({ items: data || [] });
        } catch (e) {
            console.log("fetchItems error", e);
            set({ items: [] });
        }
    },

    fetchCart: async () => {
        const data = await getCart()
        set({cart: data})
    },

    fetchOrders: async () => {
        const data = await getOrders()
        set({orders: data})
    },

    getTotalQuantity: () =>
        get().cart.reduce((acc, item) => acc + item.quantity, 0),
}));

