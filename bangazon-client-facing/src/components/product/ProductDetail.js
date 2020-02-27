import React, { Component } from "react"
import ApiManager from "../utility/ApiManager"

class ProductDetail extends Component {
    // also this contains the form to add an itinerary item
    state = {
        product: []
    }

    componentDidMount() {
        this.getProduct()
    }

    getProduct = () => {
        ApiManager.getOne("products", this.props.match.params.productId)
        .then((product) => {
            this.setState({product: product})
        })
    }

    handleCartAdd = () => {
        this.props.addToOrder(this.state.product.id)
        
    }

    render() {
        return (
            <>
                <article className="explorerDetail">
                    <h2>{this.state.product.name}</h2>
                    <h3>Price: ${this.state.product.price}</h3>
                    <h3>Description: {this.state.product.description}</h3>
                    < button onClick={this.handleCartAdd}>Add to Cart</button>
                </article>
                  
                
            </>
        )
    }
}

export default ProductDetail