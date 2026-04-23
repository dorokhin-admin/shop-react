import {create} from "zustand";
import cartSlice from "./slices/cartSlice.js";
import { uiSlice } from "./slices/uiSlice.js";
import {favoritesSlice} from "./slices/favoritesSlice.js";

export const useShopStore = create((set, get) => ({
    orders: [],
    favorites: [],
    searchQuery: '',
    ...cartSlice(set, get),
    ...favoritesSlice(set, get),
    ...uiSlice(set, get),

    fetchOrders: async () => {
        const res = await fetch('http://localhost:3001/orders');
        const data = await res.json();
        set({ orders: data });
    },

    getTotalQuantity: () =>
        get().orders.reduce((acc, item) => acc + item.quantity, 0),
}));

