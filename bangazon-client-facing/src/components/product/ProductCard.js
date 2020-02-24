import React, { Component } from "react"

class ProductCard extends Component {

  render() {
    return (
      <>
        <section >
          <p >
            {this.props.product.name}
          </p>
        </section>
      </>
    )
  }
}

export default ProductCard