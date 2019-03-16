import React, {Component} from 'react'
import * as BooksAPI from '../../BooksAPI'
import Book from '../Book'
import {Link} from 'react-router-dom'

class SearchPage extends Component{
    state = {
        query: '',
        searchedBooks: [],
    }
    updateQuery = (query) => {
        this.setState({
            query    // query: query
        })
        this.updateSearchedBooks(query)
    }
    updateSearchedBooks = (query) => {
        if(query){    //if we remove query then it wont be array anymore, and map only apply on array
            BooksAPI.search(query).then(searchedBooks => {
                if(searchedBooks.error){    //query which is not in the search_terms.md
                    this.setState({searchedBooks: [],})
                }
                else{
                    this.setState({searchedBooks,})
                    
                }
            })
        }
        else{
            this.setState({searchedBooks: [],})
        }
        
    }
    render(){
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link 
                        to='/'
                        className="close-search" >
                        Close</Link>

                <div className="search-books-input-wrapper">
                    <input 
                        type="text" 
                        placeholder="Search by title or author"
                        value={this.state.query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
                </div>
                </div>
                <div className="search-books-results">
                <b>Total books: {this.state.searchedBooks.length}</b>
                    <ol className="books-grid">
                        {   
                            this.state.searchedBooks.map(searchedBook => {
                                    let shelf = "none"

                                    this.props.book.map(book => (
                                        book.id === searchedBook.id ?
                                        shelf = book.shelf :
                                        ''
                                    ))

                                    return(
                                        <li key={searchedBook.id}>
                                            <Book 
                                                book={searchedBook}
                                                moveToShelf={this.props.moveToShelf}
                                                currentShelf={shelf}
                                            />
                                        </li>
                                    )
                            }) 
                        }
                    </ol> 
                    {
                        this.state.searchedBooks == 0 && 
                        <p>No books found!</p>
                    }
                </div>
            </div>
        );
    }
}

export default SearchPage;