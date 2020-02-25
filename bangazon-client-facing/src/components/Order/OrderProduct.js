import React, { Component } from "react"


class OrderProduct extends Component {

    render() {
        return (
            <>
                <section>
                    <p>
                        <span>
                            {this.props.item.name}
                        </span>
                        <button>Delete Product</button>
                    </p>
                </section>

            </>
        )
    }
}

export default OrderProduct