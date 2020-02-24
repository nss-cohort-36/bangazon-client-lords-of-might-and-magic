import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
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
            <nav className="pa3 pa4-ns avenir">
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
                <div className="f6 f5-ns">
                    {isAuthenticated() 
                        ? <a className="link dim gray dib mr4" href="/sell-product" title="Sell Product">Sell Product</a>
                        : null}
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
                    {isAuthenticated() 
                        ? <a onClick={this.handleLogout}>Logout</a>
                        : <a className="link dim gray dib mr4" href="/login">Login</a>}
                </div>
            </nav>
        )
    }
}

export default withRouter(NavBar);