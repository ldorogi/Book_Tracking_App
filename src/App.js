import React from 'react'
//import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from "./ListBooks"
import SearchBooks from "./SearchBooks"
import {Route, Link} from 'react-router-dom'


class BooksApp extends React.Component {
  /*
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
*/
  render() {
    //const {query} = this.state
    return (
      <div className="app">
        <Route exact path="/search" render={() => (
          <SearchBooks/>
        )}/>  
        <Route exact path="/" render={() => (
          <ListBooks/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
