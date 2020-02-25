import React, { Component } from 'react';
import './Bangazon.css';
import NavBar from './components/nav/NavBar';
import ApplicationViews from './components/ApplicationViews';
import SidePanel from './components/sidePanel/SidePanel.js';

class Bangazon extends Component {
  state = {
    sideDisplay: "Shopping Cart"
  }

  changeDisplay = newDisplay => this.setState({sideDisplay: newDisplay})


  render() {
    return (
      <>
	      <NavBar changeDisplay={this.changeDisplay}/>
	      <section className="flex avenir">
          <article className="w-70 pv2 ph4">
		        <ApplicationViews />
          </article>
          <article className="w-30 bg-light-gray">
		        <SidePanel changeDisplay={this.changeDisplay} displayTitle={this.state.sideDisplay}/>
          </article>
		    </section>
      </>
    )
  }

}

export default Bangazon;
