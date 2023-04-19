import { Component } from "react";

class CardList extends Component {

    
    render() {
        const { monsters } = this.props;
        const displayMonsters = monsters.map( monster => <h1 key={monsters.indexOf(monster)}> {monster.name} </h1>)

        return (
            <div>
                { displayMonsters }
            </div>
        )
    }
}

export default CardList;