/**
 * SearchButton.js
 * Styled component for the searchbutton
 */
import styled from "styled-components";

const SearchButton = styled.input`
    width: 120px;
    padding: 8px 25px;

    border: 1px ${props => props.theme.colors.BorderColor} solid;
    border-radius: 4px;
    font-size: 15px;
    transition: .5s ease;

    color: ${props => props.theme.colors.ButtonFontColor};
    background: ${props => props.theme.colors.ButtonBackground};
    
    &:hover {
        color: ${props => props.theme.colors.ButtonFontHover};
        background: ${props => props.theme.colors.ButtonBackgroundHover};
    }

    @media screen and (min-width:1141px) {
        font-size: 16px;
    }
`;

export default SearchButton;