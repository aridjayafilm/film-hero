/**
 * Main.js
 * Styled Component the page container
 */
import styled from "styled-components";

const MainContainer = styled.div`
    margin: 0 auto;
    padding: 20px;
    background: ${props => props.theme.colors.PageBackground};
`;

export default MainContainer;