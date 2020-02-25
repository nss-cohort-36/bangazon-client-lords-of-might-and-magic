import React, { Component } from 'react';
import Settings from '../settings/Settings'
import Order from '../Order/order';
import CompleteOrder from '../Order/CompleteOrder'


export default props => {

    const currDisplay = () => {
        if (props.displayTitle === "Settings") return <Settings />
        if (props.displayTitle === "Complete Order") return <CompleteOrder />
        else return <Order changeDisplay={props.changeDisplay}/>
    }

    return (
        <section className="pt2 pb6 ph3 ph4-ns">
            <h2 className="f4">{props.displayTitle}</h2>
            {currDisplay()}
        </section>
    )
}
