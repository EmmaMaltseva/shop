import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Стул бежевый',
          img: 'chair_gray.avif',
          desc: 'Кресло Kilanda светло-бежевого цвета с коричневым каркасом',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стол',
          img: 'table.avif',
          desc: 'Выдвижной стол, белый, 82 5/8/113 3/4x41 3/8 "',
          category: 'tables',
          price: '149.00'
        },
        {
          id: 3,
          title: 'Диван',
          img: 'sofa.avif',
          desc: 'Диван, окрашенный в бежевый цвет',
          category: 'sofas',
          price: '449.99'
        },
        {
          id: 4,
          title: 'Лампа',
          img: 'lamp.avif',
          desc: 'Торшер, черный/белый, 59 "',
          category: 'sofas',
          price: '449.99'
        }, 
        {
          id: 5,
          title: 'Стул белый',
          img: 'chair_white.avif',
          desc: 'Вращающееся кресло + подушка, белый/темно-серый',
          category: 'sofas',
          price: '449.99'
        }
      ]
    }
    this.addToOrder = this.addToOrder.bind(this) /*дает возможность в методе addToOrder рабоатть с состояниями*/
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders}/> {/*Передаем массив orders в шапку для вывода на экран в корзине*/}
        <Items items={this.state.items} onAdd={this.addToOrder}/> {/*onAdd - новый пропс, свойство сами сделали, передаем его*/}
        <Footer />
      </div>
    );
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })

    if (!isInArray) 
      this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;
