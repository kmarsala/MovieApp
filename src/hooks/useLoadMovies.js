import React, { useState, useEffect } from 'react';
import MovieList from '../components/NewComponents/MovieList';

export const useLoadMovies = (getMovies, refresh = null) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            try {
                const movieList = await getMovies();
                setMovies(movieList);
            } catch (err) {
                setError(true);
            }
            setLoading(false);
        }
        loadData();
    }, [refresh]);

    if (error) {
        return <h3>Woops, something went wrong trying to fetch movies.</h3>;
    }

    if (loading) {
        return <h3>Loading movie data now...</h3>;
    }

    console.log('LOAD MOVIES: ', movies)
    if (movies) {
        return <MovieList movies={movies} />;
    }

    return <></>;
}

