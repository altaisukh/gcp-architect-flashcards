import React, { Component } from 'react'
import { signIn } from '../../store/actions/authActions'
import { connect } from 'react-redux'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'

export class SignIn extends Component {
	render () {
		const {signIn, auth} = this.props;
		if (auth.uid) return <Redirect to= '/' />
		return (
					
		<div className="container section card-details">
			<div className="card z-depth-0">
				<div className="card-content">
					<h5>Welcome!</h5>
					<p>Press the sign in button below to sign in.</p>
					<br></br>
					<p>Only approved emails will be elligible. </p>
				</div>
			</div>
			<button className="waves-effect waves-light pink btn" onClick={signIn} >Sign In</button>
		</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		signIn: () => dispatch(signIn())
	}
}

const mapStateToProps = (state) => {
	return {
	  cards: state.firestore.ordered.cards,
	  auth: state.firebase.auth
	}
  }

export default compose(connect(mapStateToProps, mapDispatchToProps))(SignIn)

