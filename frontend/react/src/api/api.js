const items = [
    {
        id: 1,
        imgSrc: "/IMAGES/blini.png",
        promo: 10,
        priceDiscontText: 'С картой',
        price: 50.5,
        priceText: 'Обычная',
        title: 'Кускус',
        country: 'Россия',
        quantity: 1,
        currency: '₽'
    },
    {
        id: 2,
        imgSrc: "/IMAGES/milk.png",
        promo: 15,
        priceDiscontText: 'С картой',
        price: 120.0,
        priceText: 'Обычная',
        title: 'Блинчики с мясом',
        country: 'Россия',
        quantity: 1,
        currency: '₽'
    },
    {
        id: 3,
        imgSrc: "/IMAGES/kolbasi.png",
        promo: 8,
        priceDiscontText: 'С картой',
        price: 260.0,
        priceText: 'Обычная',
        title: 'Колбаски',
        country: 'Россия',
        quantity: 1,
        currency: '₽'
    },
    {
        id: 4,
        imgSrc: "/IMAGES/image(3).png",
        promo: 5,
        priceDiscontText: 'С картой',
        price: 90.0,
        priceText: 'Обычная',
        title: 'Молоко',
        country: 'Россия',
        quantity: 1,
        currency: '₽'
    }
];

export const getItems = async () => items;

export const getCart = async () => {
    const saved = localStorage.getItem("cart");
    const cart = saved ? JSON.parse(saved) : [];
    return cart.map(item => ({
        ...item,
        selected: item.selected ?? true,
    }));
};

export const getOrders = async () => {
    const saved = localStorage.getItem("orders");
    return saved ? JSON.parse(saved) : [];
};