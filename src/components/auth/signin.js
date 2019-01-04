import React, { Component } from 'react'
import { signIn } from '../../store/actions/authActions'
import { connect } from 'react-redux'
import {compose} from 'redux'
import firebase from '../../config/fbConfig'

const provider = new firebase.auth.GoogleAuthProvider();

export class SignIn extends Component {
	render () {
		 this.props.signIn()
		  return ( <div> Hi </div> ) 
  	}	
}

const mapDispatchToProps = (dispatch) => {
	return {
		signIn: () => dispatch(signIn())
	}

}

export default compose(connect(null, mapDispatchToProps))(SignIn)

