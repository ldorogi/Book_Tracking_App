import React from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from "./Book";

class SearchBooks extends React.Component {
	state = {
    searchQuery: '',
    searchResults: []
  }
  
  updateSearch = (query) => {
    this.setState({searchQuery: query})
    if (query <= 0) {
      this.setState({searchResults: []});
      return
    }
    if (query.length > 1){
      BooksAPI.search(query.trim(), 20).then(searchResults => {
            if (searchResults.error) {
                searchResults = [];
                alert('The book you are searching is not included in this library!');
            }
            searchResults = searchResults.map((book) => {
                const category = this.props.books.find(y => y.id === book.id)
                if (category) {
                    book.shelf = category.shelf;
                }
                else {
                  book.shelf = 'none'
                }
                return book
            })
            this.setState({searchResults});
        })
      }
  }

   render() {
     return (
       <div className="search-books">
         <div className="search-books-bar">
           <Link className="close-search" to="/">
              Close
            </Link>
           <div className="search-books-input-wrapper">
             <input
                type="text"
                placeholder="Search by title or author" value={this.state.searchQuery}
                onChange={(event) =>
                  this.updateSearch(event.target.value)}/>
           </div>
         </div>
         <div className="search-books-results">
           <ol className="books-grid">
             {this.state.searchResults.map((book) => (
               <li key={book.id}>
                 <Book
                    book={book}
                    updateShelf={this.props.updateShelf}
                  />
               </li>
              ))}
           </ol>
         </div>
       </div>
     )
   }
 }

export default SearchBooks