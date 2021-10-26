import countryCard from "../template/country-card.hbs";
import CountriesList from "../template/search-countries-list.hbs";
// Импорты pnotify

import {
  info,
  success,
  error,
  defaultModules,
  defaults,
  Stack,
} from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import * as PNotifyMobile from "@pnotify/mobile";
import "@pnotify/mobile/dist/PNotifyMobile.css";

defaults.delay = 1000;
defaultModules.set(PNotifyMobile, {});

import getRefs from "./getRefs";
const refs = getRefs();

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
      return info({
        title: "Too many matches found. Please enter a more specific query!",
        stack: new Stack({
          dir1: "down",
          dir2: "right", // Position from the top left corner.
          firstpos1: 90,
          firstpos2: 200, // 90px from the top, 200px from the left.
        }),
        modules: new Map([
          [
            ...defaultModules,
            [
              PNotifyMobile,
              {
                swipeDismiss: false,
              },
            ],
          ],
        ]),
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

// const renderCountries = new RenderCoutries();
// export default renderCountries;

export default new RenderCoutries();
