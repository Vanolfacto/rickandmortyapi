import React, { useEffect, useState } from 'react';
import Character from './Character';
import './screen1.css';
const Screen1 = () => {
  const [character, setCharacter] = useState([]);
  const [location, setLocation] = useState([]);
  const [episode, setEpisode] = useState([]);
  const [characterinfo, setCharacterinfo] = useState([]);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character`)
      .then(res => res.json())
      .then(res => setCharacter(res.results));
    fetch(`https://rickandmortyapi.com/api/location`)
      .then(res => res.json())
      .then(res => setLocation(res.info));
    fetch(`https://rickandmortyapi.com/api/episode`)
      .then(res => res.json())
      .then(res => setEpisode(res.info));
    fetch(`https://rickandmortyapi.com/api/character`)
      .then(res => res.json())
      .then(res => setCharacterinfo(res.info));
  }, []);
  const noimg =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019';
  return (
    <>
      <h1 className="header">The Rick and Morty API</h1>
      <div className="body">
        <div className="characters">
          {character.map((show, index) => (
            <Character show={show} index={index} noimg={noimg} />
          ))}
        </div>
      </div>

      <div className="footer">
        <div className="outro">
          <p className="outrotext">CHARACTERS: {characterinfo.count}</p>
          <p className="outrotext">LOCATIONS: {location.count} </p>
          <p className="outrotext">EPISODES: {episode.count}</p>
        </div>
      </div>
    </>
  );
};

export default Screen1;
