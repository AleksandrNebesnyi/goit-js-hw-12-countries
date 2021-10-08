import getRefs from "./getRefs";
import API from "./fetchCountries";
import debounce from "lodash.debounce";
import { error } from "@pnotify/core";
import RenderCountries from "./renderer-countries";
// var debounce = require("lodash.debounce");
// const myError = error({
//   text: "I'm an error message.",
// });
const refs = getRefs();

// По значению инпута получаем массив стран с API и рендерим новые элементы
refs.input.addEventListener("input", debounce(onFilterChange, 500));
function onFilterChange(evt) {
  const filter = evt.target.value.toLowerCase();
  if (filter.trim() === "") return;
  API.fetchCountries(filter)
    .then((countries) => {
      return RenderCountries.RenderCountriList(countries);
    })
    .catch((error) => console.log(error));
}
