import React, {Component} from 'react'
import Book from '../../Book'

class CurrentlyReading extends Component{
    render(){
        return(
            <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                        this.props.book
                          .filter(book => book.shelf === "currentlyReading")
                          .map(book => (
                              <li key={book.id}>
                                  <Book 
                                    book={book}
                                    moveToShelf={this.props.moveToShelf}
                                    currentShelf="currentlyReading"
                                   />
                              </li>
                          ))       
                    }
                    </ol>
                    { 
                        (this.props.book
                        .filter(book => book.shelf === "currentlyReading").length) == 0 
                             &&  <p>Empty Shelf</p>
                    }
                  </div>
                </div>
        );
    }
}
export default CurrentlyReading;