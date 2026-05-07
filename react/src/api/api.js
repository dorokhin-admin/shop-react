export const getItems = async () => {
    const res = await fetch("http://localhost:3001/items");
    return res.json();
};

export const getCart = async () => {
    const res =  await fetch("http://localhost:3001/cart")
    return res.json()
}

export const getOrders= async () => {
    const res =  await fetch("http://localhost:3001/orders")
    return  res.json()
}