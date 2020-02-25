import React, { Component } from 'react'
import ApiManager from '../utility/ApiManager'


class SellProductForm extends Component {

    state = {
        name: "",
        price: 0,
        description: "",
        quantity: 0,
        location: "",
        imagePath: "",
        productTypeId: 0,
        localDeliveryAvailable: false,
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    handleSubmit = event => {
        event.preventDefault()   
        if (event.target.checkValidity()){
            return alert('please fill out form properly')
        }else {
            const newProduct = {
                name: this.state.name,
                price: this.state.price,
                description: this.state.description,
                quantity: this.state.quantity,
                location: this.state.location,
                image_path: this.state.imagePath,
                product_type_id: this.state.productTypeId
                }
                
            ApiManager.post('products', newProduct)
                .then(() => {
                    this.props.history.push('/')
                })
        }
    

    }

    render() {
        return (
            <>
                <h2 className="f6 gray fw2 ttu tracked product-header">List a Product for Sell</h2>
                <form className="pa4 black-80" noValidate>
                    <div className="measure">
                        <label for="name" className="f6 b db mb2">Name</label>
                        <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" onChange={this.handleFieldChange} noValidate />
                    </div>
                    <div className="measure">
                        <label for="price" className="f6 b db mb2">Price</label>
                        <input id="price" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" onChange={this.handleFieldChange} noValidate />
                    </div>
                    <div className="measure">
                        <label for="description" className="f6 b db mb2">Description</label>
                        <input id="description" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" onChange={this.handleFieldChange} noValidate />
                    </div>
                    <div className="measure">
                        <label for="quantity" className="f6 b db mb2">Quantity</label>
                        <input id="quantity" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" onChange={this.handleFieldChange} noValidate />
                    </div>
                    <div className="measure">
                        <label for="location" className="f6 b db mb2">City</label>
                        <input id="location" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" onChange={this.handleFieldChange} />
                    </div>
                    <div className="flex items-center mb2">
                        <label for="localDeliveryAvailable" className="lh-copy lda-label">Local Delivery Available</label>
                        <input className="mr2" type="checkbox" id="localDeliveryAvailable" noValidate />
                    </div>
                    <div className="measure">
                        <label for="imagePath" className="f6 b db mb2">Image Path</label>
                        <input id="imagePath" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" onChange={this.handleFieldChange} noValidate />
                    </div>
                    <div className="measure">
                        <label className="f6 b db mb2">Type</label>
                        <input list="productTypeList" name="productTypeId" className="input-reset ba b--black-20 pa2 mb2 db w-100 product-types-input" onChange={this.handleFieldChange} id="productTypeId" noValidate />
                        <datalist id="productTypeList">
                            <option value={1}>Product type 1</option>
                            <option value={2}>Product type 2</option>
                            <option value={3}>Product type 3</option>
                        </datalist>
                    </div>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </>
        )
    }
}
export default SellProductForm;