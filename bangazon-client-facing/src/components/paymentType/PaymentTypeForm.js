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
        this.setState({changeOccurred: true})
    }

    savePaymentForm = () => {
        const date = new Date()
        const newPaymentType = {
            "merchant_name": this.state.merchantName,
            "acct_number": this.state.accountNumber,
            "expiration_date": this.state.expDate,
            "created_at": `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
        }
        console.log(newPaymentType.created_at)
        ApiManager.post("paymenttypes", newPaymentType)
        .then(() => this.props.history.push('/'))
    }

    render() {
        return (
            <>
                <div id="paymentForm">
                    <legend htmlFor="paymentType">Add Payment Type</legend>
                    <fieldset id="paymentType">
                    <input id="merchantName" type="text" placeholder="Institution Name"/>
                    <input id="accountNumber" type="text" placeholder="Account Number"/>
                    <input id="expDate" type="date" />
                    <button onClick={this.savePaymentForm}>Save</button>
                    </fieldset>
                </div>
            </>
        )
    }
}

export default PaymentTypeForm