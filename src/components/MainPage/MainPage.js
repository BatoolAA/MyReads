import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import CurrentlyReading from './Shelves/CurrentlyReading';
import WantToRead from './Shelves/WantToRead';
import Read from './Shelves//Read'

class MainPage extends Component{
    render(){
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <CurrentlyReading 
                  book={this.props.book}
                  moveToShelf={this.props.moveToShelf}
                />
                <WantToRead 
                  book={this.props.book}
                  moveToShelf={this.props.moveToShelf}
                />
                <Read 
                  book={this.props.book}
                  moveToShelf={this.props.moveToShelf}
                />
              </div>
            </div>
            
              <div className="open-search">
                <Link 
                  to='/search'>
                    <button>Add a button</button>
                </Link>
              </div>
           
            
          </div>
        );
    }
}

export default MainPage;