import React, { Component } from 'react'
import EventListItem from './EventListItem';
import InfiniteScroll from 'react-infinite-scroller';

class EventList extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.events && this.props.events.length !== 0 &&
                    <InfiniteScroll pageStart={0} loadMore={this.props.getNextEvents} 
                        hasMore={!this.props.loading && this.props.moreEvents} initialLoad={false}>
                        {this.props.events && this.props.events.map(event => (
                            <EventListItem key={event.id} event={event} />
                        ))}

                    </InfiniteScroll>
                }
            </React.Fragment>
        )
    }
}

export default EventList;