import React, { useState, useEffect } from 'react';
import MovieList from '../../components/Movie/MovieList';
import * as movieAPI from '../../services/movieAPI';
import './NowPlaying.scss';

const NowPlaying = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const movies = await movieAPI.getNowPlaying();
        setMovies(movies)
      } catch (err) {
        setError(true)
      }
      setLoading(false);
    }
    loadData()
  })


  return (
    <>
      <h1 className="now-playing-title">Movies In Theaters Now</h1>
      <MovieList
        loading={loading}
        error={error}
        movies={movies}
      />
    </>
  );
}


export default NowPlaying;