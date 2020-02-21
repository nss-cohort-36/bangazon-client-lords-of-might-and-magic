import { Route } from "react-router-dom"
import React, {Component } from "react"
import { withRouter } from "react-router-dom"
// import Register from "./auth/Register"
// import Login from "./auth/Login"
import ProductList from "./product/ProductList"

class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route
          exact path="/" render={props => {
            return <ProductList {...props} />
          }}
        />
        {/* <Route
          path="/register" render={props => {
            return <Register {...props} />
          }}
        />
        <Route
          path="/login" render={props => {
            return <Login {...props} />
          }}
        /> */}
      </React.Fragment>
    )
  }
}

export default ApplicationViews
