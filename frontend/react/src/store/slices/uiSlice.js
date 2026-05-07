export const uiSlice = (set) => ({
    searchQuery: "",

    setSearchQuery: (value) =>
        set({ searchQuery: value }),
});