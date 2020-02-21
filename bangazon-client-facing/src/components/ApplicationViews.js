import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import SellProductForm from './SellProductForm'

class ApplicationViews extends Component {
    render() {
        return (
            <>
                <Route exact path="/sell-product" render={(props) => {
                    return <SellProductForm />
                }} />
            </>
        )
    }
}

export default ApplicationViews;