import React, { Component } from 'react'
import { connect } from 'react-redux'
import {createCard} from '../../store/actions/cardActions'
import {Redirect} from 'react-router-dom'
import {compose} from 'redux'


class CreateCard extends Component {
	state = {
		front: '',
		back: ''

	}
	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state)
		this.props.createCard(this.state)
	}
	render() {
		const {auth} = this.props
		if (!auth.uid) return <Redirect to= 'signin' />
		if (auth.email.indexOf('@google.com') === -1 && auth.email.indexOf('@mavenwave.com') === -1 ) return <Redirect to= '/someday' />
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit} className="white">
					<h5 className="grey-text text-darken-3">New Card</h5>
					<div className="input-field">
						<label htmlFor="front">Front</label>
						<textarea className="materialize-textarea" id="front" onChange={this.handleChange}></textarea>
					</div>
					<div className="input-field">
						<label htmlFor="back">Back</label>
						<textarea className="materialize-textarea" id="back" onChange={this.handleChange}></textarea>
					</div>
					<div className="input-field">
						<button className="btn pink lighten-1 z-depth-0">Add Card</button>
					</div>
				</form>
			</div>

			)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		createCard: (card) => dispatch(createCard(card))
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth
	}
}


export default compose(
	connect(mapStateToProps, mapDispatchToProps)) (CreateCard)