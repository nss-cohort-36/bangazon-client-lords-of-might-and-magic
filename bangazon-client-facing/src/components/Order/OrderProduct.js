import React, { Component } from "react"


class OrderProduct extends Component {

    render() {
        return (
            <>
                <section className="pa3 pa5-ns">
                    <p className="list pl0 measure center">
                        <span className="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
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