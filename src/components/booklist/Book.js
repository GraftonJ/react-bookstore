import React from 'react'

const Book = ({book: {id, title, price, author}}) => (
  <tr>
    <th scope='row'>{id}</th>
    <td>{title}</td>
    <td>{author}</td>
  </tr>
)

export default Book
