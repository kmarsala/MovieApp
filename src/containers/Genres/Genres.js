import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Breakpoint } from 'react-socks';
import Genre from '../../components/Genre/Genre';
import * as movieAPI from '../../services/movieAPI';
import './Genres.scss';

const Genres = props => {
  const [genres, setGenres] = useState([])
  const [selectedGenre, setSelectedGenre] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [selectedGenreName, setSelectedGenreName] = useState('')

  useEffect(() => {
    const loadData = async () => {
      try {
        const genreList = await movieAPI.getAllGenres();
        setGenres(genreList)
      } catch (err) {
        setError(true)
      }
      setLoading(false)
    }
    loadData();
  })


  const selectedGenreHandler = (genreId, genreName) => {
    setSelectedGenre(genreId)
    setSelectedGenreName(genreName)
  };

  const renderRedirect = () => {
    if (selectedGenre !== 0 && selectedGenreName !== '') {
      return (
        <Redirect
          to={`/genres/${selectedGenreName}/${selectedGenre}`}
        />
      );
    }
  };

  let genreInfo = null;
  let info = null;

  if (!loading && !error && genres.length) {
    genreInfo = genres.map(genre => {
      return (
        <Genre
          key={genre.id}
          id={genre.id}
          name={genre.name}
          goToGenreList={selectedGenreHandler}
        />
      );
    });
  }

  if (error) {
    info = 'Woops, something went wrong trying to fetch genres.';
  }

  if (loading) {
    info = 'Loading genre data now...';
  }

  return (
    <div className="genres-page">
      <h1>Choose a Genre</h1>
      {(error || loading) && <h3 className="genre-info">{info}</h3>}
      <Breakpoint large up>
        <div className="genre-list">
          {renderRedirect()}
          {genreInfo}
        </div>
      </Breakpoint>
      <Breakpoint medium>
        <div className="genre-list">
          {renderRedirect()}
          {genreInfo}
        </div>
      </Breakpoint>
      <Breakpoint small down>
        <div className="genre-list">
          {renderRedirect()}
          {genreInfo}
        </div>
      </Breakpoint>
    </div>
  );
}

export default Genres;
