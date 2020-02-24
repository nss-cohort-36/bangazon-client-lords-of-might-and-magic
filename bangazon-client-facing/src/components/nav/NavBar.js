import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import './NavBar.css'

class NavBar extends Component {

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
                    <a className="link dim gray    f6 f5-ns dib mr3" href="#" title="About"><Link to='/shoppingcart'>Shopping Cart</Link></a>
                    <a className="link dim gray    f6 f5-ns dib mr3" href="#" title="Store">Account</a>
                </div>
            </nav>
        )
    }
}

export default withRouter(NavBar);