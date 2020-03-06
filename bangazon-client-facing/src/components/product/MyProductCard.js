import React, { Component } from "react";

class MyProductCard extends Component {
    state = {
        inventoryAdd: 0
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    render() {
        return (
            <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l ma3">
                <img
                    src={this.props.product.image_path}
                    className="db w-100 br2 br--top"
                    alt={this.props.product.name} />
                <div className="pa2 ph3-ns pb3-ns">
                    <div className="dt w-100 mt1">
                        <div className="dtc">
                            <a className='link blue f5 f4-ns mv0' href={`/product/${this.props.product.id}`}>
                                {this.props.product.name}
                            </a>
                        </div>
                        <div className="dtc tr">
                            <h2 className="f5 mv0">${this.props.product.price}</h2>
                        </div>
                    </div>
                    <div>Number Available: {this.props.product.inventory}</div>
                    <p className="f6 lh-copy measure mt2 mid-gray">{this.props.product.description}</p>
                    <div>
                        <input id="inventoryAdd" type='number' onChange={this.handleFieldChange}/>
                        <button hidden={this.props.allProducts} onClick={() => this.props.updateInventory(this.props.product, this.state.inventoryAdd)} className='dib f6 link br-pill ba ph2 pv1 mb2 black bg-animate hover-bg-light-yellow' >
                            Add To Inventory
                        </button>
                    </div>
                </div>
            </article>
        )
    }

}
export default MyProductCard