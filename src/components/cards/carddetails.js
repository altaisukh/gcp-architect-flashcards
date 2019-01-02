import React, { Component } from 'react'
import { connect } from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import { compose } from 'redux'

class CardDetails extends Component {
	constructor () {
		super()
		this.state = {
			isHidden: true
		}
	}
	toggleHidden () {
		this.setState({
			isHidden: !this.state.isHidden
		})
	}
	render() {
		const {card} = this.props;
		console.log(this.state)
		if (card) {
			let cardback;
			let cardbutton;
			if (!this.state.isHidden) {
				cardback = <div className="card-content lighten-4 grey-text"><span className="card-title">{card.back}</span></div>;
				cardbutton = <button className="waves-effect waves-light pink btn" onClick={this.toggleHidden.bind(this)} >Hide Answer</button>
			} else {
				cardback = <div></div>
				cardbutton = <button className="waves-effect waves-light pink btn" onClick={this.toggleHidden.bind(this)} >Show Answer</button>

			}
			return (
				<div className="container section card-details">
					<div className="card z-depth-0">
						<div className="card-content">
							<span className="card-title">{card.front}</span>
						</div>
						 <div>
						 	{cardback}
       					 </div>
					</div>
					{cardbutton}
				</div>

				)
		} else {
			return (
				<div className="container center">
				<p>Loading data...</p>
				</div>
				)
		}
	}
}

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id;
	const cards = state.firestore.data.cards;
	const card = cards ? cards[id] : null

	return {
		card: card

	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{collection: 'cards'}
		
		])
	) (CardDetails)