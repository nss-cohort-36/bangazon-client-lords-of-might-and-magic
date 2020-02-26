import React, { Component } from "react"
import OrderProduct from "./OrderProduct"
import { isAuthenticated } from "../helpers/simpleAuth"

class Order extends Component {


    state = {
        orderProducts: []
    }

    componentDidMount() {
        this.getProducts()
    }

    loggedInUserId = () => JSON.parse(localStorage.getItem("credentials")).userId

    

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

    cancelOrder = () => {
        
    }

    render() {
        return (
            <>
                <article className="pa3 pa5-ns">
                    {
                        this.state.orderProducts.map(item =>
                            <OrderProduct
                                key={item.id}
                                item={item}
                                {...this.props}
                            />)
                    }
                </article>
                <button className='dib f6 link br-pill ba ph2 pv1 mb2 black bg-animate hover-bg-light-blue i'>Cancel Order</button>
                <button onClick = {() => this.props.changeDisplay("Complete Order")} className='dib f6 link br-pill ba ph2 pv1 mb2 black bg-animate hover-bg-light-blue i'>Complete Order</button>
            </>
        )
    }

}

export default Order