import logo from '../../logo.svg';
import './App.css';
import React, {Component} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "../Header/header"
import Authors from "../Authors/authors"
import Categories from "../Categories/categories"
import Books from "../Books/BookList/books"
import BookAdd from "../Books/BookAdd/bookAdd"
import BookEdit from "../Books/BookEdit/bookEdit"
import LibraryService from "../../repository/libraryRepository";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            authors: [],
            categories: [],
            books: [],
            selectedBook: {}
        }
    }

    render() {
        return (
            <BrowserRouter>
                <Header/>
                <main>
                    <div className={"container"}>
                        <Routes>
                            <Route path="/authors"
                                   element={<Authors authors={this.state.authors}/>}/>
                            <Route path="/categories"
                                   element={<Categories categories={this.state.categories}/>}/>
                            {["/", "/books"].map((path) => {
                                return (<Route path={path}
                                               element={<Books books={this.state.books}
                                                               onDelete={this.deleteBook}
                                                               onEdit={this.fetchBook}
                                                               onGet={this.getBook}
                                                               onReturn={this.returnBook}/>}/>)
                            })}
                            <Route path="/books/add"
                                   element={<BookAdd authors={this.state.authors}
                                                     categories={this.state.categories}
                                                     onAddBook={this.addBook}/>}/>
                            <Route path="/books/edit/:id"
                                   element={<BookEdit authors={this.state.authors}
                                                      categories={this.state.categories}
                                                      onEditBook={this.editBook}
                                                      book={this.state.selectedBook}/>}/>
                        </Routes>
                    </div>
                </main>
            </BrowserRouter>
        )
    }

    loadAuthors = () => {
        LibraryService.fetchAuthors()
            .then((data) => {
                this.setState({authors: data.data})
            });
    }

    loadCategories = () => {
        LibraryService.fetchCategories()
            .then((data) => {
                this.setState({categories: data.data})
            });
    }

    loadBooks = () => {
        LibraryService.fetchBooks()
            .then((data) => {
                this.setState({books: data.data})
            });
    }

    deleteBook = (id) => {
        LibraryService.deleteBook(id)
            .then(() => {
                this.loadBooks();
            });
    }

    addBook = (name, category, author, availableCopies) => {
        LibraryService.addBook(name, category, author, availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }

    editBook = (id, name, category, author, availableCopies) => {
        LibraryService.editBook(id, name, category, author, availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }

    fetchBook = (id) => {
        LibraryService.fetchBook(id)
            .then((data) => {
                this.setState({selectedBook: data.data})
            });
    }

    getBook = (id) => {
        LibraryService.getBook(id)
            .then(() => {
                this.loadBooks();
            });
    }

    returnBook = (id) => {
        LibraryService.returnBook(id)
            .then(() => {
                this.loadBooks();
            });
    }

    componentDidMount() {
        this.loadAuthors();
        this.loadCategories();
        this.loadBooks();
    }
}

export default App;
