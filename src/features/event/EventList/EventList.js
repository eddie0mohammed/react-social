import React, { Component } from 'react'
import EventListItem from './EventListItem';

class EventList extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.events && this.props.events.map(event => (
                    <EventListItem key={event.id} event={event} />
                ))}
            </React.Fragment>
        )
    }
}

export default EventList;