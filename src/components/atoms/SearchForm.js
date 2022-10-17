/**
 * SearchForm.js
 * Is the container for the search button and text input
 */
import styled from "styled-components";

const SearchForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    gap: 20px;

    @media screen and (min-width:700px) {  
        display: flex;
        flex-direction: row;
        justify-content: center;
  }
`
;
export default SearchForm;