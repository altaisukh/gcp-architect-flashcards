import React from 'react'

const CardSummary = ({card}) => {
	return (
		<div className="card z-depth-0 card-summary">
		   	<div className="card-content grey-text text-darken-3">
		   		<span className="card-title"> {card.front}</span>
		   	</div>
		   	</div>

	)
}

export default CardSummary