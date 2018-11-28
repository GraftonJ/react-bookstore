import React from 'react';
import './App.css';
import BookList from '../booklist/BookList.js'
import SearchBar from '../searchbar/SearchBar.js'
import Cart from '../Cart/Cart.js'

  class App extends React.Component {

    constructor(props) {
       super(props)
       this.apibase = 'http://localhost:8082/api/books/'
       this.state = {
         books: [],
         searchFieldInput: ''
       }
     }

    async componentDidMount() {
      const response = await fetch(this.apibase)
      if(response.status === 200) {
        let resJson = await response.json()
        console.log('RESPONSE JSON', resJson);
        this.setState ({
          ...this.state,
          books: resJson
        })
      }
      else {
        console.log('Component did not mount', response);
      }
    }

    addToCart = id => {
      this.setState({
        ...this.state,
        books: this.state.books.map(book => {
          if(book.id === id){
            book.inCart = true
          }
          return book
        })
      })
    }

    matchingBook = searchFieldInput => {
    this.setState({
      ...this.state,
      searchFieldInput
      })
    }

    render() {
      return (
        <div className="container" id="header">
          <h1 className="container">Bookstore</h1>
          <SearchBar matchingBook={this.matchingBook}/>
          <BookList books={this.state.books} addToCart={this.addToCart} searchFieldInput={this.state.searchFieldInput}/>
          <Cart books={this.state.books} total={this.state.books.filter(book => book.inCart).reduce((acc, book) => { return acc + parseInt(book.price) }, 0).toFixed(2)}/>
        </div>
      )
    }

  }

export default App;
