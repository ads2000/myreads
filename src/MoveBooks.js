import React, { Component } from 'react';
import BooksData from './BooksData'

class MoveBooks extends Component {

  render() {
    return (

               <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.bookStatus}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                     {this.props.contacts.map((contact) => ( 
                        <li key={contact.id}>
                          <div className="book">
                            <div className="book-top">
                              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${contact.cover})` }}></div>
                              <div className="book-shelf-changer">
                                <select>
                                  <option value="none" disabled>Move to...</option>
                                  <option value="currentlyReading">Currently Reading</option>
                                  <option value="wantToRead">Want to Read</option>
                                  <option value="read">Read</option>
                                  <option value="none">None</option>
                                </select>
                              </div>
                            </div>
                            <div className="book-title">{contact.title}</div>
                            <div className="book-authors">{contact.author}</div>
                          </div>
                        </li>
                     ))}
                    </ol>
                  </div>
  
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
    )
  }

 }

 export default MoveBooks