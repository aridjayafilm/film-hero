/**
 * Nav.js
 * Styled Component for the Navbar
 */
import styled from "styled-components";

const Nav = styled.nav`
    background: ${props => props.theme.colors.NavBarBackground};
    height: 60px;
    padding: 5px;
    
    display: flex;
    place-content: space-between;
    align-items: center;

    div {
      display: flex;
      align-items: center;
    }
`;

export default Nav