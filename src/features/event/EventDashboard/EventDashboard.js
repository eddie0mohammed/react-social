import React, { Component } from 'react'
import { Grid} from 'semantic-ui-react';
import EventList from '../EventList/EventList';
// import EventForm from '../EventForm/EventForm';

import {connect} from 'react-redux';
import {createEvent, deleteEvent, updateEvent} from '../eventAction';



class EventDashboard extends Component {

    // state = {
    //     // events: [],
    //     isOpen: false,
    //     selectedEvent: null,

    // }

    // handleFormCancel = () => {
    //     this.setState({isOpen: false});

    // }
    // handleCreateFormOpen = () => {
    //     this.setState({ isOpen: true, selectedEvent: null});
    // }

    // handleCreateEvent = (newEvent) => {
    //     newEvent.id = Math.random();
    //     newEvent.hostPhotoURL = '/assets/user.png';
    //     this.props.createEvent(newEvent);
    //     // this.setState({
    //     //     isOpen: false
    //     // })
    // }

    // handleSelectedEvent = (event) => {
    //     this.setState({
    //         selectedEvent: event,
    //         isOpen: true,
    //     })
    // }

    // handleUpdateEvent = (updatedEvent) => {
     
    //     this.props.updateEvent(updatedEvent);
    //     // this.setState({
    //     //     isOpen: false,
    //     //     selectedEvent: null,
    //     // })

    // }

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
                        {/* <Button positive content="Create Event" onClick={this.handleCreateFormOpen}/>
                        {this.state.isOpen && 
                        <EventForm key={this.state.selectedEvent ? this.state.selectedEvent.id : 0} 
                        createEvent={this.handleCreateEvent} selectedEvent={this.handleSelectedEvent} selectEvent={this.state.selectedEvent}
                            updateEvent={this.handleUpdateEvent} />} */}
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