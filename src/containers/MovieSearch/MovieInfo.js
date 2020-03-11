import React from 'react';
import MovieList from '../../components/Movie/MovieList';

const MovieInfo = (props) => {
    const { movies, loading, error, prevSearch } = props;

    if (!movies) {
        return (
            <h3>No movies match your search terms. Please try again.</h3>
        )
    }
    return (
        <>
            <h2>Movie Results for: {prevSearch}</h2>
            <MovieList
                loading={loading}
                error={error}
                movies={movies}
            />
        </>
    )
}
export default MovieInfo;