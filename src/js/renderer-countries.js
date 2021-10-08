import countryCard from "../template/country-card.hbs";
import CountriesList from "../template/search-countries-list.hbs";
import { error } from "@pnotify/core";
// import "@pnotify/core/dist/BrightTheme.css";
// import * as PNotifyDesktop from "@pnotify/desktop";
import getRefs from "./getRefs";
const refs = getRefs();

// defaults.delay = 2000;
// defaults.closer = false;
// defaults.sticker = false;
// defaultModules.set(PNotifyDesktop, {});

// /**
//  * Класс который рендерит разметку на основе полученных
//  * данных о стране или странах
//  */

// class CountriesRenderer
// {
//     constructor()
//     {
//         //список под инпутом
//         this.countriesList = document.querySelector('.js-countries-list');
//         //карточка страны
//         this.countryCard = document.querySelector('.js-country-card-container');
//     }

//     makeCountriesList(data)
//     {
//         this.clearCountriesList();
//         this.clearCountryCard();
//         /**
//          * Если бекенд вернул массив с одной страной, в интерфейсе
//          * рендерится разметка с данными о стране: название, столица,
//          * население, языки и флаг.
//          */
//         if(data.length === 1)
//         {
//             this.countryCard.insertAdjacentHTML('beforeend', countryCardTpl(data));
//         }
//         /**
//          * Если бекенд вернул от 2-х до 10-х стран, под инпутом
//          * отображается список имен найденных стран.
//          */
//         else if(data.length < 10)
//         {
//             this.countriesList.insertAdjacentHTML('beforeend', searchCountriesListTpl(data));
//         }
//         else
//         {
//             /**
//              * Если бекенд вернул больше чем 10 стран подошедших
//              * под критерий введенный пользователем, в интерфейсе
//              * отображается нотификация о том, что необходимо сделать
//              * запрос более специфичным.
//              */
//             error({
//                 text: 'Too many matches found. Please enter a more specific query!',
//               });
//         }
//     }

//     /**
//      * Очищает список под инпутом
//      */
//     clearCountriesList()
//     {
//         this.countriesList.innerHTML = '';
//     }

//     /**
//      * очищает карточку страны
//      */
//     clearCountryCard()
//     {
//         this.countryCard.innerHTML = '';
//     }
// }

// export default new CountriesRenderer();

function RenderCountriList(data) {
  if (data.length === 1) {
    // рендерим по шаблону карточку с данными по стране.
    refs.countryCardContainer.insertAdjacentElement(
      "beforeend",
      countryCard(data)
    );
  } else if (data.length < 10) {
    // рендерим список стран.
    refs.countryCardContainer.insertAdjacentElement(
      "beforeend",
      CountriesList(data)
    );
  } else {
    error({
      text: "Too many matches found. Please enter a more specific query!",
    });
  }
}
export default { RenderCountriList };
