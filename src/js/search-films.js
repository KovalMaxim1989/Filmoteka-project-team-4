// функція пошуку та відображення фільмів

import { MovieAPI } from './MoviesApiServise';
import { createMarkupFilmsList } from './markup';
import { DataService } from './data-service';
import { pagination } from './pagination';
import { refs } from './refs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const dataService = new DataService();

const movieAPI = new MovieAPI();

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  const formValue = e.currentTarget.elements.searchQuery.value.trim();
  if (!formValue) {
    return Notify.info(
      'Sorry, there are no movies matching your search query. Please try again.'
    );
  }

  refs.moviesList.innerHTML = '';

  //   MovieAPI.resetPage();

  movieAPI.query = formValue;

  movieAPI
    .getSearchMovies()
    .then(data => {
      refs.searchErrorImg.classList.add('visually-hidden');
      if (data.results.length === 0) {
        refs.searchErrorImg.classList.remove('visually-hidden');
        refs.containerPage.classList.add('visually-hidden');
        return Notify.info(
          'Sorry, there are no movies matching your search query. Please try again.'
        );
      }

      pagination(data);

      const necessaryData = dataService.getDataTrendMovies(data.results);
      const markupTrendMovies = createMarkupFilmsList(necessaryData);
      refs.moviesList.innerHTML = markupTrendMovies;
    })
    .catch(err => Notify.failure(err));
}
