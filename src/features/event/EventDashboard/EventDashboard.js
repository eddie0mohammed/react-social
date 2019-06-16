import React, { Component } from 'react'
import { Grid} from 'semantic-ui-react';
import EventList from '../EventList/EventList';
// import EventForm from '../EventForm/EventForm';

import {connect} from 'react-redux';
import {createEvent, deleteEvent, updateEvent} from '../eventAction';



class EventDashboard extends Component {


    handleDeleteEvent = (id) => {
      
        this.props.deleteEvent(id);
    }

    render() {
        return (
            <div>
                <Grid>
                    <Grid.Column width={10}>
                        <EventList events={this.props.events}  deleteEvent={this.handleDeleteEvent}/>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <h1>Activity Feed</h1>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    events: state.events,
  }
}

const actions = {
    createEvent,
    updateEvent,
    deleteEvent,
  }

export default connect(mapStateToProps, actions)(EventDashboard);