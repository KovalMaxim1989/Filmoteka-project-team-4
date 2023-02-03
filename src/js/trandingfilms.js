// функція підвантаження трендових фільмів

// збереження жанрів у localStorage
import { MovieAPI } from './MoviesApiServise';
import { createMarkupFilmsList } from './markup';
import { DataService } from './data-service';
import { refs } from './refs';

const dataService = new DataService(); // create new instance Class Data Service
const movieAPI = new MovieAPI();

export function saveGenres() {
  movieAPI
    .getGenres()
    .then(data => {
      localStorage.setItem('GENRES', JSON.stringify(data));
    })
    .catch(error => console.log(error));
}

//підвантаження популярних фільмів

export function renderTrendMovie() {
  movieAPI.getTrendMovie().then(data => {
    const allGenres = JSON.parse(localStorage.getItem('GENRES'));
    const necessaryData = dataService.getDataTrendMovies(data, allGenres);
    const markupTrendMovies = createMarkupFilmsList(necessaryData);
    refs.moviesList.innerHTML = markupTrendMovies;
  });
}

// отримання актуальних жанрів для фільму

export function getTrendMovieGenres(genreIds) {
  // const allGenres = JSON.parse(localStorage.getItem('GENRES'));

  const result = [];
  genreIds.find(genreId => {
    checkGanres().forEach(genre => {
      if (genre.id === genreId) {
        result.push(genre.name);
      }
    });
  });

  return result;
}

// перевірка на наявність жанрів у localStorage

function checkGanres() {
  try {
    const savedData = localStorage.getItem('GENRES');
    return savedData === null ? [] : JSON.parse(savedData);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}
