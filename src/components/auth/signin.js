import React, { Component } from 'react'
import { signIn } from '../../store/actions/authActions'
import { connect } from 'react-redux'
import {compose} from 'redux'

export class SignIn extends Component {
	state = {


	};
	render () {


		//firebase.auth().signInWithPopup(provider)
		//.then(function(result) {
		//	var token = result.credential.accessToken;
			// The signed-in user info.
		//	var user = result.user;
		//	console.log(user);
		//	return ( 
  		//	<div> Hi </div> ) 
		//})
		//.catch(function(error) {
		// Handle Errors here.
  		//var errorCode = error.code;
  		//var errorMessage = error.message;
		// The email of the user's account used.
  		//var email = error.email;
  		// The firebase.auth.AuthCredential type that was used.
  		//var credential = error.credential;
  		//console.log(errorMessage)
  		//})
  		return ( <div> Hi </div> ) 

	  }
}


const mapStateToProps = (state) => {
	return {
	  firebase: state.firebase
	}
  }



export default connect(mapStateToProps)(SignIn)