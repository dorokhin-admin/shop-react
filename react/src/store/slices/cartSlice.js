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
        
        const state = get();

        const cartItem = state.cart.find(cartItem => cartItem.id === cartItemId);
        if (!cartItem) return;

        const newQuantity = cartItem.quantity + 1;
        await cartAPI.plus(cartItemId, newQuantity);
        
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
        
        if (newQuantity <= 0) {
            await cartAPI.removeFromCart(cartItemId);

            set((state) => ({
                cart: state.cart.filter(cartItem => cartItem.id !== cartItemId)
            }))
            return
        }
        
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