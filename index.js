import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import axios from "axios";
import { capitalize } from "lodash";

const router = new Navigo("/");

function render(st) {
  document.querySelector("#root").innerHTML = `
    ${Header(st)}
    ${Nav(state.Links)}
    ${Main(st)}
    ${Footer()}
  `;

  router.updatePageLinks();

  addEventListeners(st);
}

render(state.Home);

function addEventListeners(st) {
  console.log(st);

  document.querySelectorAll("nav a").forEach(navLink =>
    navLink.addEventListener("click", event => {
      event.preventDefault();
      render(state[event.target.title]);
      console.log(state[event.target.title]);
    })
  );

  // add menu toggle to bars icon in nav bar
  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );
}

router.hooks({
  before: (done, params) => {
    let view = "Home";
    if (params && params.data && params.data.view) {
      capitalize(params.data.view);
      console.log(params.data.view);
    }

    if (view === "Home") {
      console.log("review");
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast`)
        .then(response => {
          console.log(response.data);
          state.Home.salmon = response.data.meals[5].strMealThumb;
          console.log(state.Home.salmon);
          done();
        })
        .catch(err => console.log(err));
    } else done();
  }
});

router
  .on({
    "/": () => render(state.Home),
    ":page": params => {
      let page = capitalize(params.data.page);
      render(state[page]);
    }
  })
  .resolve();
