// с дефолтным экспортом функции fetchCountries(searchQuery), возвращающей промис с массивом стран, результат запроса к API.

/**
 * Сделал класс, чтобы в дальнейшем было удобнее
 * масштабировать и добавлять функционал.
 * Пока что сервис умеет получать строку (searchQuery),
 * делать запрос на сервер и возвращать полученные данные
 */

// const BASE_URL = "https://restcountries.com/v2/name/";
// function fetchCountries(searchQuery) {
//   return fetch(`${BASE_URL}${searchQuery}`)
//     .then((response) => response.json())

//     .catch((error) => `Ошибка при загрузке данных: ${error}`);
// }
// export default { fetchCountries };
