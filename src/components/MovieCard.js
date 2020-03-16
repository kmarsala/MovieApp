import React from 'react';
import { Card } from 'antd'
import { BASE_POSTER_PATH } from '../constants/Constants';
import './MovieCard.less';

const MovieCard = ({ movie }) => {

    const renderRedirect = () => {
        window.location.href = `/movie/${movie.id}`;
    };

    return (
        <Card hoverable className="movie-card" onClick={() => renderRedirect(movie.id)}>
            {movie.poster_path && (
                <img
                    src={`${BASE_POSTER_PATH}/w300${movie.poster_path}`}
                    alt="movie poster"
                    className="movie-poster"
                />
            )}
            <div className="movie-details">
                <h1 className="movie-title">{movie.title}</h1>
                <p className="movie-overview">
                    <strong>Synopsis:</strong> {movie.overview}
                </p>
                <p className="movie-released">
                    <strong>Release Date:</strong> {movie.released}
                </p>
            </div>
        </Card>
    )
};

export default MovieCard;
