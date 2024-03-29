import React, { Component} from 'react'
import { Grid } from 'semantic-ui-react';
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedSidebar from './EventDetailedSidebar';
import { connect } from 'react-redux';
import { withFirestore } from 'react-redux-firebase';
// import {toastr} from 'react-redux-toastr';
import {objectToArray} from '../../../app/common/util/helpers';
import {goingToEvent, cancelGoingToEvent} from '../../user/userActions';


const actions = {
    goingToEvent, 
    cancelGoingToEvent
}

class EventDetailedPage extends Component {

    async componentDidMount(){
        const {firestore, match} = this.props;
        await firestore.setListener(`events/${match.params.id}`);
        
    }

    async componentWillUnmount(){
        const {firestore, match} = this.props;
        await firestore.unsetListener(`events/${match.params.id}`);
        
    }

    render () {
        const {event, auth, goingToEvent, cancelGoingToEvent} = this.props;
        const attendees = event && event.attendees && objectToArray(event.attendees);
        const isHost = event.hostUid === auth.uid;
        const isGoing = attendees && attendees.some(a => a.id === auth.uid);
    return (
        <div>
            <Grid>
                <Grid.Column width={10}>
                    <EventDetailedHeader event={event} isGoing={isGoing} isHost={isHost} goingToEvent={goingToEvent} cancelGoingToEvent={cancelGoingToEvent}/>
                    <EventDetailedInfo event={event} />
                    <EventDetailedChat />
                </Grid.Column>
                <Grid.Column width={6}>
                    <EventDetailedSidebar attendees={attendees}/>
                </Grid.Column>
            </Grid>
        </div>
    )
    }
}

const mapStateToProps = (state, ownProps) => {
    const eventId = ownProps.match.params.id; 
    let event = {};
    if (state.firestore.ordered.events && state.firestore.ordered.events.length > 0){
        event = state.firestore.ordered.events.filter(event => event.id === eventId)[0] || {};
    }
    return {
        event: event,
        auth: state.firebase.auth,
    }
}

export default withFirestore(connect(mapStateToProps, actions)(EventDetailedPage));
