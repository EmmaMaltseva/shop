import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa"
import Order from './Order';

export default function Header(props) { /*прописываем, что Header принимает propsы, тк это функция, а не класс */
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
        <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/> {/*добавляем класс active, если состояние cartOpen true*/}
      
        {cartOpen && (
          <div className='shop-cart'>
            {props.orders.map(el => (
              <Order key={el.id} item={el}/>
            ))}
          </div>
        )} {/*Окно при нажатии на корзину */}
      
      </div>
      <div className="presentation"></div>
    </header>
  )
}
