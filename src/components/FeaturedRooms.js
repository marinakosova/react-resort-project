import React, { Component } from 'react';
import { RoomContext } from '../context';
import Loading from './Loading';
import Room from './Room';

class FeaturedRooms extends Component {
    static contextType = RoomContext
    render() {

        return (
            <div>
                featured
                <Room />
                <Loading />
            </div>
        );
    }
}

export default FeaturedRooms;
