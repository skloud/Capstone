/* eslint-disable prettier/prettier */
import html from "html-literal";
import foodspread from "/assets/img/foodspread.jpg";
export default () => html`
  <section id="jumbotron">
<h2>Welcome to All About Breakfast</h2>
<a id="heroButton" href="" onClick="alert('Hi! Please drink responsibly!')"
  >"Click On Me!"</a>
  <section><img src="${foodspread}" /></section>
  <section>><h2><p>Fun Info About Breakfast. </p></h2>
  <p><ul>
    <ol>The word literally refers to breaking the fasting period of the prior night</ol>>
    <ol>Breakfast kicks tarts your metabolism</ol>>
    <ol>Breakfast balances blood sugar levels</ol>>
    <ol>Breakfast stimulates the brain</ol>>
    <ol>Exercising before breakfast may increase calories burned</ol>>
    <ol>People who eat breakfast tend to move more.</ol>>
    <ol>Skipping breakfast may impair thinking and test performance</ol>>
    <ol>February is National Hot Breakfast Month</ol>>
    <ol>The average person sits down to breakfast at 7.31am during the week and 8.28 am at the weekend</ol>
    </ul></p></section>
  </section>
`;
