import React, { useState, useEffect } from 'react';
import { Breakpoint } from 'react-socks';
import { useHistory } from 'react-router-dom'
import { getMovieDetailsById, getMovieReviews } from '../../services/movieAPI';
import MovieDetails from './MovieDetails';
import MovieDetailsMobile from './MovieDetailsMobile';
import './MovieDetailsContainer.scss';

const MovieDetailsContainer = props => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [movieReviews, setMovieReviews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const history = useHistory();


  useEffect(() => {
    const loadData = async () => {
      if (props.match.params.id) {
        try {
          const movieInfo = await getMovieDetailsById(props.match.params.id);
          const movieReviews = await getMovieReviews(props.match.params.id);
          setMovieInfo(movieInfo);
          setMovieReviews(movieReviews)
        } catch (err) {
          setError(true)
        }
        setLoading(false)
      }
    }
    loadData();
  })



  let movieDetails = null;

  if (error) {
    movieDetails = (
      <h3>Woops, something went wrong trying to fetch movie details.</h3>
    );
  }

  if (loading) {
    movieDetails = (
      <>
        <h1>Movie Details</h1>
        <h3>Loading movie details now...</h3>
      </>
    );
  }

  if (!loading && movieInfo) {
    movieDetails = (
      <div className="movie-details-wrapper">
        <div className="movie-details-title">
          <i
            className="fa fa-chevron-left"
            onClick={() => history.goBack()}
            aria-hidden="true"
          />
          <h1>{movieInfo.title}</h1>
        </div>
        <Breakpoint medium down>
          <MovieDetailsMobile
            movieInfo={movieInfo}
            movieReviews={movieReviews}
          />
        </Breakpoint>
        <Breakpoint large up>
          <MovieDetails
            movieInfo={movieInfo}
            movieReviews={movieReviews}
          />
        </Breakpoint>
      </div>
    );
  }

  return <>{movieDetails}</>;
}


export default MovieDetailsContainer;
