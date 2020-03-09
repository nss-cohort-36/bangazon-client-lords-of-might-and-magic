import React, { Component } from "react"
import MyProductCard from "./MyProductCard"
import ApiManager from "../utility/ApiManager"

class MyProductList extends Component {
    // also this contains the form to add an itinerary item
    state = {
        products: []
    }

    componentDidMount() {
        this.getMyProducts()


    }

    updateInventory = (product, inventoryAdd) => {
        product.quantity += Number(inventoryAdd)
        ApiManager.update('products', product, product.id)
        .then(this.getMyProducts)
    }
    

    getMyProducts = () => {
        
        fetch(`http://localhost:8000/products`, {
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${sessionStorage.getItem("bangazon_token")}`
            }
        })
            .then(response => response.json())
            .then((products) => {
                this.setState({ products: products })
            })
    }

    deleteProducts = (product) => {
        ApiManager.delete('products', product.id)
        .then(this.getMyProducts)
    }



    render() {
        return (
            <>
                <article className="explorerList">
                    <h3 className='f4 fw6 ttu pl5 pt3'> My Products
                    </h3>
                    <div className='flex flex-wrap pt2'>
                        {this.state.products.map(product =>
                            <MyProductCard
                                key={product.id}
                                product={product}
                                addToOrder={this.props.addToOrder}
                                updateInventory={this.updateInventory}
                                deleteProducts={this.deleteProducts}
                            />)
                        }
                    </div>
                </article>


            </>
        )
    }
}

export default MyProductList