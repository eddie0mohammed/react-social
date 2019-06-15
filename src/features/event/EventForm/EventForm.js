import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {createEvent, updateEvent} from '../eventAction';

class EventForm extends Component {

    state = {
      ...this.props.event
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        if (this.state.id){
          this.props.updateEvent(this.state);
          this.props.history.push(`/events/${this.state.id}`); 
        }else{
          const newEvent = {
            ...this.state,
            id:Math.random(),
            hostPhotoURL:'/assets/user.png',
            // attendees: [],
            
          }
          this.props.createEvent(newEvent);
          this.props.history.push(`/events/`);

        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount(){
      if (this.props.selectEvent !== null){
        this.setState({
          ...this.props.selectEvent
        })
        // console.log(this.props.selectEvent)
      }
    }

    render() {
        return (
                  <Segment>
                    <Form onSubmit={this.handleFormSubmit}>
                      <Form.Field>
                        <label>Event Title</label>
                        <input name="title" placeholder="Event Title" onChange={this.handleChange} value={this.state.title}/>
                      </Form.Field>
                      <Form.Field>
                        <label>Event Date</label>
                        <input name="date" type="date" placeholder="Event Date" value={this.state.date} onChange={this.handleChange}/>
                      </Form.Field>
                      <Form.Field>
                        <label>City</label>
                        <input name="city" placeholder="City event is taking place" value={this.state.city} onChange={this.handleChange}/>
                      </Form.Field>
                      <Form.Field>
                        <label>Venue</label>
                        <input name="venue" placeholder="Enter the Venue of the event" value={this.state.venue} onChange={this.handleChange}/>
                      </Form.Field>
                      <Form.Field>
                        <label>Hosted By</label>
                        <input name="hostedBy" placeholder="Enter the name of person hosting" value={this.state.hostedBy} onChange={this.handleChange}/>
                      </Form.Field>
                      <Button positive type="submit">
                        Submit
                      </Button>
                      <Button type="button" onClick={this.props.history.goBack}>Cancel</Button>
                    </Form>
                  </Segment>
                

        )
    }
}
const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = {
    title: '',
    date: '',
    city: '',
    venue: '',
    hostedBy: '',
    attendees: ''
  }
  if (eventId && state.events.length > 0){
    event = state.events.filter(event => event.id === eventId)[0];
  }
  return {
    event: event
  }
}

const actions = {
  createEvent,
  updateEvent
}

export default connect(mapStateToProps, actions)(EventForm);