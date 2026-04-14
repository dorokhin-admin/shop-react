import {create} from "zustand";
import { cartSlice } from "./slices/cartSlice.js";
import { uiSlice } from "./slices/uiSlice.js";
import {favoritesSlice} from "./slices/favoritesSlice.js";
import { persist } from "zustand/middleware";

export const useShopStore = create(
    persist(
        (set, get) => ({
    orders: [],
    favorites: [],
    searchQuery: '',
    ...cartSlice(set, get),
    ...favoritesSlice (set, get),
    ...uiSlice(set, get),

    getTotalQuantity: () =>
        get().orders.reduce((acc, item) => acc + item.quantity, 0),
        }),
        {
            name: 'shop-storage',//сохраняет весь Zustand store в localStorage под ключом shop-storage
            partialize: (state) => ({//сохраняет в localStorage только нужные части store
                orders: state.orders,
                favorites: state.favorites,
            }),
        },
    )
)

