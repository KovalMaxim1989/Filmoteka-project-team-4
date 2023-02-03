// функція підвантаження трендових фільмів

import { MovieAPI } from './MoviesApiServise';
import { createMarkupFilmsList } from './markup';
import { DataService } from './data-service';
import { refs } from './refs';

const dataService = new DataService();
const movieAPI = new MovieAPI();

// збереження жанрів у localStorage

export function saveGenres() {
  movieAPI
    .getGenres()
    .then(data => {
      localStorage.setItem('GENRES', JSON.stringify(data));
    })
    .catch(error => console.log(error));
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

// отримання актуальних жанрів для фільму

export function getTrendMovieGenres(genreIds) {
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

//підвантаження популярних фільмів

export function renderTrendMovie() {
  movieAPI.getTrendMovie().then(data => {
    const necessaryData = dataService.getDataTrendMovies(data);
    const markupTrendMovies = createMarkupFilmsList(necessaryData);
    refs.moviesList.innerHTML = markupTrendMovies;
  });
}
