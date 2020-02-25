import React, { Component } from "react"

class ProductCard extends Component {

  render() {
    return (
      <>
        <section >
          <a href={`/product/${this.props.product.id}`}>
            {this.props.product.name}
          </a>
          <p>Cost: ${this.props.product.price}</p>
          <button>Add to Cart</button>
        </section>
      </>
    )
  }
}

export default ProductCard