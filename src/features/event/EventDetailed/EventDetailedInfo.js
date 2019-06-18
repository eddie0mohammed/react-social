import React, {useState} from 'react'
import { Segment, Grid, Icon, Button } from 'semantic-ui-react';
import EventDetailedMap from './EventDetailedMap';
import {format } from 'date-fns';


const EventDetailedInfo = (props) => {
  const [isMapOpen, showMapToggle] = useState(false);
    return (
           <Segment.Group>
              <Segment attached="top">
                <Grid>
                  <Grid.Column width={1}>
                    <Icon size="large" color="teal" name="info" />
                  </Grid.Column>
                  <Grid.Column width={15}>
                    <p>{props.event.description}</p>
                  </Grid.Column>
                </Grid>
              </Segment>
              <Segment attached>
                <Grid verticalAlign="middle">
                  <Grid.Column width={1}>
                    <Icon name="calendar" size="large" color="teal" />
                  </Grid.Column>
                  <Grid.Column width={15}>
                    {props.event.date &&
                    <span>{format(props.event.date.toDate(), 'EEEE do LLL')} at {' '} {format(props.event.date.toDate(), 'h:mm a')}</span>
                    }
                  </Grid.Column>
                </Grid>
              </Segment>
              <Segment attached>
                <Grid verticalAlign="middle">
                  <Grid.Column width={1}>
                    <Icon name="marker" size="large" color="teal" />
                  </Grid.Column>
                  <Grid.Column width={11}>
                    <span>{props.event.venue}</span>
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Button onClick={() => showMapToggle(!isMapOpen)} color="teal" size="tiny" content={isMapOpen ? 'Hide Map' : 'Show Map'} />
                  </Grid.Column>
                </Grid>
              </Segment>
              {isMapOpen && <EventDetailedMap lat={props.event.venueLatLng.lat} lng={props.event.venueLatLng.lng}/> }
            </Segment.Group>
    )
}

export default EventDetailedInfo
