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
        ApiManager.get("products")
        .then((products) => {
            
            this.setState({products: products})
        })
    }



    render() {
        return (
            <>
                <article className="explorerList">
                    <h3 className='f4 fw6 ttu pl5 pt3'>Available Products</h3>
                    <div className='flex flex-wrap pt2'>
                    {
                        this.props.isCitySearch ?
                        this.state.products.filter(product => product.location.includes(this.props.match.params.searchTerm)).map(product =>
                            <ProductCard
                                key={product.id}
                                product={product}
                                addToOrder={this.props.addToOrder}
                            />)
                        : this.props.isNameSearch ?
                        this.state.products.filter(product => product.name.includes(this.props.match.params.searchTerm)).map(product =>
                            <ProductCard
                                key={product.id}
                                product={product}
                                addToOrder={this.props.addToOrder}
                            />)
                        : this.state.products.map(product =>
                            <ProductCard
                                key={product.id}
                                product={product}
                                addToOrder={this.props.addToOrder}
                            />)
                    }
                    </div>
                </article>
                  
                
            </>
        )
    }
}

export default ProductList