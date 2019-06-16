import React, { Component } from 'react'
import { Grid} from 'semantic-ui-react';
import EventList from '../EventList/EventList';
// import EventForm from '../EventForm/EventForm';

import {connect} from 'react-redux';
import {createEvent, deleteEvent, updateEvent} from '../eventAction';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import EventActivity from '../EventActivity/EventActivity';



class EventDashboard extends Component {


    handleDeleteEvent = (id) => {
      
        this.props.deleteEvent(id);
    }

    render() {
        const {events, loading} = this.props;
        if (loading) return <LoadingComponent />
        return (
            <div>
                <Grid>
                    <Grid.Column width={10}>
                        <EventList events={events}  deleteEvent={this.handleDeleteEvent}/>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <EventActivity />
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    events: state.events,
    loading: state.async.loading,
  }
}

const actions = {
    createEvent,
    updateEvent,
    deleteEvent,
  }

export default connect(mapStateToProps, actions)(EventDashboard);