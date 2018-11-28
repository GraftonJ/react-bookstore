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
      <div className="container">
          <h2>Cart</h2>
            <h5>Total: ${this.props.total}</h5>
            <table className="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Title</th>
                  <th scope="col">Author</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {books}
              </tbody>
            </table>
      </div>
    )
  }
}
