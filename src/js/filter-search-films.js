import { MovieAPI } from './MoviesApiServise';
import { createMarkupFilmsList } from './markup';
import { DataService } from './data-service';
import { pagination, onFilterObj } from './pagination';
import { refs } from './refs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Spinner } from './spinner';

const spinner = new Spinner();
const dataService = new DataService();
const movieAPI = new MovieAPI();

refs.filterNowPlaying.addEventListener('click', getNowPlaying);

function getNowPlaying(e) {
  e.preventDefault();
  refs.containerPagAll.classList.remove('visually-hidden');

  refs.moviesList.innerHTML = '';

  spinner.start();
  refs.filterNowPlaying.disabled = true;
  refs.filterPopular.disabled = false;
  refs.filterTopRated.disabled = false;
  refs.filterUpcoming.disabled = false;

  refs.notCorrectNotification.classList.remove(
    'films__not-correct-notification-show'
  );
  refs.noMoviesNotification.classList.remove(
    'films__no-movies-notification-show'
  );
  refs.searchErrorImg.classList.add('visually-hidden');

  movieAPI
    .getNowPlaying()
    .then(data => {
      if (data.total_pages > 500) {
        onFilterObj(data);
        return;
      }
      pagination(data);

      const necessaryData = dataService.getDataTrendMovies(data.results);
      const markupTrendMovies = createMarkupFilmsList(necessaryData);
      refs.moviesList.innerHTML = markupTrendMovies;
    })
    .catch(err => Notify.failure(err))
    .finally(() => {
      spinner.stop();
    });
}

refs.filterPopular.addEventListener('click', getPopular);

function getPopular(e) {
  e.preventDefault();
  refs.containerPagAll.classList.remove('visually-hidden');

  refs.moviesList.innerHTML = '';

  spinner.start();
  refs.filterNowPlaying.disabled = false;
  refs.filterPopular.disabled = true;
  refs.filterTopRated.disabled = false;
  refs.filterUpcoming.disabled = false;

  refs.notCorrectNotification.classList.remove(
    'films__not-correct-notification-show'
  );
  refs.noMoviesNotification.classList.remove(
    'films__no-movies-notification-show'
  );
  refs.searchErrorImg.classList.add('visually-hidden');

  movieAPI
    .getPopular()
    .then(data => {
      if (data.total_pages > 500) {
        onFilterObj(data);

        return;
      }
      pagination(data);

      const necessaryData = dataService.getDataTrendMovies(data.results);
      const markupTrendMovies = createMarkupFilmsList(necessaryData);

      refs.moviesList.innerHTML = markupTrendMovies;
    })
    .catch(err => Notify.failure(err))
    .finally(() => {
      spinner.stop();
    });
}

refs.filterTopRated.addEventListener('click', getTopRated);

function getTopRated(e) {
  e.preventDefault();
  refs.containerPagAll.classList.remove('visually-hidden');

  refs.moviesList.innerHTML = '';

  spinner.start();
  refs.filterNowPlaying.disabled = false;
  refs.filterPopular.disabled = false;
  refs.filterTopRated.disabled = true;
  refs.filterUpcoming.disabled = false;

  refs.notCorrectNotification.classList.remove(
    'films__not-correct-notification-show'
  );
  refs.noMoviesNotification.classList.remove(
    'films__no-movies-notification-show'
  );
  refs.searchErrorImg.classList.add('visually-hidden');

  movieAPI
    .getTopRated()
    .then(data => {
      if (data.total_pages > 500) {
        onFilterObj(data);
        return;
      }
      pagination(data);

      const necessaryData = dataService.getDataTrendMovies(data.results);
      const markupTrendMovies = createMarkupFilmsList(necessaryData);
      refs.moviesList.innerHTML = markupTrendMovies;
    })
    .catch(err => Notify.failure(err))
    .finally(() => {
      spinner.stop();
    });
}

refs.filterUpcoming.addEventListener('click', getUpcoming);

function getUpcoming(e) {
  e.preventDefault();
  refs.containerPagAll.classList.remove('visually-hidden');

  refs.moviesList.innerHTML = '';

  spinner.start();
  refs.filterNowPlaying.disabled = false;
  refs.filterPopular.disabled = false;
  refs.filterTopRated.disabled = false;
  refs.filterUpcoming.disabled = true;

  refs.notCorrectNotification.classList.remove(
    'films__not-correct-notification-show'
  );
  refs.noMoviesNotification.classList.remove(
    'films__no-movies-notification-show'
  );
  refs.searchErrorImg.classList.add('visually-hidden');

  movieAPI
    .getUpcoming()
    .then(data => {
      if (data.total_pages > 500) {
        onFilterObj(data);
        return;
      }
      pagination(data);

      const necessaryData = dataService.getDataTrendMovies(data.results);
      const markupTrendMovies = createMarkupFilmsList(necessaryData);
      refs.moviesList.innerHTML = markupTrendMovies;
    })
    .catch(err => Notify.failure(err))
    .finally(() => {
      spinner.stop();
    });
}
