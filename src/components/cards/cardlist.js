import React from 'react'
import CardSummary from './cardsummary'
import  {Link} from 'react-router-dom'

const CardList = ({cards}) => {
	return (
		<div className="card-list section">
			{ cards && cards.map(card => {
				return (
					<Link to ={'/cards/' + card.id}>

					<CardSummary card={card} key={card.id} />
					</Link>


					)
			})}
		</div>
		)
}

export default CardList