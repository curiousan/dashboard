import React, {Component} from 'react'
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-light bg-light" >
                <a href="/" className="navbar-brand">Home</a>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
                    <li className="nav-item"><a className="nav-link" href="#">Hello, User</a></li>
                </ul>
                </nav>
            </header>
            
        )
    }
}

export default Header