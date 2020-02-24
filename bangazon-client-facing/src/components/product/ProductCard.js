import React, { Component } from "react"

class ProductCard extends Component {

  render() {
    return (
      <>
        <section >
          <h3 >
            {this.props.product.name}
          </h3>
          <p>Cost: ${this.props.product.price}</p>
          <div>Seller Description:</div>
          <div>{this.props.product.description}</div>
        </section>
      </>
    )
  }
}

export default ProductCard