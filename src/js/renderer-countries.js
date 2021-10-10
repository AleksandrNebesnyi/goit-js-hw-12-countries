import countryCard from "../template/country-card.hbs";
import CountriesList from "../template/search-countries-list.hbs";
import { error } from "@pnotify/core";

// import "@pnotify/core/dist/BrightTheme.css";
// import * as PNotifyDesktop from "@pnotify/desktop";
import getRefs from "./getRefs";
const refs = getRefs();

// const myError = error({
//   text: "Too many matches found. Please enter a more specific query!",
// });

// defaults.delay = 2000;
// defaults.closer = false;
// defaults.sticker = false;
// defaultModules.set(PNotifyDesktop, {});

// /**
//  * Класс который рендерит разметку на основе полученных
//  * данных о стране или странах
//  */

class RenderCoutries {
  constructor() {
    //   список стран
    this.CountriesList = refs.countriesLlist;
    //   карточка страны
    this.countryCardContainer = refs.countryCardContainer;
    this.error = error;
  }

  RenderCountriList(data) {
    this.clearCountriesList();
    this.clearCountryCardContainer();
    this.clearErrorMesage();
    if (data.length === 1) {
      // рендерим по шаблону карточку с данными по стране.
      this.countryCardContainer.insertAdjacentHTML(
        "beforeend",
        countryCard(data)
      );
    } else if (data.length < 10) {
      // рендерим список стран.
      this.CountriesList.insertAdjacentHTML("beforeend", CountriesList(data));
    } else {
      error({
        text: "Too many matches found. Please enter a more specific query!",
      });
    }
  }
  // Очистка списка стран
  clearCountriesList() {
    this.CountriesList.innerHTML = "";
  }

  // Очистка карточки страны
  clearCountryCardContainer() {
    this.countryCardContainer.innerHTML = "";
  }

  clearErrorMesage() {
    this.error = "";
  }
}

const renderCountries = new RenderCoutries();
export default renderCountries;
