/**
 * P.js
 * Styled Component for paragraphs
 */
import styled from "styled-components";

const P = styled.p`
    margin: 10px 0;
    color: ${props => props.theme.colors.Paragraph};
`;
export default P;