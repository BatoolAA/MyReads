import React, {Component} from 'react'
import Book from '../../Book'

class WantToRead extends Component{
    render(){
        return(
            <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                        this.props.book
                        .filter(book => book.shelf === "wantToRead")
                        .map(book => {
                            return(
                                <li key={book.id}>
                                    <Book 
                                        book={book}
                                        moveToShelf={this.props.moveToShelf}
                                        currentShelf="wantToRead"
                                    />
                                </li>
                            )
                        }) 
                    }
                    </ol>
                    { 
                        (this.props.book
                        .filter(book => book.shelf === "wantToRead").length) == 0 
                             &&  <p>Empty Shelf</p>
                    }
                  </div>
                </div>
        );
    }
}
export default WantToRead;