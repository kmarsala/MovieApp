import React, { useState, useEffect } from 'react';
import { List } from 'antd';
import Genre from '../../components/Genre/Genre';
import * as movieAPI from '../../services/movieAPI';

const Genres = () => {
  const [genres, setGenres] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const loadData = async () => {
    try {
      const genreList = await movieAPI.getAllGenres();
      setGenres(genreList);
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  }

  useEffect(() => {
    loadData();
  }, [])

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
    <>
      <h1 className="page-header" > Choose a Genre</h1>
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
        }
        }
        className='page-content'
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
    </>
  );
}

export default Genres;
