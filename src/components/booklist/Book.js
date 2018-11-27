import React from 'react'

const Book = ({book: {id, title, price, author}, addToCart }) => (
  <tr>
    <th scope='row'>{id}</th>
    <td>{title}</td>
    <td>{author}</td>
    <td><button type="button" className="btn btn-light" onClick={() => addToCart(id)}>Add to Cart for ${price}</button></td>
  </tr>
)

export default Book
