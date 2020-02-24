import React, { Component } from "react"
import OrderProduct from "./OrderProduct"
import { isAuthenticated } from "../helpers/simpleAuth"
import ApiManager from "../utility/ApiManager"

class Order extends Component {


    state = {
        orderProducts: []
    }

    componentDidMount() {
        this.getProducts()
    }

    loggedInUserId = () => JSON.parse(localStorage.getItem("credentials")).userId

    

    // getOrder = () => {
    //     if (isAuthenticated())
    //         fetch('http://localhost:5002/orderproduct?orderId=1&_expand=product', {
    //             "method": "GET",
    //             "headers": {
    //                 "Accept": "application/json"
    //               }
    //         })
    //         .then(response => response.json())
    //         .then(items => this.setState({orderProducts: items}))
        
    // }

    getProducts = () => {
        if (isAuthenticated())
            fetch('http://localhost:8000/products', {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Authorization": `Token ${sessionStorage.getItem("bangazon_token")}`
                  }
            })
            .then(response => response.json())
            .then(items => this.setState({orderProducts: items}))
        
    }

    // getProducts = () => {
    //     ApiManager.fetchProducts()
    //     .then(products => this.setState({orderProducts: products}))
    // }   

    

    render() {
        return (
            <>
                <article>
                    {
                        this.state.orderProducts.map(item =>
                            <OrderProduct
                                key={item.id}
                                item={item}
                                {...this.props}
                            />)
                    }
                </article>
                <button>Cancel Order</button>
            </>
        )
    }

}

export default Order