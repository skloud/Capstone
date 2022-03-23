/* eslint-disable prettier/prettier */
import html from "html-literal";

export default () => html`
<section id="reviews">
  <h2>Reviews</h2>
  <p>Reviews go here. </p>
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
    Your review:
    <textarea name="Submit A Review"></textarea>
  </label>
  <!-- your other form fields go here -->
  <button type="submit">Submit Your Review</button>
</form>
</section>
`;
