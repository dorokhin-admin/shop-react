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
            const res = await fetch("http://localhost:3001/items");
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
        const data = await getOrders();

        set({
            orders: (data || []).map(o => ({
                id: o.id,
                time: o.time ?? "",
                date: o.date ?? "",
                status: o.status ?? "new",
                items: Array.isArray(o.items) ? o.items : []
            }))
        });
    },

    getTotalQuantity: () =>
        get().cart.reduce((acc, item) => acc + item.quantity, 0),

    updateOrderStatus: (id, status) => {
        set(state => ({
            orders: state.orders.map(order =>
                order.id === id
                    ? { ...order, status }
                    : order
            )
        }));
    },
}));

