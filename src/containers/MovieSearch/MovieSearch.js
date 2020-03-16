import React, { useState } from 'react';
import { Input } from 'antd';
import { useLoadMovies } from '../../hoc/LoadMovies';
import * as movieAPI from '../../services/movieAPI';
import './MovieSearch.less';

const { Search } = Input;

const MovieSearch = () => {
  const [value, setValue] = useState('');
  const [refresh, setRefresh] = useState(false);

  const getMovies = async () => {
    if (value) {
      return movieAPI.searchMovies(value);
    }
    return null;
  }

  const movies = useLoadMovies(getMovies, refresh);


  return (
    <>
      <h1 className="page-header search-header" >Movie Search
      <Search
          enterButton
          allowClear
          placeholder="Search by Movie Titles..."
          onSearch={value => {
            setValue(value);
            setRefresh(!refresh)
          }}
        />
      </h1>
      {movies}
    </>
  );
}

export default MovieSearch;
