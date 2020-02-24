import React from 'react';
import Settings from '../settings/Settings'
import Order from '../Order/order';

export default props => {
    return (
        <section className="pt2 pb6 ph3 ph4-ns">
            <h2 className="f4">{props.displayTitle}</h2>
            {props.displayTitle === "Settings" ? <Settings /> : <Order />}
        </section>
    )
}