import React, { useState, useEffect } from 'react';
import { List } from 'antd';
import Genre from '../../components/Genre/Genre';
import * as movieAPI from '../../services/movieAPI';
import './Genres.less';

const Genres = () => {
  const [genres, setGenres] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const loadData = async () => {
      try {
        const genreList = await movieAPI.getAllGenres();
        setGenres(genreList);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    }
    loadData();
  })

  const selectedGenreHandler = (genreId, genreName) => {
    window.location.href = `/genres/${genreName}/${genreId}`;
  };

  let info = null;

  if (error) {
    info = <h3>Woops, something went wrong trying to fetch genres.</h3>;
  }

  if (loading) {
    info = <h3>Loading genre data now...</h3>;
  }


  return (
    <div className="genres-page">
      <h1>Choose a Genre</h1>
      {info}
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 4,
          xxl: 4,
        }}
        className='genreList'
        dataSource={genres}
        renderItem={genre => (
          <List.Item>
            <Genre
              key={genre.id}
              id={genre.id}
              name={genre.name}
              goToGenreList={selectedGenreHandler}
            />
          </List.Item>
        )}
      />
    </div>
  );
}

export default Genres;
