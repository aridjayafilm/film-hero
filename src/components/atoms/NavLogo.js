/**
 * NavLogo.js
 * Styled Component NavBar Logo
 */
import styled from "styled-components";

const NavLogo = styled.img`
  height: 40px;

  padding-left: 15px;

 @media screen and (min-width:500px) {
    height: 45px;
  }
  @media screen and (min-width:800px) {
    height: 50px;
  }
`;

export default NavLogo