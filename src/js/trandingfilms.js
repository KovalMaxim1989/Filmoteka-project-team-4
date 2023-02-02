// функція підвантаження трендових фільмів

// збереження жанрів у localStorage
import { MovieAPI } from './MoviesApiServise';
import { createMarkupFilmsList } from './markup';

const movieAPI = new MovieAPI();

export function saveGenres() {
  movieAPI
    .getGenres()
    .then(data => {
      const genresData = data;
      const genres = {};
      for (let i = 0; i < genresData.length; i += 1) {
        const genre = Object.values(genresData[i]);
        genres[genre[0]] = genre[1];
      }

      localStorage.setItem('GENRES', JSON.stringify(genres));
    })
    .catch(error => console.log(error));
}

//підвантаження популярних фільмів

export function renderTrendMovie() {
  movieAPI.getTrendMovie().then();
}
