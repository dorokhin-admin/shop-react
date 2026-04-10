import {create} from "zustand";

export const useShopStore = create((set, get) => ({
    orders: [],
    favorites: [],

    addToCart: (item) => {
        set((state) => {
            if(state.orders.some(o => o.id === item.id)) {
                return state
            }
            return {
                orders: [...state.orders, {...item, selected: true}],
            }
        })
    },

    removeFromCart: (id) => (
        set((state) => ({
                orders: state.orders.filter(o => o.id !== id)
        }))
    ),

    plus: (item) => {
         set((state) =>(
              { orders: state.orders.map(order => order.id === item.id
                     ? {...order, quantity: order.quantity + 1}
                     : order
                 )})

        )
    },

    minus: (item) => {
        set((state) =>(
            { orders: state.orders
                    .map(order => order.id === item.id
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
    }

}))

