// с дефолтным экспортом функции fetchCountries(searchQuery), возвращающей промис с массивом стран, результат запроса к API.

/**
 * Сделал класс, чтобы в дальнейшем было удобнее
 * масштабировать и добавлять функционал.
 * Пока что сервис умеет получать строку (searchQuery),
 * делать запрос на сервер и возвращать полученные данные
 */

// const BASE_URL = "https://restcountries.com/v2/name/";
// export default function fetchCountries(searchQuery) {
//   {
//     return fetch(`${BASE_URL}${searchQuery}`).then((response) =>
//       response.json()
//     );
//   }
// }

// https://restcountries.com/v2/name/{name}

const BASE_URL = "https://restcountries.com/v2/name/";
export default function fetchCountries(searchQuery) {
  return fetch(`${BASE_URL}${searchQuery}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => `Ошибка при загрузке данных: ${error}`);
}
