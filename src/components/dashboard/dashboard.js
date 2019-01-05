import React, { Component } from 'react'
import CardList from '../cards/cardlist'
//import Notifications from './notifications'
import { connect } from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'

class Dashboard extends Component {
  render() {
    
    // console.log(this.props);
    const { cards, auth } = this.props;
    if (!auth.uid) return <Redirect to= 'signin' />
    
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <CardList cards={cards} />
          </div>
          <div className="col s12 m5 offset-m1">
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.firestore.ordered.cards,
    auth: state.firebase.auth
  }
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{collection: "cards"}
	])
)(Dashboard)