import React from 'react';
import { useLoadMovies } from '../../hooks/useLoadMovies';
import * as movieAPI from '../../services/movieAPI';

const NowPlaying = () => {

  const getMovies = async () => {
    return movieAPI.getNowPlaying();
  }

  const movies = useLoadMovies(getMovies);

  return (
    <>
      <h1 className="page-header">Movies In Theaters Now</h1>
      {movies}
    </>
  );
}

export default NowPlaying;