const URL = 'http://localhost:3001/orders';

const headers = {
    'content-type': 'application/json',
}

const ordersAPI = {
    createOrder: async (order) => {
        const res = await fetch(URL, {
            method: 'POST',
            headers,
            body: JSON.stringify(order)
        });

        if (!res.ok) throw new Error("Order create failed");

        return res.json();
    },

    deleteItems: (selectedOrders) => {
        return  Promise.all(
            selectedOrders.map(order =>
                fetch(`${URL}/${order.id}`, { method: 'DELETE'})
            )
        )
    }


}

export default ordersAPI;