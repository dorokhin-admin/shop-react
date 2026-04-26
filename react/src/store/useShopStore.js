import {create} from "zustand";
import cartSlice from "./slices/cartSlice.js";
import { uiSlice } from "./slices/uiSlice.js";
import {favoritesSlice} from "./slices/favoritesSlice.js";
import ordersSlices from "./slices/ordersSlices.js";

export const useShopStore = create((set, get) => ({
    favorites: [],
    searchQuery: '',
    ...cartSlice(set, get),
    ...ordersSlices(set, get),
    ...favoritesSlice(set, get),
    ...uiSlice(set, get),

    getTotalQuantity: () =>
        get().cart.reduce((acc, item) => acc + item.quantity, 0),
}));

