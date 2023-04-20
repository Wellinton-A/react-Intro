import { Component } from "react";

import "./search-box.styles.css"

class SearchBox extends Component {

    render() {
        const { change, placeHolder, className } = this.props;

        return (
            <input className={ className } placeholder={placeHolder} onChange={ change } type="search"/>
        )
    }
}

export default SearchBox;