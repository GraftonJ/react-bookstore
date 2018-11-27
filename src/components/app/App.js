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
         books: []
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
          if(book.id === id) book.inCart = true
          return book
        })
      })
    }

    render() {
      return (
        <div className="home">
          <h1>Bookstore</h1>
          <SearchBar />
          <BookList books={this.state.books} addToCart={this.addToCart}/>
          <Cart books={this.state.books} />
        </div>
      )
    }

  }

export default App;
