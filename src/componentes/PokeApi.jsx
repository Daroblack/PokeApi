import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokeAPI = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonName, setPokemonName] = useState('pikachu'); // Default Pokemon

  useEffect(() => {
    // datos de la api
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(response => {
        setPokemonData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [pokemonName]);

  const InputChange = (event) => {
    setPokemonName(event.target.value.toLowerCase());
  };

return (
    <div>
      <h1>PokeAPI</h1>
      <label>Nombre del pokemon:</label>
      <input type="text" onChange={InputChange} value={pokemonName} />
      {pokemonData && (
        <div>
          <h2>{pokemonData.name}</h2>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
        </div>
      )}
    </div>
  );
};

//funciona hasta aca---------------

const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
const pokemonNameOrId = {pokemonName};

const pokemonInfo = document.getElementById('pokemon-info');

axios.get(apiUrl + pokemonNameOrId)
    .then(function (response) {
        const pokemon = response.data;

        // Actualiza los elementos en la página con la información del Pokémon
        pokemonInfo.innerHTML= `
            <p>Nombre: ${pokemon.name}</p>
            <p>Altura: ${pokemon.height}</p>
            <p>Peso: ${pokemon.weight}</p>
            <p>Tipos: ${pokemon.types.map(type => type.type.name).join(', ')}</p>
        `;
    })




export default PokeAPI;