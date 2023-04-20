import { Component } from "react";

import "./card-list.styles.css"

class CardList extends Component {

    
    render() {
        const { monsters } = this.props;
        const displayMonsters = monsters.map( monster =>
        <div key={monsters.indexOf(monster)} className="card-container">
            <img src={`https://robohash.org/${monster.id}?set=set2&size=200x200`} alt={`monster ${monster.name}`} />
            <h2> {monster.name} </h2>
            <p> { monster.email } </p>
        </div>
        )

        return (
            <div className="card-list">
                { displayMonsters }
            </div>
        )
    }
}

export default CardList;