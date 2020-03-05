import React, { Component } from 'react';
import {  withRouter } from 'react-router-dom'
import './NavBar.css'
import {isAuthenticated, logout} from "../helpers/simpleAuth"
import ApiManager from '../utility/ApiManager'

class NavBar extends Component {
    state ={
        searchItem: "",
        productTypeId: 0,
        productTypes: []
    }

    componentDidMount() {
        ApiManager.get('producttypes')
        .then(productTypeList => {
            this.setState({
                productTypes: productTypeList
            })
        })
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

    productTypeURL = () => {
        this.props.history.push(`/producttype/${this.state.productTypeId}`)
    }

    handleProductTypeSelect = evt => {
        let stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange, this.productTypeURL)
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
                    <p className="f5 pointer dim b dib mh3 pt1" onClick={() => this.props.history.push('/')} title="Home">Bangazon
                    </p>
                    <div className="dib ml5 mr1 search-container">
                            <label className="mr1 ">Search:</label>
                            <input 
                                className="search-input input-reset ba b--black-20 mr1"
                                onChange={this.handleInputChange} 
                                id="searchItem" 
                                type="text">
                            </input>
                        </div>
                    <div className="search-options">
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
                        <select id="productTypeId" onChange={this.handleProductTypeSelect}>
                            <option value="all">select product type</option>
                            {this.state.productTypes.map(productType => {
                                return <option key={productType.id} value={productType.id}>{productType.name}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div className='pt1'>
                    {isAuthenticated() 
                        ? <p className="pointer dim dib mr4" onClick={this.pushSellProductForm}>Sell Product</p>
                        : null}
                    <p 
                        className="pointer dim dib mr4" 
                        onClick={() => this.props.changeDisplay("Shopping Cart")}>
                        Shopping Cart
                    </p>
                    <p 
                        className="pointer dim dib mr4"
                        onClick={() => this.props.changeDisplay("My Products")}>
                        My Products
                    </p>
                    <p 
                        className="pointer dim dib mr4"
                        onClick={() => this.props.changeDisplay("My Account")}>
                        My Account
                    </p>
                    {isAuthenticated() 
                        ? <p className="pointer dim dib mr4" onClick={this.handleLogout}>Logout</p>
                        : <a className="pointer dim dib mr4" href="/login">Login</a>}
                </div>
            </nav>
        )
    }
}

export default withRouter(NavBar);