import React from 'react'

const CartItem = ({book: {id, title, price, author}}) => (
  <tr>
    <th scope='row'>{id}</th>
    <td>{title}</td>
    <td>{author}</td>
    <td><button type="button" className="btn btn-light">Add to Cart</button></td>
  </tr>
)

export default CartItem
