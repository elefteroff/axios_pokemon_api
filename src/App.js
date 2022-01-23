import './App.css';
import React, {useState} from 'react';
import axios from 'axios';

function App() {

  const [pokemon, setPokemon] = useState([]);

  const getAxiosPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => {
        console.log(response.data)
        setPokemon([response.data])
      })
      .catch(error => console.log(error))
  }

  // const pokemonIndex = pokemon.map(i => i.idx)
  // const pokemonResults = pokemonIndex.map(r => r.results)
  // const pokemonNames = pokemonResults.map(n => n.name)

  return (
    <div className="App">
      <h2>List of Pokemon</h2>
      <button onClick={getAxiosPokemon}>Fetch Pokemon</button>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Pokemon Names</th>
          </tr>
        </thead>
        <tbody>
          {
            pokemon.map( (pname) => {
              return (
                <tr key={pname}>
                  <td>{pname.name}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
