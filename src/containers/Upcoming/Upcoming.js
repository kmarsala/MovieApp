import React from 'react';
import { useLoadMovies } from '../../hooks/useLoadMovies'
import * as movieAPI from '../../services/movieAPI';

const Upcoming = () => {
  const getMovies = async () => {
    return movieAPI.getUpcoming();
  }

  const movies = useLoadMovies(getMovies)

  return (
    <>
      <h1 className="page-header">Upcoming Movies</h1>
      {movies}
    </>
  );
}

export default Upcoming