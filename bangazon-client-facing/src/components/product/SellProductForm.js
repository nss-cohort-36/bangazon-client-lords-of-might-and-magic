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
        producttypes: []
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    componentDidMount() {
        ApiManager.get('producttypes')
        .then(producttypes => this.setState({producttypes}))
    }

    handleSubmit = event => {
        event.preventDefault()   
        if (!event.target.checkValidity()){
            return alert('please fill out form properly')
        }else{
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
                <form className="pa4 black-80" onSubmit={this.handleSubmit} >
                    <div className="measure">
                        <label htmlFor="name" className="f6 b db mb2">Name</label>
                        <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" onChange={this.handleFieldChange} required />
                    </div>
                    <div className="measure">
                        <label htmlFor="price" className="f6 b db mb2">Price</label>
                        <input id="price" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" onChange={this.handleFieldChange} required />
                    </div>
                    <div className="measure">
                        <label htmlFor="description" className="f6 b db mb2">Description</label>
                        <input id="description" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" onChange={this.handleFieldChange} required />
                    </div>
                    <div className="measure">
                        <label htmlFor="quantity" className="f6 b db mb2">Quantity</label>
                        <input id="quantity" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" onChange={this.handleFieldChange} required />
                    </div>
                    <div className="measure">
                        <label htmlFor="location" className="f6 b db mb2">City</label>
                        <input id="location" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" onChange={this.handleFieldChange} required />
                    </div>
                    <div className="flex items-center mb2">
                        <label htmlFor="localDeliveryAvailable" className="lh-copy lda-label">Local Delivery Available</label>
                        <input className="mr2" type="checkbox" id="localDeliveryAvailable"  />
                    </div>
                    <div className="measure">
                        <label htmlFor="imagePath" className="f6 b db mb2">Image Path</label>
                        <input id="imagePath" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" onChange={this.handleFieldChange} required/>
                    </div>
                    <div className="measure">
                        
                        <label className="f6 b db mb2" htmlFor="productTypeList">Product Type</label>
                        <select onChange={this.handleFieldChange} className="input-reset ba b--black-20 pa2 mb2 db w-100" id="productTypeId">
                            {this.state.producttypes.map(type => 
                                <option key={type.id} value={type.id}>{type.name}</option>
                            )}
                        </select>
                    </div>
                    <button>Submit</button>
                </form>
            </>
        )
    }
}
export default SellProductForm;