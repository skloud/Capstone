/* eslint-disable prettier/prettier */
import html from "html-literal";

export default () => html`
  <section id="jumbotron">
<h2>Welcome to Entree's & Mimosa's</h2>
<a id="heroButton" href="" onClick="alert('Hi! Thank you for clicking!')"
  >"Click Here!"</a>

  <p>insert info about project </p>
</section>
<section>
  <form
  action="https://formspree.io/f/mleznwvn"
  method="POST"
>
  <label>
    Your email:
    <input type="email" name="email">
  </label>
  <label>
    Your message:
    <textarea name="Submit A Review"></textarea>
  </label>
  <!-- your other form fields go here -->
  <button type="submit">Submit</button>
</form>
</section>
`;




