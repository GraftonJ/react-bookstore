import React from 'react'
import CartItem from './Cart-item.js'

export default class Cart extends React.Component {
  render() {
    const books = this.props.books
      .filter(book => book.inCart)
      .map((book, idx) => {
        return <CartItem key={idx} book={book}/>
      })
    return (
      <div>
          <h2>Cart</h2>
          {books}
      </div>
    )
  }
}