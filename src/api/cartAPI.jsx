const CART_URL = 'https://function-bun-production-512e.up.railway.app/api/cart';

const headers = {
    'content-type': 'application/json',
};

const cartAPI = {
    // addToCart: (item) => {
    //     return fetch(CART_URL, {
    //         method: 'POST',
    //         headers,
    //         body: JSON.stringify({
    //             ...item,
    //             selected: true,
    //             productId: item.id,
    //             quantity: item.quantity ?? 1
    //         })
    //     });
    // },

    addToCart: async (item) => {
        const res = await fetch(CART_URL, {
            method: 'POST',
            headers,
            body: JSON.stringify({
                ...item,
                productId: item.id,
                quantity: item.quantity ?? 1,
                selected: true
            })
        });

        if (!res.ok) throw new Error("Add to cart failed");

        return  res.json();
    },

    plus: (id, newQuantity) => {
        console.log("SEND PATCH:", id, newQuantity);

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