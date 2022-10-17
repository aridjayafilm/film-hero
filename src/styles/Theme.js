/**
 * Theme.js
 * Provides the theme for the app
 */
import React from "react";
import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import ThemeContext from "../contexts/ThemeContext";

// Styles
const lightTheme = {
    colors: {

        // Border Color
        BorderColor: '#DCDCDC',

        // Backgrounds
        NavBarBackground: '#a7d2e8',
        PageBackground: '#ffffff',
        CardBackground: '#FFFFFF',
        FooterBackground: '#a7d2e8',
        RatingBackground: '#a7d2e8',
        CardOverlayBackground: '#d5d5d5',
        MessageBoxBackground: '#fc415e',

        // Font Colours
        SiteTitle: '#000000',
        SiteTitleHover: '#FFFFFF',
        Heading: '#000000',
        HeadingHover: '#222222',
        Paragraph: '#000000',
        Footer: '#FFFFFF',
        Rating: '#FFFFFF',

        // Buttons
        ButtonBackground: '#ffffff',
        ButtonBackgroundActive: '#000000',
        ButtonBackgroundHover: '#a7d2e8',
        ButtonFontColor: '#000000',
        ButtonFontColorActive: '#ffffff',
        ButtonFontColorHover: '#ffffff',

        // Input
        InputFontColor: '#000000',
        InputBackgroundColor: '#FFFFFF',

        // Genre Tags
        BubbleBackground: '#000000',
        BubbleFont: '#FFFFFF'

    },
    fonts: ["sans-serif", "Open Sans"],
    fontSizes: {
        small: "1em",
        medium: "2em",
        large: "3em"
    }
};

const darkTheme = {
    colors: {

        // Border Color
        BorderColor: '#000000',

        // Backgrounds
        NavBarBackground: '#29617c',
        PageBackground: '#1c1c1c',
        CardBackground: '#1c1c1c',
        FooterBackground: '#29617c',
        RatingBackground: '#29617c',
        CardOverlayBackground: '#1c1c1c',
        MessageBoxBackground: '#fc415e',

        // Font Colours
        SiteTitle: '#FFFFFF',
        SiteTitleHover: '#DDDDDD',
        Heading: '#FFFFFF',
        HeadingHover: '#DDDDDD',
        Paragraph: '#FFFFFF',
        Footer: '#FFFFFF',
        Rating: '#FFFFFF',

        // Buttons
        ButtonBackground: '#313131',
        ButtonBackgroundActive: '#000000',
        ButtonBackgroundHover: '#29617c',
        ButtonFontColor: '#FFFFFF',
        ButtonFontColorActive: '#ffffff',
        ButtonFontColorHover: '#ffffff',

        // Input
        InputFontColor: '#FFFFFF',
        InputBackgroundColor: '#313131',

        // Genre Tags
        BubbleBackground: '#FFFFFF',
        BubbleFont: '#000000'

    },
    fonts: ["sans-serif", "Open Sans"],
    fontSizes: {
        small: "1em",
        medium: "2em",
        large: "3em"
    }
};

const Theme = ({ children }) => {
    const { darkMode } = useContext(ThemeContext);
    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>{children}</ThemeProvider>
    );
}

export default Theme;
