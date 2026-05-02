import {create} from "zustand";
import cartSlice from "./slices/cartSlice.js";
import { uiSlice } from "./slices/uiSlice.js";
import {favoritesSlice} from "./slices/favoritesSlice.js";
import ordersSlices from "./slices/ordersSlices.js";
import {getItems} from "../api/api.js";

export const useShopStore = create((set, get) => ({
    items: [],
    favorites: [],
    searchQuery: '',
    ...cartSlice(set, get),
    ...ordersSlices(set, get),
    ...favoritesSlice(set, get),
    ...uiSlice(set, get),

    fetchItems: async () => {
        const data = await getItems();
        set({ items: data });
    },

    getTotalQuantity: () =>
        get().cart.reduce((acc, item) => acc + item.quantity, 0),
}));

