import React, { Component } from "react"
import ApiManager from "../utility/ApiManager"
import OrderCard from './OrderCard'

class MyOrders extends Component {
    state = {
        orders: []
    }

    componentDidMount() {
        this.getMyOrders()


    }

    
    

    getMyOrders = () => {
        
        fetch(`http://localhost:8000/orders/10`, {
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${sessionStorage.getItem("bangazon_token")}`
            }
        })
            .then(response => response.json())
            .then((orders) => {
                this.setState({ orders: orders })
            })
    }



    render() {
        return (
            <>
                <article className="explorerList">
                    <h3 className='f4 fw6 ttu pl5 pt3'> My Past Orders
                    </h3>
                    <div className='flex flex-wrap pt2'>
                        {this.state.orders.map(order =>
                            <OrderCard
                                key={order.id}
                                order={order}
                            />)
                        }
                    </div>
                </article>


            </>
        )
    }
}

export default MyOrders