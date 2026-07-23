export const items = [
    {
        id: 1,
        imgSrc: "/IMAGES/milk.png",
        category: 'milk',
        promo: 5,
        priceDiscontText: 'С картой',
        price: 90.0,
        priceText: 'Обычная',
        title: 'Молоко',
        country: 'Россия',
        quantity: 1,
        currency: '₽'
    },
    {
        id: 2,
        imgSrc: "/IMAGES/bread.jpg",
        category: 'bread',
        promo: 10,
        priceDiscontText: 'С картой',
        price: 50.5,
        priceText: 'Обычная',
        title: 'Хлеб',
        country: 'Россия',
        quantity: 1,
        currency: '₽'
    },
    {
        id: 3,
        imgSrc: "/IMAGES/kolbasi.png",
        category: 'meat',
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
        imgSrc: "/IMAGES/apple.jpg",
        category: 'fruits',
        promo: 7,
        priceDiscontText: 'С картой',
        price: 120.0,
        priceText: 'Обычная',
        title: 'Яблоки',
        country: 'Россия',
        quantity: 1,
        currency: '₽'
    },
    {
        id: 5,
        imgSrc: "/IMAGES/frost.jpg",
        category: 'frost',
        promo: 12,
        priceDiscontText: 'С картой',
        price: 180.0,
        priceText: 'Обычная',
        title: 'Мороженое',
        country: 'Россия',
        quantity: 1,
        currency: '₽'
    },
    {
        id: 6,
        imgSrc: "/IMAGES/nap.jpg",
        category: 'drinks',
        promo: 5,
        priceDiscontText: 'С картой',
        price: 70.0,
        priceText: 'Обычная',
        title: 'Апельсиновый напиток',
        country: 'Россия',
        quantity: 1,
        currency: '₽'
    },
    {
        id: 7,
        imgSrc: "/IMAGES/mar.jpg",
        category: 'candy',
        promo: 6,
        priceDiscontText: 'С картой',
        price: 95.0,
        priceText: 'Обычная',
        title: 'Мармелад',
        country: 'Россия',
        quantity: 1,
        currency: '₽'
    },
    {
        id: 8,
        imgSrc: "https://avatars.mds.yandex.net/i?id=abcd14610124c9ca590f3ac20102a509_l-6556603-images-thumbs&ref=rim&n=13&w=800&h=800",
        category: 'tea',
        promo: 7,
        priceDiscontText: 'С картой',
        price: 210.0,
        priceText: 'Обычная',
        title: 'Черный чай',
        country: 'Россия',
        quantity: 1,
        currency: '₽'
    },
    {
        id: 9,
        imgSrc: "https://static9.tgcnt.ru/posts/_0/e6/e6f7e1d89299cfe9328951398717a419.jpg",
        category: 'grocery',
        promo: 10,
        priceDiscontText: 'С картой',
        price: 135.0,
        priceText: 'Обычная',
        title: 'Рис',
        country: 'Россия',
        quantity: 1,
        currency: '₽'
    },
    {
        id: 10,
        imgSrc: "https://sustock.com.tr/wp-content/uploads/2025/04/Beyaz_Arka_Planda_Izole_Cevizlerin_Detayli_Yakin_Cekimi-scaled.jpg",
        category: 'healthy',
        promo: 9,
        priceDiscontText: 'С картой',
        price: 180.0,
        priceText: 'Обычная',
        title: 'Орехи',
        country: 'Россия',
        quantity: 1,
        currency: '₽'
    },
    {
        id: 11,
        imgSrc: "https://avatars.mds.yandex.net/get-mpic/16469556/2a0000019b001b06fc96b6e607248bdaf018/orig",
        category: 'zoo',
        promo: 15,
        priceDiscontText: 'С картой',
        price: 230.0,
        priceText: 'Обычная',
        title: 'Корм для кошек',
        country: 'Россия',
        quantity: 1,
        currency: '₽'
    },
    {
        id: 12,
        imgSrc: "https://avatars.mds.yandex.net/i?id=8aeb4853685e129688c41434afb7784f056f5ee0-5234979-images-thumbs&n=13",
        category: 'baby',
        promo: 10,
        priceDiscontText: 'С картой',
        price: 145.0,
        priceText: 'Обычная',
        title: 'Пюре яблочное',
        country: 'Россия',
        quantity: 1,
        currency: '₽'
    },
    {
        id: 13,
        imgSrc: "https://avatars.mds.yandex.net/get-mpic/17677706/2a0000019b0017e705cbbf29303b3f974a7b/orig",
        category: 'nonFood',
        promo: 8,
        priceDiscontText: 'С картой',
        price: 190.0,
        priceText: 'Обычная',
        title: 'Шампунь',
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