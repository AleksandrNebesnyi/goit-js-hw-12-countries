import CountriesService from "./countries.service";
import CountriesRenderer from "./countries.renderer";
import getRefs from "./getRefs";
import API from "./fetchCountries";
import debounce from "lodash.debounce";
import { error } from "@pnotify/core";
// var debounce = require("lodash.debounce");
const myError = error({
  text: "I'm an error message.",
});

const BASE_URL = "https://restcountries.com/v2/name/";
function fetchCountries(searchQuery) {
  return fetch(`${BASE_URL}${searchQuery}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => `Ошибка при загрузке данных: ${error}`);
}

fetchCountries("ita")
  .then(console.log)
  .catch((error) => console.log(error));

/*
 * 1. Рендерим разметку элементов списка
 * 2. Слушаем изменение фильтра
 * 3. Фильтруем данные и рендерим новые элементы
 */

// const refs = {
//   list: document.querySelector(".js-list"),
//   input: document.querySelector("#filter"),
// };

// refs.input.addEventListener("input", debounce(onFilterChange, 300));
// console.log();

// const listItemsMarkup = createListItemsMarkup(tech);
// populateList(listItemsMarkup);

// function createListItemsMarkup(items) {
//   return items.map((item) => `<li>${item.label}</li>`).join("");
// }

// function onFilterChange(evt) {
//   console.log("INPUT");
//   const filter = evt.target.value.toLowerCase();

//   const filteredItems = tech.filter((t) =>
//     t.label.toLowerCase().includes(filter)
//   );

//   const listItemsMarkup = createListItemsMarkup(filteredItems);
//   populateList(listItemsMarkup);
// }

// function populateList(markup) {
//   refs.list.innerHTML = markup;
// }
const refs = getRefs();

// fetchCountries(ital).then((data) => console.log);

// refs.input.addEventListener("input", debounce(onFilterChange, 500));
// function onFilterChange(evt) {
//   const filter = evt.target.value.toLowerCase();
//   fetchCountries(filter)
//     .then((countries) => console.log(countries))
//     .catch((error) => console.log(error));
//   // const filteredItem = tech.filter((item) => {
//   //   item.label.toLowerCase().includes(filter);
//   //   console.log(filteredItem);

//   // });
// }

// fetchCountries(event.target.value)
//   .then((countries) => CountriesRenderer.makeCountriesList(countries))
//   .catch((error) => console.log(error));

// API.fetchPokemon(searchQuery)
//     .then(renderPokemonCard)
//     .catch(onFetchError)
//     .finally(() => form.reset());
// }

// fetchCountries("us")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(`Ошибка при загрузке данных: ${error}`));

//    .then(data =>
//     {
//         this.progress.classList.add('hidden');
//         return data;
//     })
//     .catch(error => `Ошибка при загрузке данных: ${error}`);
// }
// if(event.target.value.trim() === '') return;
//     //Сервис для получения данных с сервера
//     CountriesService.fetchCountries(event.target.value)
//     .then(countries => CountriesRenderer.makeCountriesList(countries))
//     .catch(error => console.log(error));
// }, 500));
