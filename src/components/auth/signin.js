import React, { Component } from 'react'
import { signIn } from '../../store/actions/authActions'
import { connect } from 'react-redux'
import {compose} from 'redux'


export class SignIn extends Component {
	render () {
		console.log(this.props)

		return (

			<div>
			<div className="card z-depth-0 card-summary">
			<span className="card-title">
			    <h5>Let me know everything about you!</h5></span>
			</div>
			<button className="waves-effect waves-light pink btn" onClick={this.props.signIn}>Sign In</button>
			</div>
			)
	}
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  	signIn: () => dispatch(signIn())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)