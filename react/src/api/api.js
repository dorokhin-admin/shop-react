export const getItems = async () => {
    const res = await fetch("https://function-bun-production-512e.up.railway.app/api/items");
    return res.json();
};