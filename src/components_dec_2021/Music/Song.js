import React, {Component} from 'react';
import Songs from '../Music/Songs';

class Song extends Component {
    constructor(props){
        super(props);
        this.state = {
            songTitle: '',
            songs: []
        }
    }

    updateSongTitle(songTitle){
        this.setState({ songTitle: songTitle.target.value})
    }

    addSong(){
        if(this.state.songTitle === '') return
        let songArr = this.state.songs;
        songArr.push(this.state.songTitle);
        this.setState({songTitle: ''})
        this.textInput.focus()
    }

    handleKeyPress(e){
        if(e.key === 'Enter'){
            let songArr = this.state.songs;
            songArr.push(this.state.songTitle);
            this.setState({songTitle:''})
        }
    }

    deleteSong(index){
        const songs = this.state.songs;
        const newSongs = [
            ...songs.slice(0, index),
            ...songs.slice(index +1)
        ]
        this.setState({
            songs: newSongs
        })
    }

    editSong(index, value){
        let songs = this.state.songs;
        const newSongs = songs.map((song,i) => {
            if(i !== index){
                return song
            }
            return value;
        })
        this.setState({songs: newSongs})
        
    }


    
    render(){
        let song = this.state.songs.map((val, key) => {
            return <Songs 
            key = {key}
            text = {val}
            deleteMethod = { () => this.deleteSong(key)}
            editMethod = { this.editSong.bind(this, key)}
            />
        })
        return (
            <div className ="todoListMain">
                <h2>Song</h2>
                <input 
                    ref = { (input => {this.textInput = input} )}
                    className = 'header'
                    value = {this.state.songTitle}
                    onChange = { songTitle => this.updateSongTitle(songTitle)}
                    onKeyPress = { this.handleKeyPress.bind(this)}
                />

                <button onClick = { this.addSong.bind(this)}>Add</button>
                {song}
            </div>
        )
    }
}

export default Song;
