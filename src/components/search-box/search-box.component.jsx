import "./search-box.styles.css"

const SearchBox = ({ change, placeHolder, className }) => {
    return (
        <input className={ className } placeholder={placeHolder} onChange={ change } type="search"/>
    )
}

export default SearchBox;