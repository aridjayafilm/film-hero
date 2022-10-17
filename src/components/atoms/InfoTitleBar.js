/**
 * InfoTitleBar.js
 * Styled Component the info page title bar with the title and rating bubble
 */
import styled from "styled-components";

const InfoTitleBar = styled.div`
    display: flex;
    place-content: space-between;
    align-items: center;
    
    // Rating Bubble
    span {
        color: ${props => props.theme.colors.Rating};
        background: ${props => props.theme.colors.RatingBackground};
        border-radius: 50%;
        padding: 12px;
    }
`;
export default InfoTitleBar;