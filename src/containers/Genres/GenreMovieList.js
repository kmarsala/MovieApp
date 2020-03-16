import React from 'react';
import { Breakpoint } from 'react-socks';
import { useLoadMovies } from '../../hoc/LoadMovies';
import * as movieAPI from '../../services/movieAPI';
import './GenreMovieList.less';

const GenreMovieList = props => {

  const getMovies = async () => {
    return movieAPI.getMoviesByGenre(props.match.params.genreId);
  }

  const goToGenres = () => {
    window.location.href = `/genres`;
  };

  const movies = useLoadMovies(getMovies);

  return (
    <>
      <div className="page-header genre-header" onClick={goToGenres}>
        <i className="fa fa-chevron-left" aria-hidden="true" />
        <h1>{props.match.params.genreName}</h1>
      </div>
      {movies}
    </>
  );
}


export default GenreMovieList;
