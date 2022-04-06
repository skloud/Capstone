/* eslint-disable prettier/prettier */
import html from "html-literal";
import pancakes from "/assets/img/pancakes.jpg";
export default () => html`
<section id="reviews">
  <h2>Recipe Submissions</h2>
      </section>
  <section>
  <button type="submit">Submit Your Favorite Breakfast Recipe Here!</button>
  <form
  action="https://formspree.io/f/mleznwvn"
  method="POST"
>
  <label>
    Your email:
    <input type="email" name="email">
  </label>
  <label>
    Your recipe:
    <textarea name="Submit A Recipe"></textarea>
  </label>
  <!-- your other form fields go here -->
</form>
</section>
<section><img src="${pancakes}" /></section>
`;
