import React, { Component } from "react"
import ShoppingCartProduct from "./ShoppingCartProduct"
import { isAuthenticated } from "../helpers/simpleAuth"

class Order extends Component {


    state = {
        orderProducts: []
    }

    componentDidMount() {
        this.getOrderProducts()
    }

    getOrderProducts = () => {
        if (isAuthenticated()) {
            fetch('http://localhost:8000/', {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Authorization": `Token ${sessionStorage.getItem("bangazon_token")}`
                }
            })
            .then(response => response.json())
            .then(items => this.setState({orderProducts: items}))
        }
    }

    render() {
        return (
            <>
                <article>
                    {
                        this.state.orderProducts.map(item =>
                            <ShoppingCartProduct
                                key={item.id}
                                item={item}
                            />)
                    }
                </article>
            </>
        )
    }

}

export default Order