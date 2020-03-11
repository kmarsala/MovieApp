import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Breakpoint } from 'react-socks';
import Movie from './Movie';
import Card from '../Card/Card';
import './MovieList.scss';

const MovieList = props => {
  const [movieId, setMovieId] = useState(null);
  const [hasMovieDetails, setHasMovieDetails] = useState(false);

  const selectedMovieHandler = id => {
    if (id !== null) {
      setMovieId(id);
    }
  };

  const renderRedirect = () => {
    if (hasMovieDetails) {
      return <Redirect to={`/movie/${movieId}`} />;
    }
  };

  const { error, loading, movies } = props;
  let movieInfo = null;

  if (!loading && !error && movies.length > 0) {
    movieInfo = movies.map(movie => {
      return (
        <Card
          key={movie.id}
          movieId={movie.id}
          goToMovieDetails={selectedMovieHandler}
        >
          <Movie
            title={movie.title}
            overview={movie.overview}
            poster={movie.poster_path}
            released={movie.release_date}
          />
        </Card>
      );
    });
  }

  if (error) {
    movieInfo = (
      <h3>
        Woops, something went wrong trying to fetch movies in theaters now.
        </h3>
    );
  }

  if (loading) {
    movieInfo = <h3>Loading movie data now...</h3>;
  }

  return (
    <>
      <Breakpoint medium up>
        <div className="movie-list">
          {renderRedirect()}
          {movieInfo}
        </div>
      </Breakpoint>
      <Breakpoint small down>
        <div className="movie-list-mobile">
          {renderRedirect()}
          {movieInfo}
        </div>
      </Breakpoint>
    </>
  );
}


export default MovieList;