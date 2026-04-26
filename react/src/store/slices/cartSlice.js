import ordersAPI from "../../api/ordersAPI.jsx";
import cartAPI from "../../api/cartAPI.jsx";

const cartSlice = (set, get) => ({
    cart: [],

    addToCart: async (item) => {
        const state = get();

        if (state.cart.some(o => o.productId  === item.id)) return;

        const res = await cartAPI.addToCart(item);

        const newOrder = await res.json();

        set((state) => ({
            cart: [...state.cart, newOrder]
        }));
    },

    //     //item.id - в каталоге
//     //productId - в корзине
//     //order.id - на сервере

    removeFromCart: async (orderId) => {
        const state = get();
        const order = state.cart.find(o => o.id === orderId);
        if (!order) return;

        await cartAPI.removeFromCart(orderId)

        set((state) => ({
            cart: state.cart.filter(o => o.id !== orderId)
        }));
    },

    plus: async (orderId) => {
        // 1. изменить сервер
        const state = get();//чтобы прочитать актуальное сост стора ниже в нашем случае orders, без него при плюса не будет меня в реальном времени

        const order = state.cart.find(o => o.id === orderId);
        if (!order) return;

        const newQuantity = order.quantity + 1;

        await cartAPI.plus(orderId, newQuantity);

        // 2. изменить Zustand для перерисовки UI
        set((state) =>(
            { cart: state.cart
                    .map(order => order.id === orderId
                        ? {...order, quantity: newQuantity}
                        : order
                    )
            }
        ))
    },

    minus: async (orderId) => {
        const state = get();

        const order = state.cart.find(o => o.id === orderId);
        if (!order) return;

        const newQuantity = order.quantity - 1;

        // 1. если стало 0 — удалить
        if (newQuantity <= 0) {
            await cartAPI.removeFromCart(orderId);

            set((state) => ({
                cart: state.cart.filter(o => o.id !== orderId)
            }))
            return
        }

        // 2. если больше 0 — обновить на сервере
        await cartAPI.minus(orderId, newQuantity);

        set((state) => ({
            cart: state.cart.map(o =>
                o.id === orderId
                    ? { ...o, quantity: newQuantity}
                    : o
            )
        }))
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

    deleteItems: () => {
        const isConfirmed = confirm('Are you sure you want to delete?');
        if (!isConfirmed) return;

        const state = get();

        const selectedOrders = state.cart.filter(o => o.selected);

        cartAPI.deleteItems(selectedOrders);

        set({
            cart: state.cart.filter(o => !o.selected)
        });
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

// import ordersAPI from "../../api/ordersAPI.jsx";
//
// const cartSlice = (set, get) => ({
//     addToCart: async (item) => {
//         const state = get();
//
//         if (state.orders.some(o => o.id === item.id)) return;
//
//         const res = await ordersAPI.addToCart(item);
//
//         const newOrder = await res.json();
//
//         set((state) => ({
//             orders: [...state.orders, newOrder]
//         }));
//     },
//
//     removeFromCart: async (orderId) => {
//         const state = get();
//         const order = state.orders.find(o => o.id === orderId);
//         if (!order) return;
//
//         await ordersAPI.removeFromCart(orderId)
//
//         set((state) => ({
//             orders: state.orders.filter(o => o.id !== orderId)
//         }));
//     },
//
//     plus: async (orderId) => {
//         // 1. изменить сервер
//         const state = get();//чтобы прочитать актуальное сост стора ниже в нашем случае orders, без него при плюса не будет меня в реальном времени
//
//         const order = state.orders.find(o => o.id === orderId);
//         if (!order) return;
//
//         const newQuantity = order.quantity + 1;
//
//         await ordersAPI.plus(orderId, newQuantity);
//
//         // 2. изменить Zustand для перерисовки UI
//         set((state) =>(
//             { orders: state.orders
//                     .map(order => order.id === orderId
//                         ? {...order, quantity: newQuantity}
//                         : order
//                     )
//             }
//         ))
//     },
//
//     minus: async (orderId) => {
//         const state = get();
//
//         const order = state.orders.find(o => o.id === orderId);
//         if (!order) return;
//
//         const newQuantity = order.quantity - 1;
//
//         // 1. если стало 0 — удалить
//         if (newQuantity <= 0) {
//             await ordersAPI.removeFromCart(orderId);
//
//             set((state) => ({
//                 orders: state.orders.filter(o => o.id !== orderId)
//             }))
//             return
//         }
//
//         // 2. если больше 0 — обновить на сервере
//         await ordersAPI.minus(orderId, newQuantity);
//
//         set((state) => ({
//             orders: state.orders.map(o =>
//                 o.id === orderId
//                     ? { ...o, quantity: newQuantity}
//                     : o
//             )
//         }))
//     },
//

//
//
//     deleteItems: () => {
//         const isConfirmed = confirm('Are you sure you want to delete?');
//         if (isConfirmed) {
//
//             const state = get();
//
//             const selectedOrders = state.orders.filter(o => o.selected);
//             ordersAPI.deleteItems(selectedOrders)
//             set({
//                 orders: state.orders.filter(o => !o.selected)
//             })
//         }
//     },
//
//     //локальные методы
//     toggleSelect: (id) => {
//         set((state) => {
//             return {
//                 orders: state.orders.map(order => order.id === id
//                     ? {...order, selected: !order.selected}
//                     : order)
//             }
//         })
//     },
//
//     selectAll: () => {
//         set((state) => {
//             return {
//                 orders: state.orders.map(order => ({...order, selected: true}))
//             }
//         })
//     },
//
// });
// export default cartSlice