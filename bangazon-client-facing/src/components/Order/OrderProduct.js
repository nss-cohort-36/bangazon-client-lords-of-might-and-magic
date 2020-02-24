import React, { Component } from "react"
import { Link } from "react-router-dom"


class OrderProduct extends Component {

    render() {
        return (
            <>
                <section>
                    <p>
                        <span>
                            {this.props.item.product.name}
                        </span>
                        <button>Delete Product</button>
                    </p>
                </section>

            </>
        )
    }
}

export default OrderProduct