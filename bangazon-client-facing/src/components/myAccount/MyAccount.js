import React, { Component } from 'react';
import { ReactComponent as DeleteIcon } from '../../assets/deleteIcon.svg';
import { isAuthenticated } from "../helpers/simpleAuth"
import './MyAccount.css'
// import Customer from '../customer/Customer'

export default class MyAccount extends Component {
  state = {
    paymentTypes: []
    customer: {}

  }

  // getCustomer = () => {
  //   if (isAuthenticated()) {
  //     fetch(`http://localhost:8000/customers/${id}`)
  //   }

  // }

  getPaymentTypes = () => {
    if (isAuthenticated())
      fetch('http://localhost:8000/paymenttypes', {
        "method": "GET",
        "headers": {
          "Accept": "application/json",
          "Authorization": `Token ${sessionStorage.getItem("bangazon_token")}`
        }
      })
      .then(r => r.json())
      .then(items => this.setState({paymentTypes: items})) 
    }

  deletePaymentType = id => {
    fetch(`http://localhost:8000/paymenttypes/${id}`, {
      "method": 'DELETE',
      "headers": {
        "Accept": "application/json",
        "Authorization": `Token ${sessionStorage.getItem("bangazon_token")}`
      }
    })
    .then(() => this.getPaymentTypes());
  }

  componentDidMount() {
    this.getPaymentTypes();
  }

  render() {
  	return (
      <>
      {/* <article className="customerList">
        {
          this.props.customers.map(customer =>
            <Customer
              key={customer.id}                
              customer={customer}
            />

          )
        }
      </article> */}
  		<article>
        <details className="w-70-ns w-100 pt2">
          <summary className="pointer dim">
              <h2 className='f5-ns f6 fw3 underline'>
                Payment Options
              </h2>
          </summary>
          <div className="f6">
              <a className="link dim blue" href='/add/paymenttype' title="Add Payment Type Form">
                Add a Payment Type
              </a>
            	{this.state.paymentTypes.map(type => {
                return (
                  <div key={type.id}>
                    <DeleteIcon className='dib pointer red dim pr1' onClick={() => this.deletePaymentType(type.id)}/>
                    <p className='dib'>{type.merchant_name} {type.acct_number}</p>
                  </div>
                )
              })}
          </div>
        </details>
  	  </article>
      </>
  	)
  }
}