import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from '../redux/API/apiSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const characters = useSelector(state => state.api.characters);
  console.log(characters);
  const status = useSelector(state => state.api.status);
  const error = useSelector(state => state.api.error);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Star Wars Characters</h1>
      {characters.map(character => (
        <div key={character.id}>
          <h2>{character.name}</h2>
          <p>{character.planet}</p>
          <a href={`/details/${character.id}`}>View Details</a>
        </div>
      ))}
    </div>
  );
};

export default HomePage;