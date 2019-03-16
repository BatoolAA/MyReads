import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from './components/MainPage/MainPage'
import SearchPage from './components/SearchPage/SearchPage'
import {Route} from 'react-router-dom'
import {Book} from './Book'

class BooksApp extends React.Component {
  state = {
    books: [],
  }

componentDidMount(){
  this.fetchBooks();
}

fetchBooks = () => {
  BooksAPI.getAll().then((books) => {
    this.setState({books})
  })
}

moveToShelf = ( book, shelf ) => {
  BooksAPI.update( book, shelf );

  this.fetchBooks();
}
  render() {
    console.log(this.state.books)
    return (
          <div className="app">
            <Route exact path='/' render={() => (
                <MainPage 
                book={this.state.books}
                moveToShelf={this.moveToShelf}
                />
              )}
              />

            <Route path='/search' render={() => (
              <SearchPage
                moveToShelf={this.moveToShelf}
                book={this.state.books}
              />
              )}
              />
          </div>
    )
  }
}

export default BooksApp
