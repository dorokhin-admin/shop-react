const cartSlice = (set, get) => ({

    addToCart: async (item) => {
        const state = get();

        if (state.orders.some(o => o.productId === item.id)) return;

        const res = await fetch('http://localhost:3001/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...item,
                selected: true,
                quantity: 1,
                productId: item.id,
            })
        });

        const newOrder = await res.json();

        set((state) => ({
            orders: [...state.orders, newOrder]
        }));
    },

    removeFromCart: async (id) => {
        const state = get();
        const order = state.orders.find(o => o.id === id);
        if (!order) return;

        await fetch(`http://localhost:3001/orders/${order.id}`, {
            method: 'DELETE',
        });

        set((state) => ({
            orders: state.orders.filter(o => o.id !== order.id)
        }));
    },

    plus: (id) => {
        set((state) =>(
            { orders: state.orders
                    .map(order => order.id === id
                        ? {...order, quantity: order.quantity + 1}
                        : order
                    )
            }
        ))
    },

        minus: async (id) => {
            const state = get();

            const order = state.orders.find(o => o.id === id);
            if (!order) return;

            const newQuantity = order.quantity - 1;

            // 1. если стало 0 — удалить
            if (newQuantity <= 0) {
                await fetch(`http://localhost:3001/orders/${order.id}`, {
                    method: 'DELETE',
                });

            set((state) => ({
                orders: state.orders.filter(o => o.id !== id)
            }))
                return
            }

            // 2. если больше 0 — обновить на сервере
            await fetch(`http://localhost:3001/orders/${order.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    quantity: newQuantity
                })
            });

            set((state) => ({
                orders: state.orders.map(o =>
                    o.id === id
                    ? { ...o, quantity: newQuantity}
                    : o
                )
            }))
        },

    //item.id - в каталоге
    //productId - в корзине
    //order.id - на сервере

    toggleSelect: (id) => {
        set((state) => {
            return {
                orders: state.orders.map(order => order.id === id
                    ? {...order, selected: !order.selected}
                    : order)
            }
        })
    },

    deleteItems: () => {
        set((state) => {
            return {
                orders: state.orders.filter(order => !order.selected)
            }
        })
    },

    selectAll: () => {
        set((state) => {
            return {
                orders: state.orders.map(order => ({...order, selected: true}))
            }
        })
    },

});
export default cartSlice