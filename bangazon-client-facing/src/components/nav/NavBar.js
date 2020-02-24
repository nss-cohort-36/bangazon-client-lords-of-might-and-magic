import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './NavBar.css'

class NavBar extends Component {

    render() {
        return (
            <nav className="pa3 pa4-ns avenir">
                <div className="nav-left-container">
                    <a className="link dim black b f6 f5-ns dib mr3 nav-home" href="#" title="Home">Bangazon</a>
                    <div className="search-container">
                        <label className="search-label">Search</label>
                        <input className="search-input" type="text"></input>
                    </div>
                </div>
                <div className="f6 f5-ns">
                    <a className="link dim black dib mr4" href="#" title="Home">Sell Product</a>
                    <a 
                        className="link dim black dib mr4" 
                        href="#" 
                        title="Shopping Cart"
                        onClick={() => this.props.changeDisplay("Shopping Cart")}>
                        Shopping Cart
                    </a>
                    <a 
                        className="link dim black dib mr4"
                        href='#'
                        title='My Account'
                        onClick={() => this.props.changeDisplay("Settings")}>
                        My Account
                    </a>
                </div>
            </nav>
        )
    }
}

export default withRouter(NavBar);