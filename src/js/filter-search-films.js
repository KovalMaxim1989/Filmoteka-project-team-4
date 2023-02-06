import { MovieAPI } from './MoviesApiServise';
import { createMarkupFilmsList } from './markup';
import { DataService } from './data-service';
import { pagination } from './pagination';
import { refs } from './refs';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Spinner } from './spinner';
console.log(111);
const spinner = new Spinner();
const dataService = new DataService();

const movieAPI = new MovieAPI();
console.log(111);

refs.filterNowPlaying.addEventListener('click', getNowPlaying);

function getNowPlaying(e) {
  e.preventDefault();

  refs.moviesList.innerHTML = '';

  spinner.start();

  movieAPI
    .getNowPlaying()
    .then(data => {
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

  refs.moviesList.innerHTML = '';

  spinner.start();

  movieAPI
    .getPopular()
    .then(data => {
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

  refs.moviesList.innerHTML = '';

  spinner.start();

  movieAPI
    .getTopRated()
    .then(data => {
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

  refs.moviesList.innerHTML = '';

  spinner.start();

  movieAPI
    .getUpcoming()
    .then(data => {
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
