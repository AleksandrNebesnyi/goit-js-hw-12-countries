import getRefs from "./getRefs";
import API from "./fetch-countries";
import debounce from "lodash.debounce";
import renderCountries from "./renderer-countries";

const refs = getRefs();

// По значению инпута получаем массив стран с API и рендерим новые элементы
refs.input.addEventListener("input", debounce(onInputChange, 500));
function onInputChange(evt) {
  const filter = evt.target.value.toLowerCase();
  if (filter.trim() === "") return;

  API.fetchCountries(filter)
    .then((countries) => renderCountries.RenderCountriList(countries))
    .catch((error) => console.log(error));
}
