/**
 * Icon.js
 * Styled Component for provider icons
 */
import styled from "styled-components";

const Icon = styled.img`
    border: 1px ${props => props.theme.colors.BorderColor} solid;
    border-radius: 3px;
`;

export default Icon;