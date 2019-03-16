import React, {Component} from 'react'
import Book from '../../Book'

class Read extends Component{
    render(){
        return(
            <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                        this.props.book
                        .filter(book => book.shelf === "read")
                        .map(book => (
                            <li key={book.id}>
                                <Book 
                                    book={book}
                                    moveToShelf={this.props.moveToShelf}
                                    currentShelf="read"
                                />
                            </li>
                        )) 
                    }
                    </ol>
                    { 
                        (this.props.book
                        .filter(book => book.shelf === "read").length) == 0 
                             &&  <p>Empty Shelf</p>
                    }
                  </div>
            </div>
        );
    }
}
export default Read;