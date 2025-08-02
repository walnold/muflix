//const ACCESS_KEY = `Bearer ${eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjFjOGM1ZjQxMGU2ZThkNTgzZDQwYTkyM2QzODQ3ZCIsIm5iZiI6MTc1NDA4MDQwNy4yNDYsInN1YiI6IjY4OGQyNDk3YjM0MTljYTdkYTdjZWQzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ya7BGpG_bszBQUk5SLbUDVFOzsUzlyQZpSIsONxMme4}`;
const API_KEY = "921c8c5f410e6e8d583d40a923d3847d";
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const IMG_PATH = "https://images.tmdb.org/t/p/w1280";
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="`;

const form = document.getElementById("form");
const search = document.getElementById("search");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
});

//get initial movies

getMovies(API_URL);

async function getMovies(url) {
  console.log("getting movies");
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.results);
}
