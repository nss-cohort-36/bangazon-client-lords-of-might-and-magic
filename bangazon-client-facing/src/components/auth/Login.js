import React, { Component } from "react"
import "./Login.css"
import { login } from "../helpers/simpleAuth";


export default class Login extends Component {

    state = {
      username: "",
      password: ""
    }

    handleInputChange = (evt) => {
      let stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }

    // Simplistic handler for login submit
    handleLogin = (evt) => {
      evt.preventDefault()

      const credentials = {
        "username": this.state.username,
        "password": this.state.password
      }

      login(credentials)
      .then(() => {
        this.props.getProductTypesForNav()
        this.props.history.push("/")
        this.props.getShoppingCartInfo()
        this.props.getCustomers()
      })
    }

    render() {
      return (
        <main>
          <form onSubmit={this.handleLogin}>
            <h1 className="h3 mb3 f5 black fw2 ttu tracked">Please sign in</h1>
            <div className="measure">
              <label htmlFor="inputUsername" className="f6 b db mb2"> Username </label>
              <input onChange={this.handleInputChange}
                type="username"
                id="username"
                className="input-reset ba b--black-20 pa2 mb2 db w-50"
                placeholder="Username"
                required autoFocus />
            </div>
            <div className="measure">
              <label htmlFor="inputPassword" className="f6 b db mb2"> Password </label>
              <input onChange={this.handleInputChange}
                type="password"
                id="password"
                className="input-reset ba b--black-20 pa2 mb2 db w-50"
                placeholder="Password"
                required />
            </div>
            <div className="measure">
              <button 
                type="submit" 
                className='b dib f6 link br-pill ba ph2 pv1 mv3 black bg-animate hover-bg-light-pink'>
                  Sign in
              </button>
            </div>
          </form>
          <a href="/register">Register New Account</a>
        </main>
    )
  }
}
