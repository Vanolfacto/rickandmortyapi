import React, { useEffect, useState } from 'react';

const Character = ({ show, index, noimg }) => {
  const [episodeData, setEpisodeData] = useState(null);
  useEffect(() => {
    fetch(show.episode[0])
      .then(res => res.json())
      .then(res => setEpisodeData(res));
  }, []);
  return (
    <div className="character">
      <img className="image" src={show?.image ? show.image : noimg} alt="" key={index} />
      <div className="about">
        <h1 className="charactername">{show.name}</h1>
        <p className="status">
          {show.status}-{show.species}
        </p>
        <p className="greytext">Last known location:</p>
        <p className="location">{show.location.name}</p>
        <p className="greytext">First seen in:</p>

        <p className="origin">{episodeData ? episodeData.name : null}</p>
      </div>
    </div>
  );
};

export default Character;