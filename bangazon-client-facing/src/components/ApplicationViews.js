import { Route, Redirect } from "react-router-dom"
import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import Register from "./auth/Register"
import Login from "./auth/Login"
import ProductList from "./product/ProductList"
import PaymentTypeForm from "./paymentType/PaymentTypeForm"
import SellProductForm from "./product/SellProductForm"
import { isAuthenticated } from "./helpers/simpleAuth"

class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route
          exact path="/" render={props => {
            return <ProductList {...props} />
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
