export const favoritesSlice = (set, get) => ({
    favorites: [],

    addToFavorite: (item) =>
        set((state) => {
            const exists = state.favorites.some(f => f.id === item.id);
            if (exists) return state;

            return {
                favorites: [...state.favorites, item]
            };
        }),

    removeFromFavorite: (id) =>
        set((state) => ({
            favorites: state.favorites.filter(f => f.id !== id)
        })),
});