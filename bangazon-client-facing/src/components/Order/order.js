import React, { Component } from "react"
import OrderProduct from "./OrderProduct"
import { isAuthenticated } from "../helpers/simpleAuth"
import ApiManager from "../utility/ApiManager"

class Order extends Component {


    state = {
        orderProducts: this.props.orderProducts,
        
        
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

    

    render() {
        return (
            <>
                <article>
                    
                        <div>{ this.props.orderProducts.length === 0 ? "Your cart is empty, add something to see it here!" : null }</div>
                        {
                            this.props.orderProducts.map(item =>
                            <OrderProduct
                                key={item.id}
                                item={item}
                                {...this.props}
                            />)
                        
                    }
                </article>
                <button hidden={this.props.emptyCart} onClick={() => this.props.cancelOrder
                (this.props.orderId)} >Cancel Order</button>
                <button hidden={this.props.emptyCart} onClick = {() => this.props.changeDisplay("Complete Order")}>Complete Order</button>
            </>
        )
    }

}

export default Order