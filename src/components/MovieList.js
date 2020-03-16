import React from 'react';
import { List } from 'antd'
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
    return (
        <List
            grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 3,
                xxl: 3,
            }}
            className='page-content'
            dataSource={movies}
            renderItem={movie => (
                <List.Item>
                    <MovieCard movie={movie} />
                </List.Item>
            )}
        />
    );
}


export default MovieList;