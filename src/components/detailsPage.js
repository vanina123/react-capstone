import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { FaCircle, FaArrowLeft } from 'react-icons/fa';
import { fetchCharacters } from '../redux/API/apiSlice';

import './details.css';

const DetailsPage = () => {
  const { id } = useParams();
  const characters = useSelector((state) => state.api.data);
  const char = characters.results || {}; // Initialize as an empty object if not available
  const character = char[id - 1];
  // console.log(char);

  const status = useSelector((state) => state.api.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!character) {
    return <div>No character found!</div>;
  }

  return (
    <div className="detail">
      <Link to="/">
        {' '}
        <FaArrowLeft />
        {' '}
      </Link>
      <div className="pic">
        <img className="picture" src={character.image} alt="potrait" />
      </div>
      <div className="char-d">
        <h1>{character.name}</h1>
        <p>
          Gender:
          {character.gender}
        </p>
        <p>
          species:
          {character.species}
        </p>
        <p>
          created:
          {character.created}
        </p>
        <p className="flex">
          Status:
          {' '}
          {character.status === 'Alive' && (
            <FaCircle className="text-green" />
          )}
          {character.status === 'unknown' && (
            <FaCircle className="text-zinc" />
          )}
          {character.status === 'Dead' && <FaCircle className="text-red" />}
          {' '}
          {character.status}
        </p>
        <p>
          Origin:
          {character.origin.name}
        </p>
        <p>
          Last seen at:
          {character.location.name}
        </p>
        <p className="seen">
          Appearances:
          {character.episode.length}
          {' '}
          Episode(s)
        </p>
      </div>
    </div>
  );
};

export default DetailsPage;
