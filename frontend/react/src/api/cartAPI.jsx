const CART_URL = 'http://localhost:3001/cart';

const headers = {
    'content-type': 'application/json',
};

const cartAPI = {
    addToCart: (item) => {
        return fetch(CART_URL, {
            method: 'POST',
            headers,
            body: JSON.stringify({
                ...item,
                selected: true,
                productId: item.id,
                quantity: item.quantity ?? 1
            })
        });
    },

    plus: (id, newQuantity) => {
        return fetch(`${CART_URL}/${id}`, {
            method: 'PATCH',
            headers,
            body: JSON.stringify({ quantity: newQuantity })
        });
    },

    minus: (id, newQuantity) => {
        return fetch(`${CART_URL}/${id}`, {
            method: 'PATCH',
            headers,
            body: JSON.stringify({ quantity: newQuantity })
        });
    },

    removeFromCart: (id) => {
        return fetch(`${CART_URL}/${id}`, { method: 'DELETE' });
    },

    deleteItems: (items) => {
        return Promise.all(
            items.map(item =>
                fetch(`${CART_URL}/${item.id}`, { method: 'DELETE' })
            )
        );
    }
};

export default cartAPI;