// функція пошуку та відображення фільмів

import { MovieAPI } from './MoviesApiServise';
import { createMarkupFilmsList } from './markup';
import { DataService } from './data-service';
import { refs } from './refs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const dataService = new DataService();

const movieAPI = new MovieAPI();

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  const formValue = e.currentTarget.elements.searchQuery.value.trim();
  if (!formValue) {
    return Notify.failure(
      'Sorry, there are no movies matching your search query. Please try again.'
    );
  }

  refs.moviesList.innerHTML = '';

  //   MovieAPI.resetPage();

  movieAPI.query = formValue;

  movieAPI
    .getSearchMovies()
    .then(data => {
      if (data.results.length === 0) {
        return Notify.info(
          'Sorry, there are no movies matching your search query. Please try again.'
        );
      }

      const necessaryData = dataService.getDataTrendMovies(data.results);
      const markupTrendMovies = createMarkupFilmsList(necessaryData);
      refs.moviesList.innerHTML = markupTrendMovies;
      pagination(data);
    })
    .catch(err => Notify.failure(err));
}
