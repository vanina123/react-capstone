import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const DetailsPage = () => {
  const { id } = useParams();
  const characters = useSelector(state => state.api.characters);
  const character = characters.find(c => c.id === id);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{character.name}</h1>
      <p>Planet: {character.planet}</p>
      <p>Height: {character.height}</p>
      <p>Gender: {character.gender}</p>
      {/* Render the rest of the character's details */}
    </div>
  );
};

export default DetailsPage;