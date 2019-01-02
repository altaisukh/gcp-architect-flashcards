import React from 'react'
import { connect } from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import { compose } from 'redux'

const CardDetails = (props) => {
	const {card} = props;

	if (card) {
		return (
		<div className="container section card-details">
			<div className="card z-depth-0">
				<div className="card-content">
					<span className="card-title">{card.front}</span>
				</div>
				<div className="card-content lighten-4 grey-text">
					<span className="card-title">{card.back}</span>
				</div>
			</div>
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