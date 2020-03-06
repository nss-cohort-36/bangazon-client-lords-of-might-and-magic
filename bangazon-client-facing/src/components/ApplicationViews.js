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
import MyProductList from './product/MyProductList'
import ApiManager from "./utility/ApiManager"
import CustomerEditForm from "./customer/CustomerEditForm"
import MyProducts from "./myProduct/MyProducts"

class ApplicationViews extends Component {

  addToOrder = (productId) => {
    // refactor this so that new order gets made in django list method when you dont have an open order yet
    ApiManager.get('orders')
    .then((order) => {
      let newOrderProduct = {
        order_id : '',
        product_id : productId
      }
      if (order.length === 0 ) {
        ApiManager.post("orders", {})
        .then((newOrder) => {
          newOrderProduct.order_id = newOrder.id
          return ApiManager.post("orderproducts", newOrderProduct)
        })
      }
    })

  }

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
            return <ProductList {...props} isCitySearch={true} addToOrder={this.addToOrder} />
          }}
          />
        {/* <Route 
          exact path="/products/my_products" render={props => {
            return <MyProducts {...props} />
        /> */}
        <Route
          exact path="/producttype/:searchTerm" render={props => {
            return <ProductList {...props} isProductTypeFilter={true} addToOrder={this.props.addToOrder}/>
          }}
        />
        <Route
          exact path="/shoppingcart" render={props => {
            return <Order {...props} deleteProductFromCart={this.props.deleteProductFromCart} />
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
            return <Register getProductTypesForNav={this.props.getProductTypesForNav} {...props} />
          }}
        />
        <Route
          path="/login" render={props => {
            return <Login getProductTypesForNav={this.props.getProductTypesForNav} {...props} />
          }}
        />
        <Route exact path="/sell-product" render={(props) => {
          if (isAuthenticated()) {
            return <SellProductForm {...props} />
          } else {
            return <Redirect to="/" />
          }
        }} />
        <Route exact path="/myproducts" render={(props) => {
          if(isAuthenticated()) {
            return <MyProductList {...props} />
          } else {
            return <Redirect to="/" />
          }
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews
