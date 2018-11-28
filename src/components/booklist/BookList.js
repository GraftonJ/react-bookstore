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
            {this.props.books.filter(book => ( book.title.includes(this.props.searchFieldInput) || book.author.includes(this.props.searchFieldInput))).map((book, idx) =>
              (<Book key={idx} book={book} addToCart={this.props.addToCart}/>
            ))}
            </tbody>
          </table>
      </div>
    )
  }
}
