import React from 'react';
import './Genre.less';

const Genre = props => {
  const { id, name, goToGenreList } = props;
  return (
    <div key={id} className="genre-component" onClick={() => goToGenreList(id, name)} >
      <h3 className="genre-name">{name}</h3>
    </div>
  )
};

export default Genre;
