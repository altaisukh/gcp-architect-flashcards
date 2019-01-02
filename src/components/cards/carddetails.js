import React from 'react'
import { connect } from 'react-redux'

const CardDetails = (props) => {
	const id = props.match.params.id;
	return (
		<div className="container section card-details">
			<div className="card z-depth-0">
				<div className="card-content">
					<span className="card-title">Card Front - {id}</span>
					<p>Lorem ipsum doolor</p>

				</div>
				<div className="card-back grey lighten-4 grey-text">
					<span className="card-title">Card Back</span>
					<p>Lorem ipsum doolor</p>

				</div>

			</div>

		</div>


		)
}

export default CardDetails