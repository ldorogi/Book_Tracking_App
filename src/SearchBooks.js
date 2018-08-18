import React from 'react'
import {Route, Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

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
                    <li key={i}>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{
                            width: 128,
                            height: 192,
                            backgroundImage: book.imageLinks ?
                              `url(${book.imageLinks.thumbnail})` : ''
                          }}></div>
                          <div className="book-shelf-changer">
                            <select onChange={this.changeBookShelf} value={this.state.shelf}>
                              <option value="move" disabled>Move to...</option>
                              <option value="currentlyReading">Currently Reading
                              </option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors ? book.authors.toString() : ' '}</div>
                      </div>
                    </li>
                  ))}
                </ol>
            </div>
          </div>)
	}
}

export default SearchBooks