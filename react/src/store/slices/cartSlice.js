export const cartSlice = (set, get) => ({
    orders: [],

    addToCart: (item) =>
        set((state) => {
            if (state.orders.some(o => o.id === item.id)) {
                return state;
            }
            return {
                orders: [...state.orders, { ...item, selected: true }],
            };
        }),

    removeFromCart: (id) =>
        set((state) => ({
            orders: state.orders.filter(o => o.id !== id)
        })),

    plus: (id) =>
        set((state) => ({
            orders: state.orders.map(o =>
                o.id === id ? { ...o, quantity: o.quantity + 1 } : o
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