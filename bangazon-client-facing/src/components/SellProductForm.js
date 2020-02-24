import React, { Component } from 'react'

class SellProductForm extends Component {

    // need to set customer id in state to whatever credentials in session storage says
    state = {
        name: "",
        customer_id: 1,
        price: 0,
        description: "",
        quantity: 0,
        location: "",
        imagePath: "",
        productTypeId: 0,
        localDeliveryAvailable: false,
    }

    componentDidMount() {

    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    render() {
        return (
            <>
                <h2 className="f6 gray fw2 ttu tracked product-header">List a Product for Sell</h2>
                <form className="pa4 black-80">
                    <div className="measure">
                        <label for="name" className="f6 b db mb2">Name</label>
                        <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" onChange={this.handleFieldChange} />
                    </div>
                    <div className="measure">
                        <label for="price" className="f6 b db mb2">Price</label>
                        <input id="price" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" onChange={this.handleFieldChange} />
                    </div>
                    <div className="measure">
                        <label for="description" className="f6 b db mb2">Description</label>
                        <input id="description" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" onChange={this.handleFieldChange} />
                    </div>
                    <div className="measure">
                        <label for="quantity" className="f6 b db mb2">Quantity</label>
                        <input id="quantity" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" onChange={this.handleFieldChange} />
                    </div>
                    <div className="measure">
                        <label for="location" className="f6 b db mb2">City</label>
                        <input id="location" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" onChange={this.handleFieldChange} />
                    </div>
                    <div className="flex items-center mb2">
                        <label for="localDeliveryAvailable" className="lh-copy lda-label">Local Delivery Available</label>
                        <input className="mr2" type="checkbox" id="localDeliveryAvailable" onChange={this.handleFieldChange} />
                    </div>
                    <div className="measure">
                        <label for="imagePath" className="f6 b db mb2">Image Path</label>
                        <input id="imagePath" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" onChange={this.handleFieldChange} />
                    </div>
                    <div className="measure">
                        <label className="f6 b db mb2">Type</label>
                        <input list="productTypeList" name="productTypeId" className="input-reset ba b--black-20 pa2 mb2 db w-100 product-types-input" onChange={this.handleFieldChange} id="productTypeId" />
                        <datalist id="productTypeList">
                            <option value={1}>Product type 1</option>
                            <option value={2}>Product type 2</option>
                            <option value={3}>Product type 3</option>
                        </datalist>
                    </div>
                    <a class="f6 link dim ba ph3 pv2 mb2 dib black" href="#0">Submit</a>
                </form>
            </>
        )
    }
}
export default SellProductForm;