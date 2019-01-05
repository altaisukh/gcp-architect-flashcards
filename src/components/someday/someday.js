import React, { Component } from 'react'
//import Notifications from './notifications'
import { connect } from 'react-redux'
import {compose} from 'redux'

class Someday extends Component {
    render() {
      
      // console.log(this.props);
      //const {  auth } = this.props;      
      return (
        <div className="container section card-details">
        <div className="card z-depth-0">
            <div className="card-content">
            Thanks for signing up! Unfortunately, at this time, we do not have space or availability for additional users. 
            </div>
        </div>
    </div>
      )
    }
  }
  
  const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth
    }
  }
  
  export default compose(
      connect(mapStateToProps)
  )(Someday)

