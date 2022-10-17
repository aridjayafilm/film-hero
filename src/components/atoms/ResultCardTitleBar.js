/**
 * ResultCardTitleBar.js
 * Styled Component the Result card container
 */
import styled from "styled-components";

const ResultCardTitleBar = styled.div`
    display: flex;
    place-content: space-between;
    align-items: flex-start;
    margin: 15px;
  
    h3 {
        margin: 10px 0;
        color: ${props => props.theme.colors.Heading};
    }
  
    p {
        color: ${props => props.theme.colors.Rating};
        background: ${props => props.theme.colors.RatingBackground};
        border-radius: 50%;
        padding: 12px;
    }
`

export default ResultCardTitleBar;