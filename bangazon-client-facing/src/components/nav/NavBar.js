import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './NavBar.css'
import {isAuthenticated, logout} from "../helpers/simpleAuth"

class NavBar extends Component {

    handleLogout = () => {
        logout();
        this.props.history.push('/')
    }
    
    render() {
        return (
            <nav className="pa3 pa4-ns">
                <div className="nav-left-container">
                    <a className="link dim black b f6 f5-ns dib mr3 nav-home" href="#" title="Home">Bangazon</a>
                    <div className="search-container">
                        <label className="search-label">Search</label>
                        <input className="search-input" type="text"></input>
                    </div>
                </div>
                <div>
                    <a className="link dim gray    f6 f5-ns dib mr3" href="#" title="Home">Sell Product</a>
                    <a className="link dim gray    f6 f5-ns dib mr3" href="#" title="About">Shopping Cart</a>
                    <a className="link dim gray    f6 f5-ns dib mr3" href="#" title="Store">Account</a>
                    {isAuthenticated() ? <a onClick={this.handleLogout}>Logout</a>
                    : <a className="link dim gray    f6 f5-ns dib mr3" href="/login">Login</a>}
                </div>
            </nav>
        )
    }
}

export default withRouter(NavBar);