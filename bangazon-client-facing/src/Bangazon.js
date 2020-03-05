import React, { Component } from 'react';
import './Bangazon.css';
import NavBar from './components/nav/NavBar';
import ApplicationViews from './components/ApplicationViews';
import SidePanel from './components/sidePanel/SidePanel.js';
import ApiManager from './components/utility/ApiManager'
import { isAuthenticated } from "../src/components/helpers/simpleAuth"

class Bangazon extends Component {
  state = {
    sideDisplay: "Shopping Cart",
    orderProducts: [],
    emptyCart: true,
    orderId: 0,
    productTypes: [],
    displayProductTypeFilter: false
  }

  changeDisplay = newDisplay => this.setState({ sideDisplay: newDisplay })

  addToOrder = (productId) => {
    // refactor this so that new order gets made in django list method when you dont have an open order yet
    ApiManager.get('orders')
      .then((order) => {
        let newOrderProduct = {
          order_id: order.id,
          product_id: productId
        }
        return ApiManager.post("orderproducts", newOrderProduct)
          .then(() => this.getShoppingCartInfo())
      }
      )

  }

  componentDidMount() {
    this.getShoppingCartInfo()

  }

  getShoppingCartInfo = () => {
    if (isAuthenticated())
      ApiManager.get("orderproducts")
        .then(items => {
          if (items.length > 0) {
            this.setState({ emptyCart: false })
          } else {
            this.setState({ emptyCart: true })
          }
          this.setState({ orderProducts: items })
        })
        .then(() => {
          ApiManager.get('orders')
            .then((order) => this.setState({ orderId: order.id }))
        })

  }

  cancelOrder = (orderId) => {
    ApiManager.delete("orders", orderId)
      .then(() => {
        this.setState({ emptyCart: true })
        this.getShoppingCartInfo()
      })
  }

  getProductTypesForNav = () => {
    ApiManager.get('producttypes')
    .then(productTypes => {
      console.log('product types in bangazon: ', productTypes)
      this.setState({
        productTypes: productTypes,
        displayProductTypeFilter: true
      })
    })
  }

  hideProductTypeFilter = () => {
    this.setState({
      displayProductTypeFilter: false
    })
  }

  render() {
    return (
      <>
        <NavBar hideProductTypeFilter={this.hideProductTypeFilter} productTypes={this.state.productTypes} displayProductTypeFilter={this.state.displayProductTypeFilter} changeDisplay={this.changeDisplay} />
        <section className="flex avenir">
          <article className="w-70 pv2 ph4">
            <ApplicationViews getProductTypesForNav={this.getProductTypesForNav} addToOrder={this.addToOrder} />
          </article>
          <article className="w-30 bg-light-gray">
            <SidePanel
              changeDisplay={this.changeDisplay}
              displayTitle={this.state.sideDisplay}
              orderProducts={this.state.orderProducts}
              emptyCart={this.state.emptyCart}
              cancelOrder={this.cancelOrder}
              orderId={this.state.orderId}
              getShoppingCartInfo={this.getShoppingCartInfo}
            />
          </article>
        </section>
      </>
    )
  }

}

export default Bangazon;
