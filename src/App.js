import React, { Component } from 'react'
import EventDashboard from './features/event/EventDashboard/EventDashboard';
import Navbar from './features/nav/Navbar/Navbar';
import { Container } from 'semantic-ui-react';
import { Switch, Route, withRouter } from 'react-router-dom';
import HomePage from './features/home/HomePage';
import EventDetailedPage from './features/event/EventDetailed/EventDetailedPage';
import PeopleDashboard from './features/user/PeopleDashboard/PeopleDashboard';
import UserDetailedPage from './features/user/UserDetailed/UserDetailedPage';
import SettingsDashboard from './features/user/Settings/SettingsDashboard';
import EventForm from './features/event/EventForm/EventForm';
import TestComponent from './features/testarea/TestComponent';
import ModalManager from './features/modals/ModalManager';

class App extends Component {
  render() {

    return (
      <React.Fragment>
        <ModalManager />
         <Route exact path="/" component={HomePage} />
         <Route exact path="/(.+)" render={() => (
            <React.Fragment>  
            <Navbar />
            <Container className="main">
            <Switch key={this.props.location.key}>
             
              <Route exact path="/events" component={EventDashboard} />
              <Route exact path="/events/:id" component={EventDetailedPage} />
              <Route exact path="/people" component={PeopleDashboard} />
              <Route exact path="/profile/:id" component={UserDetailedPage} />
              <Route path="/settings" component={SettingsDashboard} />
              <Route exact path="/createEvent" component={EventForm} />
              <Route exact path="/manage/:id" component={EventForm} />
              <Route exact path="/test" component={TestComponent} />
            </Switch>
            </Container>
          </React.Fragment>
         )} />
      </React.Fragment>
      
    )
  }
}

export default withRouter(App);
