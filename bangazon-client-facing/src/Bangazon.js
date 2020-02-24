import React, { Component } from 'react';
import './Bangazon.css';
import NavBar from './components/nav/NavBar'
import ApplicationViews from './components/ApplicationViews';

class Bangazon extends Component {


  render() {
    return (
      <>
        <NavBar />
        <ApplicationViews/>
      </>
    )
  }

}

export default Bangazon;
