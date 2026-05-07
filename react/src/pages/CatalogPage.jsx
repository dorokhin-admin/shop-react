import React from 'react';
import Header from "../components/HeaderComponents/Header.jsx";
import HeaderNav from "../components/HeaderComponents/HeaderNav.jsx";
import Footer from "../components/Footer.jsx";
import {Link} from "react-router-dom";



const CatalogPage = () => {
    const categories = [
        {id: 'milk', img: "/IMAGES/grid.png", title: "Молоко, сыр, яйцо", size:'large'},
        {id: 'bread', img: "/IMAGES/grid2.png", title: "Хлеб"},
        {id: 'fruits', img: "/IMAGES/grid3.png", title: "Фрукты и овощи"},
        {id: 'frost', img: "/IMAGES/grid4.png", title: "Замороженные продукты"},
        {id: 'drinks', img: "/IMAGES/grid5.png", title: "Напитки"},
        {id: 'candy', img: "/IMAGES/grid6.png", title: "Кондитерские изделия"},
        {id: 'tea', img: "/IMAGES/grid7.png", title: "Чай, кофе"},
        {id: 'grocery', img: "/IMAGES/grid8.png", title: "Бакалея"},
        {id: 'healthy', img: "/IMAGES/grid9.png", title: "Здоровое питание"},
        {id: 'zoo', img: "/IMAGES/grid10.png", title: "Зоотовары", size:'large'},
        {id: 'baby', img: "/IMAGES/grid11.png", title: "Детское питание"},
        {id: 'meat', img: "/IMAGES/grid12.png", title: "Мясо, птица, колбаса", size:'large'},
        {id: 'nonFood', img: "/IMAGES/grid13.png", title: "Непродовольственные товары"},
    ]

    return (
    <>
        <header>
            <div className="container">
                <div className='header__inner'>
                    <Header/>
                    <HeaderNav/>
                </div>
            </div>
        </header>

        <div className="container">
            <section  className="page page--catalog">
                <nav className="breadcrumbs">
                    <Link to="/" className='breadcrumbs-content' >Главная</Link>
                    <span className="breadcrumbs__separator">
                        <img src="/IMAGES/chevron-right.png" alt="chevron"/></span>
                    <a className="breadcrumbs-content" href="#">Каталог</a>
                </nav>

                <div className="main-catalog">
                    <span className="catalog__title">Каталог</span>
                    <div className="catalog__grid">
                        {categories.map((cat,i) => (
                            <Link to={`/catalog/${cat.id}`}
                                  key={cat.id}
                                  className={`grid-element ${cat.size === 'large' ? 'grid-large' : ''}`}
                            >
                                <img src={cat.img} alt={cat.title}/>
                                <span className="grid-element-text">{cat.title}</span>
                            </Link>
                        ))}
                    </div>
                  </div>
            </section>
        </div>
        <Footer/>
    </>
    )
}

export default CatalogPage;