import React, { useState } from 'react';
import { Breakpoint } from 'react-socks';
import * as movieAPI from '../../services/movieAPI';
import MovieInfo from './MovieInfo';
import './MovieSearch.scss';

const MovieSearch = () => {
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [prevSearch, setPrevSearch] = useState(null);

  const handleChange = event => {
    event.preventDefault();
    setValue(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      setLoading(true);
      const movies = await movieAPI.searchMovies(value);
      setMovies(movies);
      setPrevSearch(value);
      setValue('');
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  };

  return (
    <>
      <h1>Movie Search</h1>
      <form className="search-form-wrapper" onSubmit={handleSubmit}>
        <Breakpoint medium up>
          <label className="search-label">
            Search Movie Titles Here:
              <input
              className="search-input"
              type="text"
              value={value}
              onChange={handleChange}
              placeholder="Movie title"
            />
          </label>
          <input type="submit" value="Search" />
        </Breakpoint>
        <Breakpoint small down>
          <label className="search-label">
            Search Movie Titles Here:
              <input
              className="search-input"
              type="text"
              value={value}
              onChange={handleChange}
              placeholder="Movie title"
            />
          </label>
          <input type="submit" value="Search" />
        </Breakpoint>
      </form>
      <MovieInfo loading={loading} movies={movies} error={error} prevSearch={prevSearch} />
    </>
  );
}
export default MovieSearch;
