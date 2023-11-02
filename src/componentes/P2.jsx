import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokeAPI = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonName, setPokemonName] = useState('pikachu');

  useEffect(() => {
 
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(response => {
        setPokemonData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [pokemonName]);

  const handleInputChange = (event) => {
    setPokemonName(event.target.value.toLowerCase());
  };

return (
    <div>
      <h1>PokeAPI</h1>
      <label>Nombre del pokemon:</label>
      <input type="text" onChange={handleInputChange} value={pokemonName} />
      {pokemonData && (
        <div>
          <h2>{pokemonData.name}</h2>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
            <p>Altura: {pokemonData.height}</p>
            <p>Peso: {pokemonData.weight}</p>
            <p>Tipos: {pokemonData.types.map(type => type.type.name).join(', ')}</p>
        </div>
      )}
    </div>
  );
};


export default PokeAPI;