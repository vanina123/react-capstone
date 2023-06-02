import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaCircle, FaSearch } from 'react-icons/fa';
import { fetchCharacters } from '../redux/API/apiSlice';
import './home.css';

const HomePage = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.api.data);
  const status = useSelector((state) => state.api.status);
  const error = useSelector((state) => state.api.error);
  const [filteredCharacters, setFilteredCharacters] = useState(characters.results);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  useEffect(() => {
    setFilteredCharacters(characters.results);
  }, [characters.results]);

  const handleSearch = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue);

    const filtered = characters.results.filter((character) => character.name.toLowerCase()
      .includes(inputValue.toLowerCase()));
    setFilteredCharacters(filtered);
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div className="home">
      <div className="flex2">
        <FaSearch />
        <input
          type="text"
          placeholder="Search for character"
          className="search"
          value={input}
          onChange={handleSearch}
        />
      </div>
      {filteredCharacters && filteredCharacters.map((character) => (
        <div key={character.id} className="all">
          <div className="pic">
            <a href={`/details/${character.id}`}>
              <img className="picture" src={character.image} alt="portrait" />
              <div className="card">
                <h2 className="card-name">{character.name}</h2>
                <p className="card-p">{character.planet}</p>
                <p className="text">
                  {character.status === 'Alive' && (
                    <FaCircle className="text-green" />
                  )}
                  {character.status === 'unknown' && (
                    <FaCircle className="text-zinc" />
                  )}
                  {character.status === 'Dead' && (
                    <FaCircle className="text-red" />
                  )}
                  {character.status}
                  {' '}
                  -
                  {character.species}
                </p>
              </div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
