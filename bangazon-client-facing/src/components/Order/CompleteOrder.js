import React, { Component } from "react"
import { isAuthenticated } from "../helpers/simpleAuth"
import ApiManager from "../utility/ApiManager"


class CompleteOrder extends Component {


    state = {
        paymentTypes: [],
        paymentTypeId: ''
    }


    componentDidMount() {
        this.getPaymentTypes()
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
                    <select id="paymentId" onChange={this.handleFieldChange} value={this.state.paymentId} id="paymentTypeId">
                        {this.state.paymentTypes.map(payment => (
                            <option key={`select-option-${payment.id}`} value={payment.id}>{payment.merchant_name}</option>
                        ))}
                    </select>
                    <button>Confirm Payment</button>
                </article>
            </>
        )
    }
}

export default CompleteOrder