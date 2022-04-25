import React from "react";
import {Link} from "react-router-dom";

const header = (props) => {
    return(
        <header>
            <nav className="navbar navbar-expand-md navbar-light navbar-fixed bg-secondary bg-gradient">
                <a className="navbar-brand ms-2" href="/books">E-Library</a>
                <div className="container-fluid" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to={"/books"}>Books</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to={"/categories"}>Categories</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className={"nav-link"} to={"/authors"}>Authors</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <Link className="btn btn-outline-info my-2 my-sm-0" to={"/login"}>Login</Link>
                    </form>
                </div>
            </nav>
        </header>


    );
}

export default header;