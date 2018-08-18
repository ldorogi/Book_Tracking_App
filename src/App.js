import React from 'react'
import './App.css'
import ListBooks from "./ListBooks"
import SearchBooks from "./SearchBooks"
import {Route, Link} from 'react-router-dom'


class BooksApp extends React.Component {
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
