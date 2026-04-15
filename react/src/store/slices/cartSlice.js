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

    removeFromCart: async (productId) => {
        const state = get();
        const order = state.orders.find(o => o.productId === productId);
        if (!order) return;

        await fetch(`http://localhost:3001/orders/${order.id}`, {
            method: 'DELETE',
        });

        set((state) => ({
            orders: state.orders.filter(o => o.productId !== productId)
        }));
    },

    plus: (id) =>
        set((state) => ({
            orders: state.orders.map(o =>
                o.id === id
                    ? { ...o, quantity: o.quantity + 1 }
                    : o
            )
        })),

    minus: (id) => {
        set((state) =>(
            { orders: state.orders
                    .map(order => order.id === id
                        ? {...order, quantity: Math.max(order.quantity - 1, 0)}
                        : order)
                    .filter(order => order.quantity > 0)
            }
        ))
    },

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