const DOMAIN = 'https://boiling-mountain-84087.herokuapp.com/https://content.guardianapis.com/';
const API_KEY = 'c16c9692-03dc-491f-9a2d-c2d4d787689a'


// https://content.guardianapis.com/search?from-date=2010-10-10&to-date=2011-10-10&q=football&api-key=c16c9692-03dc-491f-9a2d-c2d4d787689a
// example search

const input = document.querySelector("#searchBar");
const button = document.querySelector("#search");
button.addEventListener("click", fetchHeadlines);
const user_from_date = document.querySelector("#from-date");
const user_to_date = document.querySelector("#to-date");

async function fetchHeadlines() {
  let data = [];

  const from_date = `search?from-date${user_from_date.value}`;
  const to_date = `&to-date${user_to_date.value}&`;
  const keywordSearch = `q=${input.value}&`;
  try {
    for (let i = 1; i <= 10; i++) {
      /// change i<=10 to however many pages you want it to
      const BASE_URL = `${DOMAIN}${from_date}${to_date}${keywordSearch}api-key=${API_KEY}&page=${i}`;
      let res = await axios.get(BASE_URL);
      data = [...data, ...res.data.response.results];
    }

    getWords(data);
  } catch (error) {
    console.log(error);
  }
}

function getWords(results) {
  let titles = [];
  for (let i = 0; i < results.length; i++) {
    headline = results[i].webTitle
    titles.push(headline);
  }
  console.log(titles);
  let finalWords = [];
  let repeatWords = {}; 
  titles.forEach((headline) => {
    headline.split(" ").forEach((word) => {
      if (repeatWords.hasOwnProperty(word)) {
        repeatWords[word] += 1
      } else {
        repeatWords[word] = 1
      }
    })
  })
  for (word in repeatWords) {
    if (repeatWords[word] > 5 && word.length > 3) {
      finalWords.push(word);
    }
  }
  finalWords.forEach(function (word) {
    let li = document.createElement('li');
    document.getElementById('words-list').append(li);
    li.innerHTML += word;
  })
  console.log(finalWords);
}

