import React, { Component } from 'react'
import Item from './Item'

export class Items extends Component {
  render() {
    return (
      <main>
        {this.props.items.map(el => (
          <Item key={el.id} item={el} onAdd={this.props.onAdd}/> 
          /*передаем ключ элемента(чтобы не было ошибок), 
          сам элемент, метод onAdd из App.js в компонент Item */
        ))}
      </main>
    )
  }
}

export default Items