export const getItems = async () => {
    const res = await fetch("https://function-bun-production-512e.up.railway.app/api/items");
    return res.json();
};

export const getCart = async () => {
    const res =  await fetch("https://function-bun-production-512e.up.railway.app/api/cart")
    return res.json()
}

export const getOrders= async () => {
    const res =  await fetch("https://function-bun-production-512e.up.railway.app/api/orders")
    return  res.json()
}