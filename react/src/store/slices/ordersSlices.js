import ordersAPI from "../../api/ordersAPI.jsx";
import {getOrders} from "../../api/api.js";

const OrdersSlices = (set, get) => ({
    orders: [],

    createOrderFromCart: async (form) => {
        const cart = get().cart;

        const newOrder = {
            city: form.city,
            street: form.street,
            house: form.house,
            float: form.float,
            additionally: form.additionally,
            phone: form.phone,

            deliveryDate: form.date,
            deliveryTime: form.time,

            items: cart,
            total: cart.reduce((sum, i) => sum + i.price * i.quantity, 0),

            status: "new"
        };

        try {
            // 🔥 ВОТ ЭТО ГЛАВНОЕ
            const savedOrder = await ordersAPI.createOrder(newOrder);

            set(state => ({
                orders: [...state.orders, savedOrder],
                cart: [] // очистка корзины на фронте
            }));

            alert('Order successfully created!');
        } catch (e) {
            console.error(e);
            alert('Order failed');
        }
    },
});

export default OrdersSlices;