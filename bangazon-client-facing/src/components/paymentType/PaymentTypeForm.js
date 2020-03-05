import React, { Component } from "react"
import ApiManager from "../utility/ApiManager"

class PaymentTypeForm extends Component {
    // also this contains the form to add an itinerary item
    state = {
        merchantName: "",
        accountNumber: "",
        expDate: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange)
    }

    savePaymentForm = () => {
        const currentDate = new Date().toISOString().slice(0,10);
        //if statement to check that credit card expiration date is not less than today's date
        if (this.state.expDate < currentDate) {
            window.alert("Expiration Date cannot have already passed. \nPlease enter a valid Expiration Date")
        } else {
            const newPaymentType = {
                "merchant_name": this.state.merchantName,
                "acct_number": this.state.accountNumber,
                "expiration_date": this.state.expDate
            }

            ApiManager.post("paymenttypes", newPaymentType)
            .then(() => this.props.history.push('/'))
        }
    }

    render() {
        return (
            <>
                <div id="paymentForm">
                    <legend htmlFor="paymentType">Add Payment Type</legend>
                    <fieldset id="paymentType">
                    <input onChange={this.handleFieldChange} id="merchantName" type="text" placeholder="Institution Name"/>
                    <input onChange={this.handleFieldChange} id="accountNumber" type="text" placeholder="Account Number"/>
                    <input onChange={this.handleFieldChange} id="expDate" type="date" />
                    <button onClick={this.savePaymentForm}>Save</button>
                    </fieldset>
                </div>
            </>
        )
    }
}

export default PaymentTypeForm