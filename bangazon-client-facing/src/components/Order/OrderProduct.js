import React, { Component } from "react"


class OrderProduct extends Component {

    render() {
        return (
            <>
                <section class="pa3 pa5-ns">
                    <p class="list pl0 measure center">
                        <span class="lh-copy pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30">
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