import React, {Component} from 'react';

class MainContainer extends Component {
    render() {
        return (
            <div className="container">
                <section className="page page--home">
                    <section className="products products--sale">
                        <h2 className='section-title'>Акции</h2>
                        <div className="products__list">
                            {/*product from JS*/}
                        </div>
                    </section>

                    <section className="products products--new">
                        <h2 className='section-title'> Новинки</h2>
                        <div className='products__list'>
                            {/*product from JS*/}
                        </div>
                    </section>

                    <section className="products products--history">
                        <h2 className='section-title'>Покупали раньше</h2>
                        <div className='products__list'>
                            {/*product from JS*/}
                        </div>
                    </section>

                    <section className="promotions">
                        <h2 className="section-title">Специальные предложения</h2>
                        <div className='special-stocks'>
                            <article className="promo-card">
                                <img src="src/IMAGES/banner-hover%20(1).png" alt="promo-card"/>
                                <div className="promo-card__content">
                                    <h3 className="h3">Оформите карту<br/>«Северяночка»</h3>
                                    <span>И получайте бонусы при покупке<br/>в магазинах и на сайте</span>
                                </div>
                            </article>
                            <article className="promo-card">
                                <img src="src/IMAGES/banner.png" alt="promo-card"/>
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
                        <img src="src/IMAGES/map.png" alt="map"/>
                    </section>

                    <section className="articles">
                        <h2 className="section-title">Статьи</h2>
                        <div className="article-cards">
                            <article className="article-card">
                                <img src="src/IMAGES/Item(12).png" alt="Что-то"/>
                                <div className="paragraph-article">
                                    <span className="article-card__date">05.03.2021</span>
                                    <h4 className="article-card__title">Режим использования масок<br/>и перчаток на
                                        территории магазинов</h4>
                                    <p className="article-card__text">Подробная информация о режимах<br/>использования
                                        масок и перчаток на<br/>территории магазинов "ЛЕНТА". Информация<br/>обновляется
                                        каждый будний день.</p>
                                    <button className="article-card__button">Подробнее</button>
                                </div>
                            </article>
                            <article className="article-card">
                                <img src="src/IMAGES/Item%20(18).png" alt="Что-то"/>
                                <div className="paragraph-article">
                                    <span className="date">05.03.2021</span>
                                    <h4 className="h4">Весеннее настроение для каждой</h4>
                                    <p className="text">8 Марта – это не просто Международный<br/>женский день, это ещё
                                        день тюльпанов,<br/>приятных сюрпризов и праздничных тёплых<br/>пожеланий.</p>
                                    <button className="more">Подробнее</button>
                                </div>
                            </article>
                            <article className="article-card">
                                <img src="src/IMAGES/Item%20(18).png" alt="Что-то"/>
                                <div className="paragraph-article">
                                    <span className="date">05.03.2021</span>
                                    <h4 className="h4">Весеннее настроение для каждой</h4>
                                    <p className="text">8 Марта – это не просто Международный<br/>женский день, это ещё
                                        день тюльпанов,<br/>приятных сюрпризов и праздничных тёплых<br/>пожеланий.</p>
                                    <button className="more">Подробнее</button>
                                </div>
                            </article>
                        </div>
                    </section>
                </section>
            </div>
        );
    }
}

export default MainContainer;