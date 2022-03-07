/* eslint-disable prettier/prettier */
import { Header, Nav, Main, Footer } from "./components";

function render() {
  document.querySelector("#root").innerHTML = `
    ${Header()}
    ${Nav()}
    ${Main()}
    ${Footer()}
  `;

  addEventListeners();
}

render();

function addEventListeners() {


document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > ul").classList.toggle("hidden--mobile");
})};

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  Array.from(event.target.elements).forEach((el) => {
    console.log("Input Type: ", el.type);
    console.log("Name: ", el.name);
    console.log("Value: ", el.value);
  });

});
