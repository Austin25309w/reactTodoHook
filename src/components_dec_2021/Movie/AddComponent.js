import Movie from './Movie.js';
import React, {Component} from 'react';


class AddComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            movieText: '',
            movies: [],
        };
    }

updateMovieText(movieText){
    this.setState({movieText: movieText.target.value})
}

addMovie(){
    if(this.state.movieText === ''){return}

    let moviesArr = this.state.movies;
    moviesArr.push(this.state.movieText);
    this.setState({movieText: ''})
    this.textInput.focus();
}

handleKeyPress = (event) => {//enables to add when pressing enter on keyboard
    if(event.key === 'Enter'){
    let moviesArr = this.state.movies;
    moviesArr.push(this.state.movieText);
    this.setState({movieText: ''})
    }
}

deleteMovie(index) {
    const movies = this.state.movies;
    const newMovies = [
        ...movies.slice(0, index),
        ...movies.slice(index + 1)
    ];
    this.setState({
        movies: newMovies
    });
    // Notice movies !== new Movies
    // and movies still contains all the previous values
}


editMovie(index,value){
    const movies = this.state.movies;
    const newMovies = movies.map((movie, i) => {//HERE is EDIT
        if (i !== index) {
            return movie;
        }
        return value;
    });
    this.setState({ movies: newMovies });
    // Notice movies !== new Movies
    // and movies still contains the previous values
}

    render(){
        let movie = this.state.movies.map((val,key)=> {//prints on screen list of movies see line55
            return (<Movie 
            key={key} 
            text={val} 
            deleteMethod={() => this.deleteMovie(key)}
            editMethod={this.editMovie.bind(this, key)}
             />

            );

        });

        return (
            <div>
                <input type="text"
                    ref={((input)=>{this.textInput = input;})}
                    className="textInput"
                    value={this.state.movieText}
                    onChange={movieText => this.updateMovieText(movieText)}
                    onKeyPress={this.handleKeyPress.bind(this)}
                    />
                <button onClick={this.addMovie.bind(this)}>Add</button>
                {movie}

                </div>

        );
    }
}

export default AddComponent;