//const ACCESS_KEY = `Bearer ${eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjFjOGM1ZjQxMGU2ZThkNTgzZDQwYTkyM2QzODQ3ZCIsIm5iZiI6MTc1NDA4MDQwNy4yNDYsInN1YiI6IjY4OGQyNDk3YjM0MTljYTdkYTdjZWQzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ya7BGpG_bszBQUk5SLbUDVFOzsUzlyQZpSIsONxMme4}`;
const API_KEY = "921c8c5f410e6e8d583d40a923d3847d";
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const IMG_PATH = "https://images.tmdb.org/t/p/w1280";
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="`;
const IMG_PLACEHOLDER = 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById('main')
let movies =[]

function showMovies(movies) {

    main.innerHTML = ''
    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie
        console.log(poster_path)
        console.log(overview)
        

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
        <img src="${
            poster_path == null?IMG_PLACEHOLDER:
            IMG_PATH + poster_path}"
                alt="">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${parseFloat(vote_average.toFixed(2))}</span>
            </div>

            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        `


        main.appendChild(movieEl)
    })
    
}


function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
    
    
}

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
  
  const res = await fetch(url);
    const data = await res.json();
    console.log(data.results)
  showMovies(data.results)
}
