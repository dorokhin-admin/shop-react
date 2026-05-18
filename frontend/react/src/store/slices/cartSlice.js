const cartSlice = (set, get) => ({
    cart: [],

    addToCart: async (item) => {
        const state = get();
        const exists = state.cart.find(i => i.productId === item.id);

        if (exists) {
            const newQuantity = exists.quantity + 1;
            const nextCart = state.cart.map(i =>
                i.id === exists.id
                    ? { ...i, quantity: newQuantity }
                    : i
            );
            localStorage.setItem("cart", JSON.stringify(nextCart));
            set({ cart: nextCart });
            return;
        }

        const newItem = {
            id: item.id,
            productId: item.id,
            title: item.title,
            imgSrc: item.imgSrc,
            price: item.price,
            promo: item.promo,
            currency: item.currency,
            priceText: item.priceText,
            priceDiscontText: item.priceDiscontText,
            quantity: 1,
            selected: true,
        };

        const nextCart = [...state.cart, newItem];
        localStorage.setItem("cart", JSON.stringify(nextCart));
        set({ cart: nextCart });
    },

    removeFromCart: async (cartItemId) => {
        const state = get();
        const nextCart = state.cart.filter(cartItem => cartItem.id !== cartItemId);
        localStorage.setItem("cart", JSON.stringify(nextCart));
        set({ cart: nextCart });
    },

    plus: async (cartItemId) => {
        const state = get();
        const cartItem = state.cart.find(cartItem => cartItem.id === cartItemId);
        if (!cartItem) return;

        const newQuantity = cartItem.quantity + 1;
        const nextCart = state.cart.map(cartItem =>
            cartItem.id === cartItemId
                ? { ...cartItem, quantity: newQuantity }
                : cartItem
        );
        localStorage.setItem("cart", JSON.stringify(nextCart));
        set({ cart: nextCart });
    },

    minus: async (cartItemId) => {
        const state = get();
        const cartItem = state.cart.find(cartItem => cartItem.id === cartItemId);
        if (!cartItem) return;

        const newQuantity = cartItem.quantity - 1;
        let nextCart;

        if (newQuantity <= 0) {
            nextCart = state.cart.filter(cartItem => cartItem.id !== cartItemId);
        } else {
            nextCart = state.cart.map(cartItem =>
                cartItem.id === cartItemId
                    ? { ...cartItem, quantity: newQuantity }
                    : cartItem
            );
        }

        localStorage.setItem("cart", JSON.stringify(nextCart));
        set({ cart: nextCart });
    },

    deleteItems: async () => {
        const isConfirmed = confirm('Are you sure you want to delete?');
        if (!isConfirmed) return;

        const state = get();
        const nextCart = state.cart.filter(o => !o.selected);
        localStorage.setItem("cart", JSON.stringify(nextCart));
        set({ cart: nextCart });
    },

    toggleSelect: (id) => {
        set((state) => {
            const nextCart = state.cart.map(order =>
                order.id === id
                    ? { ...order, selected: !order.selected }
                    : order
            );
            localStorage.setItem("cart", JSON.stringify(nextCart));
            return { cart: nextCart };
        });
    },

    selectAll: () => {
        set((state) => {
            const nextCart = state.cart.map(order => ({
                ...order,
                selected: true
            }));
            localStorage.setItem("cart", JSON.stringify(nextCart));
            return { cart: nextCart };
        });
    },
});
export default cartSlice