/**
 * Bubble.js
 * Styled Component for the genre bubbles
 */
import styled from "styled-components";

const Bubble = styled.span`
    background-color: ${props => props.theme.colors.BubbleBackground};
    color: ${props => props.theme.colors.BubbleFont};
    
    border-radius: 4px;
    padding: 5px;
    font-size: 12px;
    margin: 2px;
`

export default Bubble;