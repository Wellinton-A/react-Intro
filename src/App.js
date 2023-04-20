import { Component } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import "./App.css"

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      filter: ''
    }
    console.log('Constructor')
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(users => {
      this.setState({
        monsters: users
      })
      console.log('Component')
    })

}

  handleChange = e => this.setState({filter: e.target.value.toLowerCase()})

  render() {
    console.log('Render')
    const { filter, monsters } = this.state;
    const { handleChange } = this;
    const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().match(filter))
    
    return (
      <div className="App">
        <SearchBox className={'search-box'} placeHolder={'Search Monsters'} change={handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
  );
}
}

export default App;
