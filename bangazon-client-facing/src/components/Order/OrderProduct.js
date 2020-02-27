import React, { Component } from "react"


class OrderProduct extends Component {

    render() {
        return (
            <>
                <section>
                    <p>
                        <span>
                            {this.props.item.product.name}   {this.props.item.product.price}
                        </span>
                        <button>Delete</button>
                    </p>
                </section>

            </>
        )
    }
}

export default OrderProduct