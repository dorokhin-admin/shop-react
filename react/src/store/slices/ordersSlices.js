import ordersAPI from "../../api/ordersAPI.jsx";

const OrdersSlices = (set, get) => ({
    orders: [],
    cart: [], // ← важно, чтобы cart был в store

    createOrderFromCart: async () => {
        const cart = get().cart;

        const newOrder = {
            id: Date.now(),
            time: new Date().toLocaleTimeString(),
            items: cart,
            total: cart.reduce((sum, i) => sum + i.price * i.quantity, 0),
        };

        // 👉 отправляем на сервер
        await ordersAPI.createOrder(newOrder);

        // 👉 обновляем Zustand
        set(state => ({
            orders: [...state.orders, newOrder],
        }));
    },

    clearCart: () => {
        set({cart: []})
    },

    fetchCart: async () => {
        const res = await fetch('http://localhost:3001/cart');
        const data = await res.json();

        set({ cart: data });
    },

    fetchOrders: async () => {
        const res = await fetch("http://localhost:3001/orders");
        const data = await res.json();

        set({ orders: data });
    }
});
export default OrdersSlices;


// const OrdersSlices = () => ({
//     cart: [],
//
//     createOrderFromCart: () => {
//         const cart = get().cart;
//
//         const newOrder = {
//             id: Date.now(),
//             time: new Date().toLocaleTimeString(),
//             districts: [],
//             items: cart.map(item => ({
//                 id: item.id,
//                 value: item.price,
//                 driver: "—",
//                 phone: "—",
//                 status: "new",
//             })),
//             products: cart,
//         };
//
//         set(state => ({
//             orders: [...state.orders, newOrder],
//             cart: [],
//         }));
//     },
//
//     fetchOrders: async () => {
//         const res = await fetch("http://localhost:3001/cart");
//         const data = await res.json();
//
//         set({ cart: data });
//     }
// });
//
// export default OrdersSlices;