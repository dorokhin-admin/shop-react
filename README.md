React Magnum Shop

Дизайн: https://www.figma.com/design/W1Wh3vSiCSWWFTfkxiC6Z1/%D0%A1%D0%B5%D0%B2%D0%B5%D1%80%D1%8F%D0%BD%D0%BE%D1%87%D0%BA%D0%B0-Share-Full?node-id=520-36984&t=T8jcAmaxOKHsEw98-0

Ссылка: https://shop-react.dorokhin-ilyaa.workers.dev/

Деплой на cloudflare
 
 Описание
Это интернет-магазин, разработанный на React.
Проект включает каталог товаров, корзину, оформление заказов и страницу менеджера.

Функциональность:
Просмотр списка товаров,
Фильтрация по категориям,
Страница одного товара,
Корзина покупок,
Оформление заказа (Delivery flow),
Страница менеджера,
Работа с глобальным состоянием (store),
Загрузка данных с API (cart, orders, items)

Стек технологий
React
React Router DOM
Zustand (store)
JavaScript (ES6+)
CSS
Mock backend (db.json)
 
Установка и запуск
1. Установить зависимости
npm install
2. Запуск проекта
npm start
или (если Vite):
npm run dev

Основные страницы
/ — Главная
/catalog — Каталог товаров
/cart — Корзина
/product/:id — Страница товара
/delivery — Оформление заказа
/manager — Панель менеджера

Архитектура
Global state через useShopStore
API слой разделён на:
cartAPI.jsx
ordersAPI.jsx
Компоненты разделены по доменам (Header, Delivery, Pages)
Данные загружаются при старте приложения

Работа с данными
При запуске:
загружаются товары (fetchItems)
загружается корзина (fetchCart)
загружаются заказы (fetchOrders)

Особенности
Используется моковый backend (db.json)
Состояние хранится в Zustand store
