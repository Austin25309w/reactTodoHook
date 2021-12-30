import React, {Component} from 'react';
import Books from './Books'

class Book extends Component {
    constructor(props){
        super(props);
        this.state = {
            bookTitle: '',
            books: []
        }
    }

    updateBookTitle(bookTitle){
        this.setState({ bookTitle: bookTitle.target.value})
    }

    addBook(){
        //if notthing in the field, return.
        // assign book array and push to title array
        // set the state to empty string
        if(this.state.bookTitle === '') return 
        let bookArr = this.state.books;
        bookArr.push(this.state.bookTitle);
        this.setState({bookTitle:''})
        this.textInput.focus()
    }

    handleKeyPress(e){
        // handle enter press event
        if(e.key === 'Enter'){
            let bookArr = this.state.books;
            bookArr.push(this.state.bookTitle)
            this.setState({bookTitle:''})
        }
    }

    deleteBook(index){
        const books = this.state.books;
        const newBooks = [
            ...books.slice(0,index),
            ...books.slice(index +1)
        ]
        this.setState({
            books: newBooks
        })
    }

    editBook(index, value){
        let books = this.state.books;
        const newBooks = books.map((book, i) => {
            if(i !== index){
                return book
            }
            return value;
        })
        this.setState({books: newBooks})
    }


    render(){
        let book = this.state.books.map((val,key) => {
            return <Books
            key = {key}
            text = {val}
            deleteMethod = { () => this.deleteBook(key,)}
            editMethod = { this.editBook.bind(this, key)}
            />
        })
        return (
        <div className ="todoListMain">
            <div>BOOK</div>
            <input 
                ref = { (input => {this.textInput = input})}
                className = 'header'
                value = {this.state.bookTitle}
                onChange = { bookTitle => this.updateBookTitle(bookTitle)}
                onKeyPress = { this.handleKeyPress.bind(this)}
            
            />
            <button onClick = {this.addBook.bind(this)}>Add</button>
            {book}
        </div>
        )}
}

export default Book;