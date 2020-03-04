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

class ApplicationViews extends Component {

  addToOrder = (productId) => {
    // refactor this so that new order gets made in django list method when you dont have an open order yet
    ApiManager.get('orders')
    .then((order) => {
      let newOrderProduct = {
        order_id : order.id,
        product_id : productId
      }
      return ApiManager.post("orderproducts", newOrderProduct)
      }
    )
  
  }

  render() {
    return (
      <React.Fragment>
        <Route
          exact path="/" render={props => {
            return <ProductList {...props} addToOrder={this.addToOrder}/>
          }}
        />
        <Route
          exact path="/name/:searchTerm" render={props => {
            return <ProductList {...props} isNameSearch={true} addToOrder={this.addToOrder}/>
          }}
        />
        <Route
          exact path="/product/:productId(\d+)" render={props => {
            return <ProductDetail {...props} addToOrder={this.addToOrder}/>
          }}
        />
        <Route
          exact path="/city/:searchTerm" render={props => {
            return <ProductList {...props} isCitySearch={true} addToOrder={this.addToOrder}/>
          }}
          />
          <Route
            exact path="/shoppingcart" render={props => {
            return <Order {...props} />
          }}
        />
         <Route
          exact path="/add/paymenttype" render={props => {
            return <PaymentTypeForm {...props} />
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
