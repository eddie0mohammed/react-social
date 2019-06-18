import React, { Component } from 'react'
import { List, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class EventListAttendee extends Component {
    render() {
        return (
            <List.Item>
                <Image as={Link} to={`/profile/${this.props.attendee.id}`} size="mini" circular src={this.props.attendee.photoURL} />
            </List.Item>
        )
    }
}

export default EventListAttendee;