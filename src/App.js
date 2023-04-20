import { useEffect, useState } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import "./App.css"

const App = () => {
  console.log('render')
  const [ filter , setFilter] = useState('');
  const [ monsters , setMonsters] = useState([]);
  const [ filteredMonsters , SetfilteredMonsters] = useState(monsters);
  console.log(filter)

  useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(resp => resp.json())
  .then(users => setMonsters(users))
  },[])

  const handleChange = (e) => {
    const filterChange = e.target.value.toLowerCase()
    setFilter(filterChange)
  }

  useEffect(() => {
    const filtered = monsters.filter((monster) => monster.name.toLowerCase().match(filter))
    SetfilteredMonsters(filtered)
  },[monsters, filter])
  
  return (
    <div className="App">
      <SearchBox className={'search-box'} placeHolder={'Search Monsters'} change={handleChange} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
