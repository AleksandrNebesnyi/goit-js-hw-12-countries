import getRefs from "./getRefs";
import API from "./fetchCountries";
import debounce from "lodash.debounce";
import { error } from "@pnotify/core";
import RenderCountries from "./renderer-countries";

import countryCard from "../template/country-card.hbs";
import CountriesList from "../template/search-countries-list.hbs";
// var debounce = require("lodash.debounce");
// const myError = error({
//   text: "I'm an error message.",
// });
const refs = getRefs();
console.log(refs.countriesLlist);

// По значению инпута получаем массив стран с API и рендерим новые элементы
refs.input.addEventListener("input", debounce(onFilterChange, 500));
function onFilterChange(evt) {
  const filter = evt.target.value.toLowerCase();
  if (filter.trim() === "") return;
  API.fetchCountries(filter)
    .then((countries) => RenderCountriList(countries))
    // .then RenderCountries.RenderCountriList(countries))
    .catch((error) => console.log(error));
}

function RenderCountriList(data) {
  if (data.length === 1) {
    // рендерим по шаблону карточку с данными по стране.
    refs.countryCardContainer.insertAdjacentHTML(
      "beforeend",
      countryCard(data)
    );
  } else if (data.length < 10) {
    // рендерим список стран.
    refs.countriesLlist.insertAdjacentHTML("beforeend", CountriesList(data));
  } else {
    error({
      text: "Too many matches found. Please enter a more specific query!",
    });
  }
}
