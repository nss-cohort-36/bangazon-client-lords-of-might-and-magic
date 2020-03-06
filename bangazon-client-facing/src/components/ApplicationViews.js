import { Route, Redirect } from "react-router-dom"
import React, { Component } from "react"
import Register from "./auth/Register"
import Login from "./auth/Login"
import ProductList from "./product/ProductList"
import Order from "./Order/order"
import PaymentTypeForm from "./paymentType/PaymentTypeForm"
import SellProductForm from "./product/SellProductForm"
import { isAuthenticated } from "./helpers/simpleAuth"
import ProductDetail from "./product/ProductDetail"
import ApiManager from "./utility/ApiManager"
import CustomerEditForm from "./customer/CustomerEditForm"
import MyProducts from "./myProduct/MyProducts"

class ApplicationViews extends Component {



  render() {
    return (
      <React.Fragment>
        <Route
          exact path="/" render={props => {
            return <ProductList {...props} addToOrder={this.props.addToOrder}/>
          }}
        />
        <Route
          exact path="/name/:searchTerm" render={props => {
            return <ProductList {...props} isNameSearch={true} addToOrder={this.props.addToOrder}/>
          }}
        />
        <Route
          exact path="/product/:productId(\d+)" render={props => {
            return <ProductDetail {...props} addToOrder={this.props.addToOrder}/>
          }}
        />
        <Route
          exact path="/city/:searchTerm" render={props => {
            return <ProductList {...props} isCitySearch={true} addToOrder={this.props.addToOrder}/>
          }}
          />
        <Route
          exact path="/shoppingcart" render={props => {
            return <Order {...props} />
          }}
        />
        <Route 
          exact path="/products/my_products" render={props => {
            return <MyProducts {...props} />
          }}
        />
        <Route
          exact path="/add/paymenttype" render={props => {
            return <PaymentTypeForm {...props} />
          }}
        />
         <Route
          exact path="/customers/:customerId(\d+)/edit" render={props => {
            return <CustomerEditForm {...props} />
          }}
        />
        <Route
          path="/register" render={props => {
            return <Register {...props} />
          }}
        />
        <Route
          path="/login" render={props => {
            return <Login {...props} />
          }}
        />
        <Route exact path="/sell-product" render={(props) => {
          if(isAuthenticated()) {
            return <SellProductForm {...props} />
          } else {
            return <Redirect to="/" />
          }
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews
