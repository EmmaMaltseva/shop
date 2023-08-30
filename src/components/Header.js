import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa"
import Order from './Order';

const showOrders = (props) => {
  return (
    <div>
      {props.orders.map(el => (
        <Order key={el.id} item={el}/>
      ))}
    </div>
  )
}

const showNothing = () => {
  return (
    <div className="empty-cart">
      <h2>Товаров нет</h2>
    </div>
  )
}

export default function Header(props) { /*прописываем, что Header принимает propsы(чтобы к ним обращаться), тк это функция, а не класс */
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className="logo">House Staff</span>
        <ul className='nav'>
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/> 
        {/*FaShopingCart - иконка от React. если cartOpen true, добавляем класс active*/}
      
        {cartOpen && (
          <div className='shop-cart'>
            {props.orders.length > 0 ?
              showOrders(props) : showNothing()}
          </div>
        )} {/*если cartOpen true, появляется окно с выбранными товарами(item)*/}
      
      </div>
      <div className="presentation"></div>
    </header>
  )
}
