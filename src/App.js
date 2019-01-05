import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Dashboard from './components/dashboard/dashboard'
import CardDetails from './components/cards/carddetails'
import CreateCard from './components/cards/createcard'
import SignIn from './components/auth/signin'
import Someday from './components/someday/someday'
//          <Route path='/signin' component={SignIn} />

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/cards/:id' component={CardDetails} />
          <Route path='/create' component={CreateCard} />
          <Route path='/signin' component={SignIn} />
          <Route path='/someday' component={Someday} />
        </Switch>
      </div>
      </BrowserRouter>


    );
  }
}

export default App;
