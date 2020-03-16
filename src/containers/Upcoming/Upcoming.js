import React from 'react';
import { useLoadMovies } from '../../hoc/LoadMovies'
import * as movieAPI from '../../services/movieAPI';
import './Upcoming.scss';

const Upcoming = () => {
  const getMovies = async () => {
    return movieAPI.getUpcoming();
  }

  const movies = useLoadMovies(getMovies)

  return (
    <>
      <h1>Upcoming Movies</h1>
      {movies}
    </>
  );
}

export default Upcoming