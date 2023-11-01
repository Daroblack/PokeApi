import './App.css';
import PokeAPI from './componentes/pokeapi';

function App() {
  return (
    <div className="App">
  <PokeAPI />
  <h1>Información de Pokémon</h1>
    <div>
        <p>Nombre: </p>
        <p>Altura: </p>
        <p>Peso: </p>
        <p>Tipos: </p>
    </div>
    </div>
  );
}

export default App;
