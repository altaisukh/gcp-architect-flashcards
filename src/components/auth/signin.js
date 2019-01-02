/*import React, { Component } from 'react'

export class SignIn extends Component {
	googleLogin = () => {
		const firebase = require('firebase');
		const firebaseui = require('firebaseui');
		const provider = new firebase.auth.GoogleAuthProvider();
		firebase.auth().signInWithPopup(provider)
		.then(result => {
		const user = result.user;
		console.log(user);
	})
	}

	render () {
		return (
			<div>
			    <h1>Hello!</h1>
			    <button onClick={this.googleLogin}>Login</button>
			</div>
			)
	}
}

export default SignIn
*/