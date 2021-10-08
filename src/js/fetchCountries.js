// с дефолтным экспортом функции fetchCountries(searchQuery), возвращающей промис с массивом стран, результат запроса к API.

const BASE_URL = "https://restcountries.com/v2/name/";
function fetchCountries(searchQuery) {
  return fetch(`${BASE_URL}${searchQuery}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => `Ошибка при загрузке данных: ${error}`);
}
export default { fetchCountries };
