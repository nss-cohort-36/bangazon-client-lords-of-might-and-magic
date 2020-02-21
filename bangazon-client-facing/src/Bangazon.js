import React, { Component } from 'react';
import './Bangazon.css';
import NavBar from './components/nav/NavBar'

class Bangazon extends Component {

  render() {
    return (
      <>
        <NavBar />
        <ApplicationViews />
      </>
    )
  }

}

export default Bangazon;
