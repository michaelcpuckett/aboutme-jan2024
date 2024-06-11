# About Me Project

- Create a new folder in `people/` with your name
- Create an `index.html` file in that folder
- Needs a `<header>` and `<main>` tag
  - `<header>` should have a `<h1>` tag with your name
  - `<main>` should have a `<p>` tag with a short description of yourself
- Needs a `<style>` tag with CSS in it
  - Pick fonts, colors, etc.

## "My Favorite Things" Cards

- Needs a `<details>` tag
  - The `<summary>` should say "My Favorite Things"
  - Inside the `<details>` tag, needs a `<ul>` tag with a list of your favorite things
  - Each `<li>` in the `<ul>` should be a presented as a "card"[0]
    - Each card should have a `<img>` tag with a picture of the thing
    - Each card should have a `<h2>` tag with the name of the thing
    - Each card should have a `<p>` tag with a description of the thing, or why you like it
  - When on a small screen, the cards should be stacked
  - When on a large screen, the cards should be in a row (but should wrap if needed)

## User Preferences

- Allow the user to change the background color of the page
  - Create a `<form>` tag with a `<select>` tag inside
  - The `<select>` tag should have a few color `<option>`s
  - When the user selects a color, the background color of the page should change
    - You will need a `<script>` tag with JavaScript in it
  - The text color may need to change as well

## Use an API

- Use the [Dog API](https://random.dog/woof.json) to display a random dog
  - Create a `<button>` tag that says "Get Random Dog"
  - When the button is clicked, a random dog image should be displayed from the API
    - You will need a `<script>` tag with JavaScript in it
  - [BONUS] As each image is retrieved, add it to a slideshow so that you can arrow through them

## Dark Mode Toggle

- Create a widget that toggles between dark mode and light mode
  - When dark mode is enabled, the background should be dark and the text should be light
  - When dark mode is disabled, the background should be light and the text should be dark
    - You could use a `<button>` tag or an `<input type="checkbox">` tag for the widget
    - You may need to use CSS variables
    - You will need a `<script>` tag with JavaScript in it
    - Use the `localStorage` API to remember the user's preference
