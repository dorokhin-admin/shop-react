import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Products from "./components/Products.jsx";
import Cart from "./components/Cart.jsx";
import HeaderNav from "./components/HeaderNav.jsx";
import HeaderHero from "./components/HeaderHero.jsx";


const OldApp = () =>  {

    const items =[
        { id:1,
            imgSrc: 'src/IMAGES/blini.png',
            promo: 10,
            priceDiscontText: 'С картой',
            price: 50.50,
            priceText: 'Обычная',
            title:'кускус',
            country:'Россия',
            quantity: 1,
            currency: '₽',
        },
        {
            id:2,
            imgSrc: 'src/IMAGES/milk.png',
            promo: 10,
            priceDiscontText: 'С картой',
            price: 50.50,
            priceText: 'Обычная',
            title:'Г/Ц Блинчики с мясом вес,',
            country:'Россия',
            quantity: 1,
            currency: '₽',
        },
        {
            id:3,
            imgSrc: 'src/IMAGES/kolbasi.png',
            promo: 10,
            priceDiscontText: 'С картой',
            price: 50.50,
            priceText: 'Обычная',
            title:'Г/Ц Блинчики с мясом вес,',
            country:'Россия',
            quantity: 1,
            currency: '₽',
        },
        {
            id:4,
            imgSrc: 'src/IMAGES/image(3).png',
            promo: 10,
            priceDiscontText: 'С картой',
            price: 50.50,
            priceText: 'Обычная',
            title:'Г/Ц Блинчики с мясом вес,',
            country:'Россия',
            quantity: 1,
            currency: '₽',
        }
    ];

    return (
        <div>
            <header>
                <div className="container">
                    <div className='header__inner'>
                        <Header/>
                        <HeaderNav/>
                    </div>
                    <HeaderHero/>
                </div>
            </header>

            <div className="container">
                <Products
                   items={items}
                />
                <Cart />
            </div>
            <Footer/>
        </div>
    )
}

export default OldApp
