import React, { Component } from "react";

class Confirmation extends Component {


    render () {
        return (
            <>
            <section className='tc'>
                {/* <h1 className='tc'>Order Confirmed!</h1> */}
                <h2 className='tc'>Thank you for shopping with us!</h2>
                <button onClick = {() => this.props.changeDisplay("Shopping Cart")}>Continue Shopping</button>
            </section>
            </>
        )
    }
}

export default Confirmation