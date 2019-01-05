import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect }  from 'react-redux'
import { compose } from 'redux'
import { signOut } from '../../store/actions/authActions'

class SignedInLinks extends Component {
	render(){
		const {signOut} = this.props
		return (
			<ul className="right">
			<li><NavLink to='/create'>New Card</NavLink></li>
			<li><a onClick={signOut}>Log Out</a></li>
			<li><NavLink to='/' className='btn btn-floating pink lighten-1'>GCP</NavLink></li>
			</ul>)
			}}

const mapDispatchToProps = (dispatch) => {
	return {
		signOut: () => dispatch(signOut())
	}
}

export default compose(
	connect(null, mapDispatchToProps))
	(SignedInLinks)