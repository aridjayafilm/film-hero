/**
 * ResultCard.js
 * Styled Component the Result card when a user searches
 */
import styled from "styled-components";

const ResultCard = styled.div`
    background: ${props => props.theme.colors.CardBackground};
    margin: 10px 0;
    
    border: 1px ${props => props.theme.colors.BorderColor} solid;
    border-radius: 4px;
    width: 300px;
    position: relative;
    text-align: left;
  
    img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
        display: block;
    }

    p {
        font-size: 14px;
        padding: 15px;
        color: ${props => props.theme.colors.Paragraph};
    }
    
    section {
        color: ${props => props.theme.colors.Heading};
        opacity: 0;
        position: absolute;
        bottom: 0;
        left: 0;
        background: ${props => props.theme.colors.CardBackground};
        width: 100%;
        transition: .5s ease;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      
    }
    
    &:hover {
        section {
          opacity: 0.9;
        }
    }
    
    @media screen and (min-width:500px) {
        width: 200px;
    }

`

export default ResultCard;