# Lotto Number Generator

## Overview

This application is a simple and visually appealing Lotto Number Generator. It allows users to generate a set of unique random numbers for a lottery draw with the click of a button. The application is built using modern web technologies, including HTML, CSS, and JavaScript, and it incorporates Web Components for a modular and maintainable structure.

## Style, Design, and Features

### Implemented Features:

*   **Lotto Number Generation:** Generates 6 unique random numbers between 1 and 45.
*   **Interactive UI:** A user-friendly interface with a button to trigger the number generation and a display area for the results.
*   **Modern Design:** A visually appealing design with a clean layout, modern fonts, and a vibrant color scheme.
*   **Web Components:** The lottery number display is encapsulated in a Web Component for reusability.
*   **Responsive Design:** The layout adapts to different screen sizes.

### Design Elements:

*   **Typography:** Uses the "Roboto" font from Google Fonts. Headings are bold and larger to create a clear visual hierarchy.
*   **Color Palette:** A vibrant color scheme with a dark background and bright colors for the numbers and button to create a high-contrast, energetic look.
*   **Layout:** A centered layout using flexbox for easy readability.
*   **Visual Effects:** A subtle noise texture on the background, multi-layered drop shadows for depth, and a "glow" effect on the button and generated numbers.
*   **Iconography:** Uses an icon on the button for better user understanding.

## Current Plan

The current plan is to transform the existing "Hello World" application into a fully functional and visually appealing Lotto Number Generator.

### Steps:

1.  **Update `index.html`:**
    *   Change the title to "Lotto Number Generator".
    *   Add a container for the lottery application.
    *   Include a `lotto-display` custom element to show the numbers.
    *   Add a button to generate the numbers.
    *   Link to Google Fonts.

2.  **Update `style.css`:**
    *   Add a global reset and basic styling.
    *   Style the main container, button, and the `lotto-display` component.
    *   Implement the modern design elements described above.

3.  **Update `main.js`:**
    *   Create the `LottoDisplay` Web Component to display the generated numbers.
    *   Implement the lottery number generation logic.
    *   Add an event listener to the "Generate" button to trigger the number generation and update the `lotto-display` component.
