import ordersAPI from "../../api/ordersAPI.jsx";

const OrdersSlices = (set, get) => ({
    orders: [],

    createOrderFromCart: async (form) => {
        const cart = get().cart;

        const newOrder = {
            id: Date.now(),

            createdAt: new Date().toISOString(),

            deliveryDate: form.date,
            deliveryTime: form.time,

            date: form.date,
            time: form.time,
            items: cart,
            total: cart.reduce((sum, i) => sum + i.price * i.quantity, 0),
        };

        await ordersAPI.createOrder(newOrder);

        alert('Order Successfully created!');

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
