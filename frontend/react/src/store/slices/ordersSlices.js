const OrdersSlices = (set, get) => ({
    orders: [],

    createOrderFromCart: async (form) => {
        const cart = get().cart;

        const newOrder = {
            id: Date.now(),
            city: form.city,
            street: form.street,
            house: form.house,
            float: form.float,
            additionally: form.additionally,
            phone: form.phone,
            date: form.date,
            time: form.time,
            items: cart,
            total: cart.reduce((sum, i) => sum + i.price * i.quantity, 0),
            status: "new",
            selected: true,
        };

        try {
            const orders = [...get().orders, newOrder];
            localStorage.setItem("orders", JSON.stringify(orders));
            localStorage.setItem("cart", JSON.stringify([]));

            set({
                orders,
                cart: []
            });

            alert('Order successfully created!');
        } catch (e) {
            console.error(e);
            alert('Order failed');
        }
    },

    updateOrderStatus: async (orderId, status) => {
        const orders = get().orders.map(order =>
            order.id === orderId
                ? { ...order, status }
                : order
        );

        try {
            localStorage.setItem("orders", JSON.stringify(orders));
            set({ orders });
        } catch (e) {
            console.error("Failed to update order status:", e);
        }
    },

    fetchOrders: async () => {
        try {
            const saved = localStorage.getItem("orders");
            const data = saved ? JSON.parse(saved) : [];
            set({ orders: data });
        } catch (e) {
            console.error(e);
        }
    },
});

export default OrdersSlices;