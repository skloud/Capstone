/* eslint-disable prettier/prettier */
import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
//import axios from "axios";
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

  addEventListeners();
}

//render();


//const options = {
//   method: 'GET',
//   url: 'https://cocktails3.p.rapidapi.com/random',
//   headers: {
//     'X-RapidAPI-Host': 'cocktails3.p.rapidapi.com',
//     'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

//const options = {
//   method: 'POST',
//   url: 'https://yelpapiserg-osipchukv1.p.rapidapi.com/getAutocomplete',
//   headers: {
//     'content-type': 'application/x-www-form-urlencoded',
//     'X-RapidAPI-Host': 'YelpAPIserg-osipchukV1.p.rapidapi.com',
//     'X-RapidAPI-Key': '35593ccd76msh93301d75afe9c69p135196jsn046cce0d7c59'
//   },
//   data: {text: '<REQUIRED>', accessToken: '<REQUIRED>'}
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

  function addEventListeners(st) {

    document.querySelectorAll("nav a").forEach((navLink) =>
      navLink.addEventListener("click", (event) => {
        event.preventDefault();
        render(state[event.target.title]);
      })
    );

    document
      .querySelector(".fa-bars")
      .addEventListener("click", () =>
        document.querySelector("nav > ul").classList.toggle("hidden--mobile")
      );
  }

  // router.hooks({
  //   before: (done, params) => {
  //     const page = params && params.hasOwnProperty("page") ? capitalize(params.page) : "Reviews";

  //     if (page === "Reviews") {
  //       axios
  //         .get(
  //           `https://api.openweathermap.org/data/2.5/weather?appid=fbb30b5d6cf8e164ed522e5082b49064&q=st.%20louis`
  //         )
  //         .then(response => {
  //           state.Home.weather = {};
  //           state.Home.weather.city = response.data.name;
  //           state.Home.weather.temp = response.data.main.temp;
  //           state.Home.weather.feelsLike = response.data.main.feels_like;
  //           state.Home.weather.description = response.data.weather[0].main;
  //           done();
  //         })
  //         .catch(err => console.log(err));
  //     }
  //   }
  // });




router
  .on({
    "/": () => render(state.Home),
    ":page": (params) => {
      let page = capitalize(params.data.page);
      render(state[page]);
    },
  })
  .resolve();



//   import axios from "axios";

// const options = {
//   method: 'POST',
//   url: 'https://yelpapiserg-osipchukv1.p.rapidapi.com/getBusinesses',
//   headers: {
//     'content-type': 'application/x-www-form-urlencoded',
//     'X-RapidAPI-Host': 'YelpAPIserg-osipchukV1.p.rapidapi.com',
//     'X-RapidAPI-Key': '35593ccd76msh93301d75afe9c69p135196jsn046cce0d7c59'
//   },
//   data: {
//     term: ['"brunch"', '"brunch"'],
//     categories: '"brunch,breakfast,family"',
//     THIS IS YOU YELP API--------->accessToken: '<REQUIRED>'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
