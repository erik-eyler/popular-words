// const DOMAIN = 'https://content.guardianapis.com/';
// const API_KEY = 'c16c9692-03dc-491f-9a2d-c2d4d787689a'
// const from_date = `search?from-date${user_from_date}`;
// const to_date = `&to-date${user_to_date}&`;
// const keywordSearch = `q=${userSearch}&`;
// const BASE_URL = `${DOMAIN}${from_date}${to_date}${keywordSearch}api-key=${API_KEY}&`;


// https://content.guardianapis.com/search?from-date=2010-10-10&to-date=2011-10-10&q=football&api-key=c16c9692-03dc-491f-9a2d-c2d4d787689a
// example search

// const input = document.querySelector("#searchBar");
// const button = document.querySelector("#search");
// button.addEventListener("click", handleClick);

async function fetchHeadlines() {
  try {
    let res = await axios.get('https://content.guardianapis.com/search?from-date=2010-10-10&to-date=2011-10-10&q=football&api-key=c16c9692-03dc-491f-9a2d-c2d4d787689a');
    console.log(res.data.response.results);
  } catch (error) {
    console.log(error);
  }
}
fetchHeadlines();
// function handleClick() {
//   console.log(input.value)
//   fetchHeadlines(input.value)
// }