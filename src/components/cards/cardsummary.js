import React from 'react'

const CardSummary = ({card}) => {
	return (
		<div className="card z-depth-0 card-summary">
		   	<div className="card-content grey-text text-darken-3">
		   		<span className="card-title"> {card.front}</span>
		   			<p>GCP Datastore</p>
		   			<p className="grey-text">{card.back}</p>
		   	</div>
		   	</div>

	)
}

export default CardSummary