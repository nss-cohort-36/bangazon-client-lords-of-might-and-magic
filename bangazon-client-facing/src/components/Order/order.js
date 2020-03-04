import React, { Component } from "react"
import OrderProduct from "./OrderProduct"
import { isAuthenticated } from "../helpers/simpleAuth"
import ApiManager from "../utility/ApiManager"

class Order extends Component {


    state = {
        orderProducts: [],
        emptyCart:true,
        orderId: ""
    }

    componentDidMount() {
        this.getShoppingCartInfo()
        
    }

    loggedInUserId = () => JSON.parse(localStorage.getItem("credentials")).userId

    deleteProductFromCart = (idArray) => {
        Promise.all(
        idArray.forEach(id => {
            ApiManager.delete("orderproducts", id)
        }))
        .then(this.getShoppingCartInfo)
    }

    getShoppingCartInfo = () => {
        if (isAuthenticated())
            ApiManager.get("orderproducts")
            .then(items => {
                console.log(items, items.length)
                if (items.length > 0) {
                    this.setState({emptyCart: false })
                }
                this.setState({orderProducts: items})})
                .then(() => {
                    ApiManager.get('orders')
                    .then((order) => this.setState({orderId: order.id}))
                })
        
    }

    cancelOrder = (orderId) => {
        ApiManager.delete("orders", orderId)
        .then(() => {
            this.setState({emptyCart: true})
            this.getShoppingCartInfo()
        })
    }

    render() {
        return (
            <>
                <article>
                    
                        <div>{ this.state.orderProducts.length === 0 ? "Your cart is empty, add something to see it here!" : null }</div>
                        {
                            this.state.orderProducts.map(item =>
                            <OrderProduct
                                key={item.id}
                                item={item}
                                {...this.props}
                            />)
                        
                    }
                </article>
                <button hidden={this.state.emptyCart} onClick={() => this.cancelOrder
                (this.state.orderId)} >Cancel Order</button>
                <button hidden={this.state.emptyCart} onClick = {() => this.props.changeDisplay("Complete Order")}>Complete Order</button>
            </>
        )
    }

}

export default Order