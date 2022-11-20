import './App.css'
import Nav  from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import { useState } from 'react';

function App() {
  const [characters, setCharacters] = useState([])
    
  function onSearch(input) {
    const example = {
      name: 'Morty Smith',
      species: 'Human',
      gender: 'Male',
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    };

    setCharacters([...characters, example])
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Nav onSearch={onSearch} />
      </div>

      <div>
        <Cards characters={characters} />
      </div>
      <hr />
    </div>
  );
}

export default App
