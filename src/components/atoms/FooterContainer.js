/**
 * Footer.js
 * Styled Component container for the site footer
 */
import styled from 'styled-components'

const FooterContainer = styled.div`
    background: ${props => props.theme.colors.FooterBackground};
    padding: 10px;
  
    p {
        margin: 0;
        color: ${props => props.theme.colors.Footer};
    }
`;

export default FooterContainer;