# Landing Page

This project dynamically builds a navigation menu for sections on a webpage, sets an active class on sections in the viewport during scrolling, and enables smooth scrolling to specific sections when clicked.

## Project Description

The **Landing Page** project provides an interactive and dynamic user experience by:
- Building a navigation menu for predefined sections on the page.
- Setting an active class on the section currently in the viewport as the user scrolls.
- Enabling smooth scrolling to a selected section when clicked in the navigation menu.

## Features

- **Dynamic Navigation**: Automatically generates navigation links for predefined sections.
- **Active Class Setting**: Adds an `active` class to the section currently in the viewport.
- **Smooth Scrolling**: Scrolls smoothly to the target section when clicked.

## Usage

1. Add sections to your HTML with unique `id` attributes:
    ```html
    <section id="section1">Content for Section 1</section>
    <section id="section2">Content for Section 2</section>
    <section id="section3">Content for Section 3</section>
    <section id="section4">Content for Section 4</section>
    ```

2. Include the JavaScript file in your project:
    ```html
    <script src="js/app.js"></script>
    ```

3. Add a navigation container in your HTML:
    ```html
    <ul id="navbar__list"></ul>
    ```

4. The script will automatically build the navigation and enable the features described.

## Dependencies

This project does not rely on external libraries or frameworks. It uses plain JavaScript.
