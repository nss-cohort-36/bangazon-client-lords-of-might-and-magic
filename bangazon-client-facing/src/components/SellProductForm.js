import React, { Component } from 'react'

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
    
    render() {
        return (
            <>
                <h2 class="f6 gray fw2 ttu tracked product-header">List a Product for Sell</h2>
                <form className="pa4 black-80">
                    <div className="measure">
                        <label for="name" className="f6 b db mb2">Name</label>
                        <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
                    </div>
                    <div className="measure">
                        <label className="f6 b db mb2">Type</label>
                        <input list="product-types" name="product-types" className="input-reset ba b--black-20 pa2 mb2 db w-100 product-types-input" />
                        <datalist id="product-types">
                            <option value="Product type 1" />
                            <option value="Product type 2" />
                            <option value="Product type 3" />
                        </datalist>
                    </div>
                    <div className="measure">
                        <label for="name" className="f6 b db mb2">Quantity</label>
                        <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
                    </div>
                    <div className="measure">
                        <label for="name" className="f6 b db mb2">Price</label>
                        <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
                    </div>
                    <div className="measure">
                        <label for="name" className="f6 b db mb2">Description</label>
                        <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
                    </div>
                    <div class="flex items-center mb2">
                        <label for="local-delivery-available" class="lh-copy lda-label">Local Delivery Available</label>
                        <input class="mr2" type="checkbox" id="local-delivery-available" />
                    </div>
                    <div className="measure">
                        <label for="name" className="f6 b db mb2">City</label>
                        <input id="name" className="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
                    </div>
                </form>
            </>
        )
    }
}
export default SellProductForm;