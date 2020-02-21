import React, { Component } from "react"
import ApiManager from "../utility/ApiManager"
import ProductCard from "./ProductCard"

class ProductList extends Component {
    // also this contains the form to add an itinerary item
    state = {
        products: []
    }

    componentDidMount() {
        this.getAvailableProducts()
    }

    getAvailableProducts = () => {
        //need to make fetchProducts in utility TO-DO
        ApiManager.fetchProducts()
        .then((products) => {
            this.setState({products: products})
        })
    }

    render() {
        return (
            <>
                <article className="explorerList">
                    <h3>Available Products</h3>
                    {
                        this.state.products.map(product =>
                            <ProductCard
                                key={product.id}
                                product={product}
                            />)
                    }
                </article>
                  
                
            </>
        )
    }
}

export default ProductList