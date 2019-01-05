import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect }  from 'react-redux'
import { compose } from 'redux'
import { signOut } from '../../store/actions/authActions'

class SignedInLinks extends Component {
	render(){
		return (
			<ul className="right">
			<li><NavLink to='/create'>New Card</NavLink></li>
			<li><a onClick={this.props.signOut}>Log Out</a></li>
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