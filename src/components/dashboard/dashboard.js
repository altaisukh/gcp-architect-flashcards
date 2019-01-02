import React, { Component } from 'react'
import CardList from '../cards/cardlist'
import Notifications from './notifications'
import { connect } from 'react-redux'

class Dashboard extends Component {
  render() {
    
    // console.log(this.props);
    const { cards } = this.props;
    
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <CardList cards={cards} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
	console.log(state)
  return {
    cards: state.firebase.data.cards
  }
}

export default connect(mapStateToProps)(Dashboard)