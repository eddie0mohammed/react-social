import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';


const eventsFromDashboard = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }
]



class EventDashboard extends Component {

    state = {
        events: eventsFromDashboard,
        isOpen: false,
        selectedEvent: null,

    }

    handleFormCancel = () => {
        this.setState({isOpen: false});

    }
    handleCreateFormOpen = () => {
        this.setState({ isOpen: true, selectedEvent: null});
    }

    handleCreateEvent = (newEvent) => {
        newEvent.id = Math.random();
        newEvent.hostPhotoURL = '/assets/user.png';
        this.setState({
            events: [...this.state.events, newEvent],
            isOpen: false
        })
    }

    handleSelectedEvent = (event) => {
        this.setState({
            selectedEvent: event,
            isOpen: true,
        })
    }

    handleUpdateEvent = (updatedEvent) => {
        const updatedEvents = this.state.events.map(event => {
            if (event.id === updatedEvent.id){
                return {...updatedEvent}
            }else{
                return event
            }
        });
        this.setState({
            events: updatedEvents,
            isOpen: false,
            selectedEvent: null,
        })

    }

    handleDeleteEvent = (id) => {
        const updatedEvents = this.state.events.filter(event => event.id !== id);
        this.setState({events: updatedEvents});
    }

    render() {
        return (
            <div>
                <Grid>
                    <Grid.Column width={10}>
                        <EventList events={this.state.events} selectEvent={this.handleSelectedEvent} deleteEvent={this.handleDeleteEvent}/>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Button positive content="Create Event" onClick={this.handleCreateFormOpen}/>
                        {this.state.isOpen && 
                        <EventForm key={this.state.selectedEvent ? this.state.selectedEvent.id : 0} cancelFormOpen={this.handleFormCancel} 
                        createEvent={this.handleCreateEvent} selectedEvent={this.handleSelectedEvent} selectEvent={this.state.selectedEvent}
                            updateEvent={this.handleUpdateEvent} />}
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default EventDashboard;