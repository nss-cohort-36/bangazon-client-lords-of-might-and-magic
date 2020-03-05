// import React, { Component } from 'react';
import { ReactComponent as DeleteIcon } from '../../assets/deleteIcon.svg';
import { isAuthenticated } from "../helpers/simpleAuth"
import './MyAccount.css'
import CustomerList from '../customer/CustomerList'
import React, { useEffect, useState } from 'react'
import {  withRouter } from 'react-router-dom'

export default function MyAccount(props) {

// [variable, function to update state of variable = useState is a hook and the [] is the initial of that variable]
  const [paymentTypes, setPaymentTypes] = useState([]);
  const [customers, setCustomers] = useState([]);


  const getCustomers = () => {
    if (isAuthenticated()) {
      fetch('http://localhost:8000/customers', {
        "method": "GET",
        "headers": {
          "Accept": "application/json",
          "Authorization": `Token ${sessionStorage.getItem("bangazon_token")}`
        }
      })
      .then(r => r.json())
      .then(setCustomers)
    }
  }

  const getPaymentTypes = () => {
    if (isAuthenticated())
      fetch('http://localhost:8000/paymenttypes', {
        "method": "GET",
        "headers": {
          "Accept": "application/json",
          "Authorization": `Token ${sessionStorage.getItem("bangazon_token")}`
        }
      })
      .then(r => r.json())
      .then(setPaymentTypes)
    }

  const deletePaymentType = id => {
    fetch(`http://localhost:8000/paymenttypes/${id}`, {
      "method": 'DELETE',
      "headers": {
        "Accept": "application/json",
        "Authorization": `Token ${sessionStorage.getItem("bangazon_token")}`
      }
    })
    .then(getPaymentTypes)
  }

  useEffect(getPaymentTypes, []);
  useEffect(getCustomers, []);

  // render() {
  	return (
      <>
      <CustomerList {...props} customers={customers} />
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
            	{paymentTypes.map(type => {
                return (
                  <div key={type.id}>
                    <DeleteIcon className='dib pointer red dim pr1' onClick={() => deletePaymentType(type.id)}/>
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

export default withRouter(MyAccount)
