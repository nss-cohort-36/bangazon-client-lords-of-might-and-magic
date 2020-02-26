import React, { Component } from "react"


class OrderProduct extends Component {

    render() {
        return (
            <>
                <section className="list pl0 measure center">
                    <p className="lh-copy pv3 ba bl-0 bt-0 br-0 b--black-30">
                        <span >
                            {this.props.item.name}
                        </span>
                        <DeleteIcon className='dib pointer red dim pr1' />
                    </p>
                </section>

            </>
        )
    }
}

export default OrderProduct