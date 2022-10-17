/**
 * Search.js
 * Main search for the home page
 */
import { useState } from 'react'
import SearchForm from "../atoms/SearchForm";
import SearchInput from "../atoms/SearchInput";
import SearchButton from "../atoms/SearchButton";

/**
 * Search component
 * @param props
 * @returns {JSX.Element}
 */
const Search = (props) => {

    // Declare state variable to store the user input
    const [searchInput, setSearchInput] = useState('')

    // JSX
    return(
        <SearchForm onSubmit={(e) => {
            e.preventDefault();
            props.searchHandler(searchInput)
        }}>
            <SearchInput type="text" placeholder='Search for a title' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
            <SearchButton type="submit" value={'Search'} />
        </SearchForm>
    )
}

export default Search