import React, { useState, useEffect } from 'react';
import { withLastLocation } from 'react-router-last-location';
import { Breakpoint } from 'react-socks';
import MovieList from '../../components/Movie/MovieList';
import * as movieAPI from '../../services/movieAPI';
import './Genres.scss';

const GenreList = props => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      if (props.match.params) {
        try {
          const movieList = await movieAPI.getMoviesByGenre(props.match.params.genreId);
          setMovies(movieList)
        } catch (err) {
          setError(true)
        }
        setLoading(false);
      }
    }
    loadData();
  }, []);


  return (
    <>
      <div
        className="genre-search-title"
        onClick={() => props.history.push('/genres')}
      >
        <Breakpoint medium up>
          <div>
            <i className="fa fa-chevron-left" aria-hidden="true" />
            <p>Back to Genres</p>
          </div>
          <h1>{props.match.params.genreName} Movies</h1>
        </Breakpoint>
        <Breakpoint small down>
          <i className="fa fa-chevron-left" aria-hidden="true" />
          <h1>{props.match.params.genreName}</h1>
        </Breakpoint>
      </div>
      <MovieList loading={loading} error={error} movies={movies} />
    </>
  );
}


export default withLastLocation(GenreList);
