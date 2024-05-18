//import logo from './logo.svg';
import imagen1 from '../src/assets/rick-morty.png'
import { useState } from 'react';
import './App.css';
import Personas from '../src/components/Personas';

function App() {
  const [characters, setCharacters] = useState(null)
  const reqApi = async () => {
    const api = await fetch ("https://rickandmortyapi.com/api/character")
    console.log(api);
    const characterApi = await api.json();
    console.log(characterApi);

    //console.log('hola');
    console.log(characters);
    setCharacters(characterApi.results);
    console.log(characters);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title"> Rick and Morty</h1>
        { characters ? (
        <Personas characters={characters}></Personas>
        ):(
        <>

        <img src={imagen1} className="imag-home" alt="logo"/>
        <button onClick={reqApi} className='btn-search'>
          Buscar personajes
        </button>
        </>
       
        )
        }
      </header>
    </div>
  );
}

export default App;
