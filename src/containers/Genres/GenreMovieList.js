import React from 'react';
import { useHistory } from 'react-router-dom';
import { Breakpoint } from 'react-socks';
import { useLoadMovies } from '../../hoc/LoadMovies';
import * as movieAPI from '../../services/movieAPI';
import './Genres.less';

const GenreMovieList = props => {

  const getMovies = async () => {
    return movieAPI.getMoviesByGenre(props.match.params.genreId);
  }

  const history = useHistory();
  const movies = useLoadMovies(getMovies);

  return (
    <>
      <div
        className="genre-search-title"
        onClick={() => history.goBack()}
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
      {movies}
    </>
  );
}


export default GenreMovieList;
