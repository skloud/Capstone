/* eslint-disable prettier/prettier */
import html from "html-literal";
import foodspread from "/assets/img/foodspread.jpg";


export default (st) => html`
  <section id="jumbotron">
<h2>Welcome to All About Breakfast</h2>
<a id="heroButton" href="" onClick="alert('Hi! Please drink responsibly!')"
  >"Click On Me!"</a>

<h3>
<img src="${st.salmon}" />

</h3>

    <section>><h2><p>Fun Info About Breakfast. </p></h2>
  <p><ul>
    <ol>The word literally refers to breaking the fasting period of the prior night</ol>
    <br>
    <ol>Breakfast kick starts your metabolism</ol>
    <br>
    <ol>Breakfast balances blood sugar levels</ol>
    <br>
    <ol>Breakfast stimulates the brain</ol>
    <br>
    <ol>Exercising before breakfast may increase calories burned</ol>
    <br>
    <ol>People who eat breakfast tend to move more.</ol>
    <br>
    <ol>Skipping breakfast may impair thinking and test performance</ol>
    <br>
    <ol>February is National Hot Breakfast Month</ol>
    <br>
    <ol>The average person sits down to breakfast at 7:31am during the week and 8:28 am on the weekend</ol>
    </ul></p></section>
    <section><img src="${foodspread}" /></section>
  </section>
`;

