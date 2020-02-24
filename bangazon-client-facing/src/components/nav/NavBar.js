import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './NavBar.css'
import {isAuthenticated, logout} from "../helpers/simpleAuth"

class NavBar extends Component {
    state ={
        searchItem: ""
    }

    handleInputChange = (evt) => {
        let stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
      }

    handleCitySearch = () => {
        this.props.history.push(`/city/${this.state.searchItem}`)
    }

    handleNameSearch = () => {
        this.props.history.push(`/name/${this.state.searchItem}`)
    }

    handleLogout = () => {
        logout();
        this.props.history.push('/')
    }
    
    render() {
        return (
            <nav className="pa3 pa4-ns">
                <div className="nav-left-container">
                    <a className="link dim black b f6 f5-ns dib mr3 nav-home" href="#" title="Home">Bangazon</a>
                    <fieldset>
                    <div className="search-container">
                        <label className="search-label">Search</label>
                        <input onChange={this.handleInputChange} id="searchItem" className="search-input" type="text"></input>
                    </div>
                    <button id="nameSearch" onClick={this.handleNameSearch}>Search by Product Name</button>
                    <button id="citySearch" onClick={this.handleCitySearch}>Search by City</button>
                    </fieldset>
                </div>
                <div>
                    <a className="link dim gray    f6 f5-ns dib mr3" href="/sell-product" title="Home">Sell Product</a>
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