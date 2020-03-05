import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import ApiManager from '../utility/ApiManager'
import { isAuthenticated } from '../helpers/simpleAuth'

export default function CustomerEditForm(props) {

    const [updatedCustomer, setUpdatedCustomer] = useState(
        {'address': "",
        'phone':"",
        'city':"",
        'first_name': "",
        'last_name': "",
        'email': "",
        'username': ""
        }
    )

    const history = useHistory()

    const getUpdatedCustomer = () => {
        if (isAuthenticated()) {
        ApiManager.get('customers')
        .then(r => {
            console.log(r)
            return r
        })
        .then((r) => {
            setUpdatedCustomer({
                'address': r[0].address,
                'phone': r[0].phone,
                'city': r[0].city,
                'first_name': r[0].user.first_name,
                'last_name': r[0].user.last_name,
                'email': r[0].user.email,
                'username': r[0].user.username
            })
        }
        )}
    }

    const handleInputChange = evt => {
        setUpdatedCustomer({
            ...updatedCustomer,
            [evt.target.id]: evt.target.value
        })
    }

    const handleUpdatedCustomer = evt => {
        evt.preventDefault()

        const updateCustomer = {
            last_name: updatedCustomer.last_name,
            address: updatedCustomer.address,
            city: updatedCustomer.city,
            phone: updatedCustomer.phone
        }

        fetch(`http://localhost:8000/customers/${props.match.params.customerId}`, {
            "method": "PATCH",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Token ${sessionStorage.getItem("bangazon_token")}`
            },
            "body": JSON.stringify(
                updateCustomer
            )
        })
        // .then(history.push('/myaccount'))
        // return
    }

    useEffect(getUpdatedCustomer, [])

    return (
      <form className="form-container">
        <label className="form-label" htmlFor="first_name">First Name</label>
        <p className="form-desc" id="first_name"> {updatedCustomer.first_name}</p>
        <br />
        
        <label className="form-label" htmlFor="last_name">Last Name</label>
        
        <p><input className="form-input"
          onChange={handleInputChange}
          id = "last_name"
          type="text" name="last_name"
          value={updatedCustomer.last_name} 
          autoFocus required />
        </p>
        <br />
        <label className="form-label" htmlFor="email">Email</label>
        <p className="form-desc">{updatedCustomer.email}</p>
        <br />        
        <label className="form-label" htmlFor="username">Username</label>
        <p className="form-desc">{updatedCustomer.username}</p>
        <br />
        <label className="form-label" htmlFor="address">Address</label>
        <p><input
          onChange={handleInputChange}
          id = "address"    
          type="text" name="address"
          value={updatedCustomer.address} 
          autoFocus required />
        </p>
        <br />        
        <label className="form-label" htmlFor="city">City   </label>
        <p><input
          onChange={handleInputChange}
          id = "city"
          type="text" name="city"
          value={updatedCustomer.city} 
          autoFocus required />
        </p>
        <br />
        <label className="form-label" htmlFor="phone">Phone   </label>
        <p><input
          onChange={handleInputChange}
          id = "phone"
          type="text" name="phone"
          value={updatedCustomer.phone} 
          autoFocus required />
        </p>
        < br />

        <button className="form-button" onClick={handleUpdatedCustomer}>Update Customer</button>
      </form>
    )
}