import React, {Component} from 'react';

class Book extends Component {
  changeBookShelf = (event) => {
   this.props.updateShelf(this.props.book, event.target.value)
 }

  render() {
    const {book} = this.props
    const style = {
      width: 128,
      height: 192,
      backgroundImage: this.props.book.imageLinks ?
        `url(${this.props.book.imageLinks.thumbnail})` : ''
    }

    return (<li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={style}></div>
          <div className="book-shelf-changer">
            <select onChange={this.changeBookShelf} value={book.shelf}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading
              </option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Done</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">
          {this.props.book.authors ? this.props.book.authors.toString() : ' '}</div>
      </div>
    </li>)
  }  
}

export default Book
