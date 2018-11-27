import React from 'react'
import Book from './Book.js'

export default class BookList extends React.Component {
  render() {
    return (
      <div>
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">Add to Cart</th>
              </tr>
            </thead>
            <tbody>
            {this.props.books.map((elem, idx) => <Book key={idx} id={elem.id} book={elem} />)}
            </tbody>
          </table>
      </div>
    )
  }
}
