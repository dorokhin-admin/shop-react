import React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Products from "./components/Products.jsx";
import Cart from "./components/Cart.jsx";

class App extends React.Component {//делаем через формат класса с конструктором, а можно через хук useState
    constructor(props) {
        super(props);//для передачи пропсов в конструктор родительского класса
        this.state = {
            items: [
                {
                    id:1,
                    imgSrc: 'src/IMAGES/blini.png',
                    promo: 10,
                    priceDiscontText: 'С картой',
                    price: 50.50,
                    priceText: 'Обычная',
                    title:'Г/Ц Блинчики с мясом вес,',
                    country:'Россия',
                    quantity: 1,
                    currency: 'RUB'
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
                    currency: 'RUB'
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
                     currency: 'RUB'
                },
                {
                    id:4,
                    imgSrc: 'src/IMAGES/kolbasi.png',
                    promo: 10,
                    priceDiscontText: 'С картой',
                    price: 50.50,
                    priceText: 'Обычная',
                    title:'Г/Ц Блинчики с мясом вес,',
                    country:'Россия',
                    quantity: 1,
                     currency: 'RUB'
                }
            ],
        };
    }

   deleteItem = (id) => {
       this.setState({
           items:  this.state.items.filter(item => item.id !== id)});
   }
   console.log

    render() {
      return (
          <div>
            <Header items={this.state.items} />
              <div className="container">
                <Products items={this.state.items}/>
                <Cart items={this.state.items}/>
              </div>
            <Footer/>
          </div>
          )
        }
}

export default App
