
import React, { Component } from "react"
import { isAuthenticated } from "../helpers/simpleAuth"
// import ApiManager from "../utility/ApiManager"

class CompleteOrder extends Component {
    state = {
        paymentTypes: [],
        paymentTypeId: '',
        customerId: '',
        completedOrder: [],
    }

    loggedInUserId= () => JSON.parse(localStorage.getItem("credentials")).userId

    componentDidMount() {
        this.getPaymentTypes()
        this.getOrderProduct()
    }

    getPaymentTypes() {
        if (isAuthenticated()) {
            fetch("http://localhost:8000/paymenttypes", {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Authorization": `Token ${sessionStorage.getItem("bangazon_token")}`
                }
            })
                .then(response => response.json())
                .then(response => this.setState({ paymentTypes: response }))
           


        }
    }

    getOrderProduct() {
        if (isAuthenticated()) {
            fetch("http://localhost:8000/orders", {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Authorization": `Token ${sessionStorage.getItem("bangazon_token")}`
                }
            })
                .then(response => response.json())
                // .then(response => console.log(response))
                .then(response => { 
                    this.setState({ completedOrder: response
                 })
                
                })
                
        }
    }

    updateOrder = () => {
        if (isAuthenticated()) {

            this.state.completedOrder.payment_type_id = this.state.paymentTypeId

            console.log(this.state.completedOrder)

            fetch(`http://localhost:8000/orders/${this.state.completedOrder.id}`, {
                "method": "PUT",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Token ${sessionStorage.getItem("bangazon_token")}`
                },
                "body": JSON.stringify(this.state.completedOrder)
            })
                .then(this.props.changeDisplay("Order Confirmation"))
        }
    }




    handleFieldChange = evt => {
            const stateToChange = {}
            stateToChange[evt.target.id] = evt.target.value
            this.setState(stateToChange)
        }

        handleSubmit = evt => {
            evt.preventDefault()

        }

        render() {
            return (
                <>
                    <article>
                        <h3>Please select payment type</h3>
                        <select onChange={this.handleFieldChange} value={this.state.paymentId} id="paymentTypeId">
                            {this.state.paymentTypes.map(payment => (
                                <option key={`select-option-${payment.id}`} value={payment.id}>{payment.merchant_name}</option>
                            ))}
                        </select>
                        <button onClick={this.updateOrder}>Confirm Payment</button>
                    </article>
                </>
            )
        }

    }

    export default CompleteOrder