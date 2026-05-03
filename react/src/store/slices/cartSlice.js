import cartAPI from "../../api/cartAPI.jsx";

const cartSlice = (set, get) => ({
    cart: [],

    addToCart: async (item) => {
        const state = get();

        const exists = state.cart.find(i => i.productId === item.id);

        if (exists) {
            const newQuantity = exists.quantity + 1;

            await cartAPI.plus(exists.id, newQuantity);

            set((state) => ({
                cart: state.cart.map(i =>
                    i.id === exists.id
                        ? { ...i, quantity: newQuantity }
                        : i
                )
            }));

            return;
        }

        const newItem = await cartAPI.addToCart(item);

        set((state) => ({
            cart: [...state.cart, newItem]
        }));
    },

    //     //item.id - в каталоге
//     //productId - в корзине
//     //order.id - на сервере

    removeFromCart: async (cartItemId) => {
        const state = get();
        const cartItem = state.cart.find(cartItem => cartItem.id === cartItemId);
        if (!cartItem) return;

        await cartAPI.removeFromCart(cartItemId)

        set((state) => ({
            cart: state.cart.filter(cartItem => cartItem.id !== cartItemId)
        }));
    },

    plus: async (cartItemId) => {
        // 1. изменить сервер
        const state = get();//чтобы прочитать актуальное сост стора ниже в нашем случае orders, без него при плюса не будет меня в реальном времени

        const cartItem = state.cart.find(cartItem => cartItem.id === cartItemId);
        if (!cartItem) return;

        const newQuantity = cartItem.quantity + 1;

        await cartAPI.plus(cartItemId, newQuantity);
        // 2. изменить Zustand (локалку) для перерисовки UI
        set((state) =>(
            { cart: state.cart
                    .map(cartItem => cartItem.id === cartItemId
                        ? {...cartItem, quantity: newQuantity}
                        : cartItem
                    )
            }
        ))
    },

    minus: async (cartItemId) => {
        const state = get();

        const cartItem = state.cart.find(cartItem => cartItem.id === cartItemId);
        if (!cartItem) return;

        const newQuantity = cartItem.quantity - 1;
        // 1. если стало 0 — удалить
        if (newQuantity <= 0) {
            await cartAPI.removeFromCart(cartItemId);

            set((state) => ({
                cart: state.cart.filter(cartItem => cartItem.id !== cartItemId)
            }))
            return
        }
        // 2. если больше 0 — обновить на сервере
        await cartAPI.minus(cartItemId, newQuantity);

        set((state) => ({
            cart: state.cart.map(cartItem =>
                cartItem.id === cartItemId
                    ? { ...cartItem, quantity: newQuantity}
                    : cartItem
            )
        }))
    },

    deleteItems: async () => {
        const isConfirmed = confirm('Are you sure you want to delete?');
        if (!isConfirmed) return;

        const state = get();
        const selectedOrders = state.cart.filter(o => o.selected);

        await cartAPI.deleteItems(selectedOrders); // 🔥 ЖДЕМ

        set({
            cart: state.cart.filter(o => !o.selected)
        });
    },

    toggleSelect: (id) => {
        set((state) => ({
            cart: state.cart.map(order =>
                order.id === id
                    ? { ...order, selected: !order.selected }
                    : order
            )
        }));
    },

    selectAll: () => {
        set((state) => ({
            cart: state.cart.map(order => ({
                ...order,
                selected: true
            }))
        }));
    },
});
export default cartSlice