import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './signedinlinks';
import SignedOutLinks from './signedoutlinks';
import { connect }  from 'react-redux'
import { compose } from 'redux'

class Navbar extends Component{
	render(signedout) {
    
		// console.log(this.props);
		
		
		return (
			<nav className="nav-wrapper grey darken-3">
			<div className="container">
			<Link to='/' className="brand-logo">Google Cards</Link>
			{ signedout ? <SignedOutLinks />  : <SignedInLinks />  }
			</div>
		</nav>
		)
	  }
	}

const mapStateToProps = (state) => {
	const signedout = state.firebase.auth.isEmpty ? true : false
	return {
		signedout: signedout
	}
}

export default compose(
	connect(mapStateToProps)
)(Navbar)