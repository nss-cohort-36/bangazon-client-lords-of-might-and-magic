// import React, { Component } from "react"
// import ApiManager from "../utility/ApiManager"
// import ProductCard from "../product/ProductCard"
// import { isAuthenticated } from "../helpers/simpleAuth"

// class MyProduct extends Component {
//     // also this contains the form to add an itinerary item
//     state = {
//         products: []
//     }

//     componentDidMount() {
//         if (isAuthenticated()) {
//             this.getAvailableProducts()
//         }

//     }

//     getAvailableProducts = () => {
//         //need to make fetchProducts in utility TO-DO
//         ApiManager.my_products("products")
//             .then((products) => {
//                 this.setState({ products: products })
//             })
//     }

//     deleteFromMyProduct = (id) => {
//         Promise.all(
//         id.forEach(id => {
//             ApiManager.delete("products", id)
//         }))
//         .then(this.getAvailableProducts)
//     }



//     render() {
//         return (
//             <>
//                 <article className="explorerList">
//                     <h3 className='f4 fw6 ttu pl5 pt3'>{
//                         isAuthenticated() ? "My Products"
//                             : "Login to see available products!"}</h3>
//                     <div className='flex flex-wrap pt2'>
//                         {

//                             this.state.products.map(product =>
//                                 <ProductCard
//                                     key={product.id}
//                                     product={product}
//                                     addToOrder={this.props.addToOrder}
//                                     deleteFromMyProduct={this.deleteFromMyProduct}
//                                 />)
//                         }
//                     </div>
//                 </article>


//             </>
//         )
//     }
// }

// export default MyProduct