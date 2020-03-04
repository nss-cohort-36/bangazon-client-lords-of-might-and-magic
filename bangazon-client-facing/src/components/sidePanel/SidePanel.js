import React from 'react';
import MyAccount from '../myAccount/MyAccount'
import Order from '../Order/order';
import CompleteOrder from '../Order/CompleteOrder'
import Confirmation from '../Order/Confirmation'

export default props => {

    const currDisplay = () => {
        if (props.displayTitle === "My Account") return <MyAccount changeDisplay={props.changeDisplay} {...props}/>
        if (props.displayTitle === "Complete Order") return <CompleteOrder changeDisplay={props.changeDisplay}/>
        if (props.displayTitle === "Order Confirmation") return <Confirmation changeDisplay={props.changeDisplay}/>
        else return <Order changeDisplay={props.changeDisplay}/>
    }

    return (
        <section className="pt4 pb6 ph3 ph4-ns">
            <h2 className="f4 fw6 ttu">{props.displayTitle}</h2>
            {currDisplay()}
        </section>
    )
}
