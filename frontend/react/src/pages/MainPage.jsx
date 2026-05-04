import Header from "../components/HeaderComponents/Header.jsx";
import HeaderNav from "../components/HeaderComponents/HeaderNav.jsx";
import HeaderHero from "../components/HeaderComponents/HeaderHero.jsx";
import React from 'react';
import {useShopStore} from "../store/useShopStore.js";
import Product from "../components/ProductsComponents/Product.jsx";
import Footer from "../components/Footer.jsx";

const MainPage = ({items}) => {
    const searchQuery = useShopStore(state => state.searchQuery);

    const clearSearchQuery = searchQuery.trim().toLowerCase();
    const filterItems = clearSearchQuery.length > 0
        ? items.filter((item) => item.title.toLowerCase().includes(clearSearchQuery))
        : items;

    return (
        <>
            <header>
                <div className="container">
                    <div className='header__inner'>
                        <Header/>
                        <HeaderNav/>
                    </div>
                </div>
                <HeaderHero/>
            </header>

            <div className="container">
                <section className="page page--home">
                    <section className="products products--sale">
                        <h2 className='section-title'>Акции</h2>
                        <div className="products__list">
                            {filterItems.length === 0 ? (
                                <div className='product__empty-message'>Таких продуктов нет :(</div>
                                ) : (
                                filterItems.map(product => (
                                <Product
                                    key={product.id}
                                    product={product}/>
                            ))
                        )}
                        </div>
                    </section>

                    <section className="products products--new">
                        <h2 className='section-title'> Новинки</h2>
                        <div className='products__list'>
                            {filterItems.length === 0 ? (
                                <div className='product__empty-message'>Таких продуктов нет :(</div>
                            ) : (
                                filterItems.map(product => (
                                    <Product
                                        key={product.id}
                                        product={product}/>
                                ))
                            )}
                        </div>
                    </section>

                    <section className="products products--history">
                        <h2 className='section-title'>Покупали раньше</h2>
                        <div className='products__list'>
                            {filterItems.length === 0 ? (
                                <div className='product__empty-message'>Таких продуктов нет :(</div>
                            ) : (
                                filterItems.map(product => (
                                    <Product
                                        key={product.id}
                                        product={product}/>
                                ))
                            )}
                        </div>
                    </section>

                    <section className="promotions">
                        <h2 className="section-title">Специальные предложения</h2>
                        <div className='special-stocks'>
                            <article className="promo-card">
                                <img src="/IMAGES/banner-hover%20(1).png" alt="promo-card"/>
                                <div className="promo-card__content">
                                    <h3 className="h3">Оформите карту<br/>«Северяночка»</h3>
                                    <span>И получайте бонусы при покупке<br/>в магазинах и на сайте</span>
                                </div>
                            </article>
                            <article className="promo-card">
                                <img src="/IMAGES/banner.png" alt="promo-card"/>
                                <div className="promo-card__content">
                                    <h3>Покупайте акционные товары</h3>
                                    <span>И получайте вдвое больше бонусов</span>
                                </div>
                            </article>
                        </div>
                    </section>

                    <section className="home__stores">
                        <h2 className="section-title">Наши магазины</h2>
                        <div className="home__stores-controls">
                            <button className="stores__button-selected">п.Щелькяюр</button>
                            <button className="stores__button">п.д.Вертеп</button>
                            <button className="stores__button">п.Краснобор</button>
                            <button className="stores__button">п.Диюр</button>
                        </div>
                        <img src="/IMAGES/map.png" alt="map"/>
                    </section>

                    <section className="articles">
                        <div className="articles--header-block">
                            <h2 className="section-title">Статьи</h2>
                            <button className="articles--header-block-right">
                            <h2 className="section-more-title">Все статьи</h2>
                            <img src="/IMAGES/chevron-right.png" alt="right"/>
                            </button>
                        </div>
                        <div className="article-cards">
                            <article className="article-card">
                                <img src="/IMAGES/Item(12).png" alt="article1"/>
                                <div className="paragraph-article">
                                    <span className="article-card__date">05.03.2021</span>
                                    <h4 className="article-card__title">Режим использования масок<br/>и перчаток на
                                        территории магазинов</h4>
                                    <p className="article-card__text">Подробная информация о режимах<br/>использования
                                        масок и перчаток на<br/>территории магазинов "ЛЕНТА". Информация<br/>обновляется
                                        каждый будний день.</p>
                                </div>
                                <button className="article-card__button">Подробнее</button>
                            </article>
                            <article className="article-card">
                                <img src="/IMAGES/Item%20(18).png" alt="article2"/>
                                <div className="paragraph-article">
                                    <span className="article-card__date">05.03.2021</span>
                                    <h4 className="article-card__title">Весеннее настроение для каждой</h4>
                                    <p className="article-card__text">8 Марта – это не просто Международный<br/>женский день, это ещё
                                        день тюльпанов,<br/>приятных сюрпризов и праздничных тёплых<br/>пожеланий.</p>
                                </div>
                                <button className="article-card__button">Подробнее</button>
                            </article>
                            <article className="article-card">
                                <img src="/IMAGES/Item%20(18).png" alt="article3"/>
                                <div className="paragraph-article">
                                    <span className="article-card__date">05.03.2021</span>
                                    <h4 className="article-card__title">ЗОЖ или ФАСТФУД. А вы на чьей <br/> стороне? Голосуем!</h4>
                                    <p className="article-card__text">Голосуйте за любимые категории, выбирайте
                                        <br/> категорию-победителя в мобильном
                                        <br/> приложении и получайте кешбэк 10%
                                        <br/> баллами в апреле!</p>
                                </div>
                                <button className="article-card__button">Подробнее</button>
                            </article>
                        </div>
                    </section>
                </section>
            </div>

            <Footer/>
        </>
    );
};

export default MainPage;