import React, { useState, useEffect } from 'react';
import MovieList from '../../components/Movie/MovieList';
import { useLoadMovies } from '../../hoc/LoadMovies'
import * as movieAPI from '../../services/movieAPI';
import './NowPlaying.scss';

const NowPlaying = () => {

  const getMovies = async () => {
    return movieAPI.getNowPlaying();
  }

  const movies = useLoadMovies(getMovies)

  return (
    <>
      <h1 className="now-playing-title">Movies In Theaters Now</h1>
      {movies}
    </>
  );
}


export default NowPlaying;