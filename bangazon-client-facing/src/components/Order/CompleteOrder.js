import React, { Component } from "react"
import { isAuthenticated } from "../helpers/simpleAuth"
import ApiManager from "../utility/ApiManager"


class CompleteOrder extends Component {


    state = {
        paymentTypes: [],
        paymentId: ''
    }

    loggedInUserId = () => JSON.parse(localStorage.getItem("credentials")).userId

    componentDidMount() {
        this.getPaymentTypes()
    }

    getPaymentTypes() {
        if (isAuthenticated()) {
            fetch(`http://localhost:8000/paymenttypes?customerId=${loggedInUserId}`, {
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


    handlePaymentSelection() {

    }


    render() {
        return (
            <>
                <select id="paymentId" onChange={this.handlePaymentSelection} value={this.state.paymentId} >
                    {this.state.paymentTypes.map(payment => (
                        <option key={`select-option-${payment.id}`} value={payment.id}>{payment.merchantName}</option>
                    ))}
                </select>
            </>
        )
    }
}