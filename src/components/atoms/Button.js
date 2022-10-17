/**
 * Button.js
 * Styled Component for Button
 */
import styled, { css } from "styled-components";

const Button = styled.button`

    margin: 0 5px;
    border: 1px ${props => props.theme.colors.BorderColor} solid;
    padding: 8px 25px;
    border-radius: 4px;
    font-size: 15px;
    transition: .5s ease;

    color: ${props => props.theme.colors.ButtonFontColor};
    background: ${props => props.theme.colors.ButtonBackground};
  
    &:hover {
        color: ${props => props.theme.colors.ButtonFontHover};
        background: ${props => props.theme.colors.ButtonBackgroundHover};
    }
       
    ${props => props.active && css`
        color: ${props => props.theme.colors.ButtonFontColorActive};
        background: ${props => props.theme.colors.ButtonBackgroundActive};
    `}
`;

export default Button