import React, {Component} from 'react'
import './App.css'
import ListBooks from "./ListBooks"
import SearchBooks from "./SearchBooks"
import {Route, Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'


class BooksApp extends Component {
  state = {
    books: [],
  }

  // update books on the shelves
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    BooksAPI.getAll().then((books) => {
      book.shelf = shelf;
      this.setState((state) => ({
        books: state.books.filter(y => y.id !== book.id).concat([book])
      }))
    })
  }
  
  // get all books before the component is loaded
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  render() {
      return (
        <div className="app">
          <Route exact path="/search" render={() => (
            <SearchBooks
              books={this.state.books}
              updateShelf={this.updateShelf}/>)}/>
          <Route exact path="/" render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>myBookShelf</h1>
              </div>
              <div className="list-books-content">
                <ListBooks
                  title='Reading Now' books={this.state.books.filter((book) =>
                  book.shelf === 'currentlyReading')} updateShelf={this.updateShelf}/>
                <ListBooks
                  title='Want to read' books={this.state.books.filter((book) =>
                  book.shelf === 'wantToRead')} updateShelf={this.updateShelf}/>
                <ListBooks
                  title='Done' books={this.state.books.filter((book) =>
                  book.shelf === 'read')}
                  updateShelf={this.updateShelf}/>
              </div>
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          )}/>
        </div>
      )
    }
  }

export default BooksApp
