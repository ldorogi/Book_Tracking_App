import React from 'react'
import {Route, Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from "./Book";

class SearchBooks extends React.Component {
	state = {
    query: '',
    books: [],
    showBooks: []
  }
  
  // get all books before the component is loaded
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }
  
  // input state handling
  updateQuery = (query) => {
    this.setState({query: query})
    let showBooks = []
    if (query) {
      BooksAPI.search(query).then(response => {
        if (response.length) {
          showBooks = response.map(y => {
            const index = this.state.books.findIndex(z => z.id === y.id)
            if( index >= 0 ) {
              return this.state.books[index]
            } else {
              return y
            }
          })
        }
        this.setState({showBooks})
      })
    }
    else {
      this.setState({showBooks})
    }
  }

	render() {
		const {query} = this.state
		return (
			<div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text"
                       placeholder="Search by title or author"
                       value={query}
                       onChange={(event) => this.updateQuery(event.target.value)}
                  />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                  {this.state.showBooks.map((book, i) => (
                    <Book key={i} book={book}/>
                  ))}
                </ol>
            </div>
          </div>)
	}
}

export default SearchBooks