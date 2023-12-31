import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {                 /*для работы с состояниями */
      orders: [],
      currentItems: [],
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
          category: 'sofa',
          price: '449.99'
        },
        {
          id: 4,
          title: 'Лампа',
          img: 'lamp.avif',
          desc: 'Торшер, черный/белый, 59 "',
          category: 'light',
          price: '449.99'
        }, 
        {
          id: 5,
          title: 'Стул белый',
          img: 'chair_white.avif',
          desc: 'Вращающееся кресло + подушка, белый/темно-серый',
          category: 'chairs',
          price: '449.99'
        },
        {
          id: 6,
          title: 'Ковер',
          img: 'rug.avif',
          desc: 'Ковер с низким ворсом, многоцветный, 7 " 10 "x9 " 10"',
          category: 'rug',
          price: '169.99'
        }
      ],
      showFullItem: false,
      fullItem: {

      }
    }  
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this) /*дает возможность в методе addToOrder работать с состояниями*/
    this.deleteOrder = this.deleteOrder.bind(this); /*Внутри метода можем работать с состояниями */
    this.chooseCategory = this.chooseCategory.bind(this); /*Внутри метода можем работать с состояниями и this*/
    this.onShowItem = this.onShowItem.bind(this); /*Внутри метода можем работать с состояниями и this*/
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/> {/*Передаем массив orders в шапку для вывода на экран в корзине, метод для удаления записи*/}
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/> {/*onAdd - новый пропс, свойство сами сделали, передаем его*/}
        {this.state.showFullItem && <ShowFullItem item={this.state.fullItem} onShowItem={this.onShowItem} onAdd={this.addToOrder}/>} {/*если состояние наше true то отображаем карточку товара */}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item}) /*кладем в fullItem товар, на карточку которого нажали */
    this.setState({showFullItem: !this.state.showFullItem}) /*Чтобы при клике у нас появлялась/исчезала карточка товара */
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true /*если уже есть такая запись то мы ее не добавляем в orders */
    })

    if (!isInArray) 
      this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;
