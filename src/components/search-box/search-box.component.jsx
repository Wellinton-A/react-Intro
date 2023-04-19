import { Component } from "react";

class SearchBox extends Component {

    render() {
        const { change, placeHolder } = this.props;

        return (
            <input placeholder={placeHolder} onChange={ change } type="search"/>
        )
    }
}

export default SearchBox;