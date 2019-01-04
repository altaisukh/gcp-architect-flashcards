import React from 'react'
import CardSummary from './cardsummary'
import  {Link} from 'react-router-dom'

const CardList = ({cards}) => {
	const cardlist = cards && cards.map((card) => (
			<Link to ={'/cards/' + card.id} key={'link' + card.id}>
			<CardSummary card={card} key={card.id} />
	</Link>))

	return (
		<div className="card-list section">
			{ cardlist}
		</div>
		)
}

export default CardList