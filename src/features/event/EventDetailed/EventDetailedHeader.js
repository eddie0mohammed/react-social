import React from 'react'
import { Segment, Item, Header, Button, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import {format } from 'date-fns';


const eventImageStyle = {
    filter: 'brightness(30%)'
};

const eventImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};

const EventDetailedHeader = (props) => {
    const {isHost, isGoing, goingToEvent, event, cancelGoingToEvent} = props;
    return (
        <div>
               <Segment.Group>
                  <Segment basic attached="top" style={{ padding: '0' }}>
                    <Image src={`/assets/categoryImages/${event.category}.jpg`} fluid style={eventImageStyle}/>
            
                    <Segment basic style={eventImageTextStyle}>
                      <Item.Group>
                        <Item>
                          <Item.Content>
                            <Header
                              size="huge"
                              content={event.title}
                              style={{ color: 'white' }}
                            />
                            <p>{event.date && format(event.date.toDate(), 'EEEE do LLLL')}</p>
                            <p>
                              Hosted by <strong><Link style={{color: 'white'}} to={`/profile/${event.hostUid}`}>{event.hostedBy}</Link></strong>
                            </p>
                          </Item.Content>
                        </Item>
                      </Item.Group>
                    </Segment>
                  </Segment>
            
                  <Segment attached="bottom" clearing>
                  {!isHost && (
                    <React.Fragment>
                      {isGoing ?
                         <Button onClick={() => cancelGoingToEvent(event)}>Cancel My Place</Button> 
                         : 
                         <Button onClick={() => goingToEvent(event)} color="teal">JOIN THIS EVENT</Button>}
                  </React.Fragment>)}
                    {isHost && 
                    <Button as={Link} to={`/manage/${props.event.id}`} color="orange" floated="right">
                      Manage Event
                    </Button>
                    }
                  </Segment>
                </Segment.Group>
        </div>
    )
}

export default EventDetailedHeader;