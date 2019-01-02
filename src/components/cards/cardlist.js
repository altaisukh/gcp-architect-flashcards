import React from 'react'
import CardSummary from './cardsummary'

const CardList = ({cards}) => {
	return (
		<div className="card-list section">
			{ cards && cards.map(card => {
				return (
					<CardSummary card={card} key={card.id} />
					)
			})}
		</div>
		)
}

export default CardList