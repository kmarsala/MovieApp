import React, { useState, useEffect } from 'react';
import MovieList from '../../components/Movie/MovieList';
import * as movieAPI from '../../services/movieAPI';
import './Upcoming.scss';

const Upcoming = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const movies = await movieAPI.getUpcoming();
        setMovies(movies)
      } catch (err) {
        setError(true)
      }
      setLoading(false)
    }
    loadData();
  })

  return (
    <>
      <h1>Upcoming Movies</h1>
      <MovieList
        loading={loading}
        error={error}
        movies={movies}
      />
    </>
  );
}

export default Upcoming