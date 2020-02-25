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

    pushSellProductForm = () => {
        this.props.history.push('/sell-product')
    }
    
    render() {
        return (
            <nav className="pa3 pa4-ns avenir f6 f5-ns">
                <div className="flex">
                    <p className="f5 pointer dim b dib mh3 pt1" href="/" title="Home">Bangazon
                    </p>
                    <div>
                        <p className="dib ml5 mr1">
                            <label className="mr1 ">Search:</label>
                            <input 
                                className="search-input input-reset ba b--black-20 mr1"
                                onChange={this.handleInputChange} 
                                id="searchItem" 
                                type="text">
                            </input>
                        </p>
                        <button 
                            className='dib f6 link br-pill ba ph2 pv1 mb2 black bg-animate hover-bg-light-blue i' 
                            id="nameSearch" 
                            onClick={this.handleNameSearch}>
                            Search by Product Name
                        </button>
                        <button 
                            className='dib f6 link br-pill ba ph2 pv1 mb2 black bg-animate hover-bg-light-blue mh1 i'
                            id="citySearch" 
                            onClick={this.handleCitySearch}>
                            Search by City
                        </button>
                    </div>
                </div>
                <div className='pt1'>
                    {isAuthenticated() 
                        ? <p className="pointer dim dib mr4" onClick={this.pushSellProductForm} title="Sell Product">Sell Product</p>
                        : null}
                    <p 
                        className="pointer dim dib mr4" 
                        onClick={() => this.props.changeDisplay("Shopping Cart")}>
                        Shopping Cart
                    </p>
                    <p 
                        className="pointer dim dib mr4"
                        onClick={() => this.props.changeDisplay("Settings")}>
                        My Account
                    </p>
                    {isAuthenticated() 
                        ? <a className="pointer dim dib mr4" onClick={this.handleLogout}>Logout</a>
                        : <a className="pointer dim dib mr4" href="/login">Login</a>}
                </div>
            </nav>
        )
    }
}

export default withRouter(NavBar);