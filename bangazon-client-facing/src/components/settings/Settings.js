import React, { Component } from 'react';
import { ReactComponent as DeleteIcon } from '../../assets/deleteIcon.svg';
import { isAuthenticated } from "../helpers/simpleAuth"
import {  withRouter } from 'react-router-dom'
import './Settings.css'

class Settings extends Component {
  state = {
    paymentTypes: []
  }

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
  		<article>
        <h2 className='f5-ns f6 fw3 underline dim pointer' onClick={() => this.props.history.push('/myproducts')}>My Products for Sale</h2>
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
  	)
  }
}

export default withRouter(Settings)