import React , { useEffect, useState } from 'react';

import './App.css';
import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';


const App = (props) => {
  const [ monsters, setMonsters ] = useState([]);
  const [ searchField, setSearchField ] = useState('');
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users)
    );
  }, []);

  useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const handleSearchInput = (event) =>{ 
    setSearchField(event.target.value.toLocaleLowerCase() )
  }

  
  return (
    <div className="App">
      <h1>Monsters Rolodex </h1>
      <SearchBox className='search-box' handleSearchInput={handleSearchInput} />
      <CardList monsters={filteredMonsters} />

    </div>)
}


export default App;
