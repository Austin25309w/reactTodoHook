import React from 'react';
import Player from './Player'
import Uploader from './Uploader';

class Music extends React.Component {
    render(){
        return (
            <div>
                <h1> Music Streaming </h1>
                <Uploader/>
                <Player/>
                
            </div>
        )

    }
}

export default Music 