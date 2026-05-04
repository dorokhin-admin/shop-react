const URL = 'http://localhost:3001/orders';

const headers = {
    'content-type': 'application/json',
}

const ordersAPI = {
    createOrder: (order) => {
        return fetch(URL, {
            method: 'POST',
            headers,
            body: JSON.stringify(order)
        });
    },

    addToCart: (item) => {
        return fetch(URL, {
            method: 'POST',
            headers,
            body: JSON.stringify({
                ...item,
                selected: true,
                productId: item.id,
            })
        })
    },

    plus: (orderId,newQuantity) => {
        return fetch(`${URL}/${orderId}`, {
            method: 'PATCH',
            headers,
            body: JSON.stringify({
                quantity: newQuantity
            })
        })
    },

    minus: (orderId,newQuantity) => {
        return fetch(`${URL}/${orderId}`, {
            method: 'PATCH',
            headers,
            body: JSON.stringify({
                quantity: newQuantity
            })
        })
    },

    removeFromCart: (orderId) => {
        return fetch(`${URL}/${orderId}`, { method: 'DELETE' })
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