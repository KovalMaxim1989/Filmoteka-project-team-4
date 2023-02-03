import { MovieAPI } from './MoviesApiServise';
import { createMarkupFilmsList } from './markup';
import { DataService } from './data-service';
import { renderTrendMovie } from './trandingfilms';
import { refs } from './refs';

export function pagination(data) {
  switch (data.page) {
    case 1:
      refs.firstPage.textContent = 1;
      refs.plus2Page.classList.remove('btn-active');
      refs.plus1Page.classList.remove('btn-active');
      refs.minus1Page.classList.remove('btn-active');
      refs.minus2Page.classList.remove('btn-active');
      refs.firstPage.classList.remove('btn-active');
      refs.lastPage.classList.remove('btn-active');
      refs.activPage.classList.remove('btn-active');

      refs.firstPage.classList.add('btn-active');
      refs.lastPage.textContent = data.total_pages;
      refs.minus2Page.textContent = data.page + 1;
      refs.minus1Page.textContent = data.page + 2;
      refs.activPage.textContent = data.page + 3;
      refs.plus1Page.textContent = data.page + 4;
      refs.plus2Page.textContent = data.page + 5;

      break;
    case 2:
      refs.firstPage.textContent = 1;
      refs.firstPage.classList.remove('btn-active');
      refs.plus2Page.classList.remove('btn-active');
      refs.plus1Page.classList.remove('btn-active');
      refs.minus1Page.classList.remove('btn-active');
      refs.firstPage.classList.remove('btn-active');
      refs.lastPage.classList.remove('btn-active');
      refs.activPage.classList.remove('btn-active');
      refs.lastPage.textContent = data.total_pages;
      refs.minus2Page.textContent = data.page;
      refs.minus2Page.classList.add('btn-active');
      refs.minus1Page.textContent = data.page + 1;
      refs.activPage.textContent = data.page + 2;
      refs.plus1Page.textContent = data.page + 3;
      refs.plus2Page.textContent = data.page + 4;
      break;

    case 3:
      refs.firstPage.textContent = 1;
      refs.minus2Page.classList.remove('btn-active');
      refs.plus2Page.classList.remove('btn-active');
      refs.plus1Page.classList.remove('btn-active');
      refs.firstPage.classList.remove('btn-active');
      refs.lastPage.classList.remove('btn-active');
      refs.activPage.classList.remove('btn-active');

      refs.lastPage.textContent = data.total_pages;
      refs.minus2Page.textContent = data.page - 1;
      refs.minus1Page.classList.add('btn-active');
      refs.minus1Page.textContent = data.page;
      refs.activPage.textContent = data.page + 1;
      refs.plus1Page.textContent = data.page + 2;
      refs.plus2Page.textContent = data.page + 3;
      break;
    case 4:
      refs.firstPage.textContent = 1;
      refs.minus1Page.classList.remove('btn-active');
      refs.plus2Page.classList.remove('btn-active');
      refs.plus1Page.classList.remove('btn-active');
      refs.minus2Page.classList.remove('btn-active');
      refs.firstPage.classList.remove('btn-active');
      refs.lastPage.classList.remove('btn-active');
      refs.activPage.classList.remove('btn-active');

      refs.lastPage.textContent = data.total_pages;
      refs.minus2Page.textContent = data.page - 2;
      refs.activPage.classList.add('btn-active');
      refs.minus1Page.textContent = data.page - 1;
      refs.activPage.textContent = data.page;
      refs.plus1Page.textContent = data.page + 1;
      refs.plus2Page.textContent = data.page + 2;
      break;
    case 5:
      refs.firstPage.textContent = 1;
      refs.activPage.classList.remove('btn-active');
      refs.plus2Page.classList.remove('btn-active');
      refs.minus1Page.classList.remove('btn-active');
      refs.minus2Page.classList.remove('btn-active');
      refs.firstPage.classList.remove('btn-active');
      refs.lastPage.classList.remove('btn-active');
      refs.lastPage.textContent = data.total_pages;
      refs.minus2Page.textContent = data.page - 3;
      refs.plus1Page.classList.add('btn-active');
      refs.minus1Page.textContent = data.page - 2;
      refs.activPage.textContent = data.page - 1;
      refs.plus1Page.textContent = data.page;
      refs.plus2Page.textContent = data.page + 1;
      break;
    case 6:
      refs.firstPage.textContent = 1;
      refs.plus1Page.classList.remove('btn-active');
      refs.minus1Page.classList.remove('btn-active');
      refs.minus2Page.classList.remove('btn-active');
      refs.firstPage.classList.remove('btn-active');
      refs.lastPage.classList.remove('btn-active');
      refs.activPage.classList.remove('btn-active');
      refs.lastPage.textContent = data.total_pages;
      refs.minus2Page.textContent = data.page - 4;
      refs.plus2Page.classList.add('btn-active');
      refs.minus1Page.textContent = data.page - 3;
      refs.activPage.textContent = data.page - 2;
      refs.plus1Page.textContent = data.page - 1;
      refs.plus2Page.textContent = data.page;
      break;
    case data.total_pages - 2:
      refs.firstPage.textContent = 1;
      refs.plus2Page.classList.remove('btn-active');
      refs.minus1Page.classList.remove('btn-active');
      refs.minus2Page.classList.remove('btn-active');
      refs.lastPage.classList.remove('btn-active');
      refs.firstPage.classList.remove('btn-active');
      refs.activPage.classList.remove('btn-active');
      refs.lastPage.textContent = data.total_pages;
      refs.minus2Page.textContent = data.page - 3;
      refs.plus1Page.classList.add('btn-active');
      refs.minus1Page.textContent = data.page - 2;
      refs.activPage.textContent = data.page - 1;
      refs.plus1Page.textContent = data.page;
      refs.plus2Page.textContent = data.page + 1;
      break;
    case data.total_pages - 1:
      refs.firstPage.textContent = 1;
      refs.plus1Page.classList.remove('btn-active');
      refs.minus1Page.classList.remove('btn-active');
      refs.minus2Page.classList.remove('btn-active');
      refs.lastPage.classList.remove('btn-active');
      refs.firstPage.classList.remove('btn-active');
      refs.activPage.classList.remove('btn-active');
      refs.lastPage.textContent = data.total_pages;
      refs.minus2Page.textContent = data.page - 5;
      refs.plus2Page.classList.add('btn-active');
      refs.minus1Page.textContent = data.page - 4;
      refs.activPage.textContent = data.page - 3;
      refs.plus1Page.textContent = data.page - 2;
      refs.plus2Page.textContent = data.page - 1;
      break;
    case data.total_pages:
      refs.firstPage.textContent = 1;
      refs.plus2Page.classList.remove('btn-active');
      refs.plus1Page.classList.remove('btn-active');
      refs.minus1Page.classList.remove('btn-active');
      refs.minus2Page.classList.remove('btn-active');
      refs.firstPage.classList.remove('btn-active');
      refs.activPage.classList.remove('btn-active');
      refs.lastPage.textContent = data.total_pages;
      refs.minus2Page.textContent = data.page - 5;
      refs.lastPage.classList.add('btn-active');
      refs.minus1Page.textContent = data.page - 4;
      refs.activPage.textContent = data.page - 3;
      refs.plus1Page.textContent = data.page - 2;
      refs.plus2Page.textContent = data.page - 1;
      break;

    default:
      refs.firstPage.textContent = 1;
      refs.plus2Page.classList.remove('btn-active');
      refs.plus1Page.classList.remove('btn-active');
      refs.minus1Page.classList.remove('btn-active');
      refs.minus2Page.classList.remove('btn-active');
      refs.firstPage.classList.remove('btn-active');
      refs.lastPage.classList.remove('btn-active');
      refs.activPage.classList.add('btn-active');
      refs.lastPage.textContent = data.total_pages;
      refs.minus2Page.textContent = data.page - 2;
      refs.minus1Page.textContent = data.page - 1;
      refs.activPage.textContent = data.page;
      refs.plus1Page.textContent = data.page + 1;
      refs.plus2Page.textContent = data.page + 2;
  }

  switch (data.total_pages) {
    case 1:
      refs.plus2Page.classList.add('hidden');
      refs.plus1Page.classList.add('hidden');
      refs.minus1Page.classList.add('hidden');
      refs.minus2Page.classList.add('hidden');
      refs.lastPage.classList.add('hidden');
      refs.activPage.classList.add('hidden');

      break;
    case 2:
      refs.plus2Page.classList.add('hidden');
      refs.plus1Page.classList.add('hidden');
      refs.minus1Page.classList.add('hidden');
      refs.minus2Page.classList.remove('hidden');
      refs.lastPage.classList.add('hidden');
      refs.activPage.classList.add('hidden');
    case 3:
      refs.plus2Page.classList.add('hidden');
      refs.plus1Page.classList.add('hidden');
      refs.minus1Page.classList.remove('hidden');
      refs.minus2Page.classList.remove('hidden');
      refs.lastPage.classList.add('hidden');
      refs.activPage.classList.add('hidden');
    case 4:
      refs.plus2Page.classList.add('hidden');
      refs.plus1Page.classList.add('hidden');
      refs.minus1Page.classList.remove('hidden');
      refs.minus2Page.classList.remove('hidden');
      refs.lastPage.classList.add('hidden');
      refs.activPage.classList.remove('hidden');
    case 5:
      refs.plus2Page.classList.add('hidden');
      refs.plus1Page.classList.remove('hidden');
      refs.minus1Page.classList.remove('hidden');
      refs.minus2Page.classList.remove('hidden');
      refs.lastPage.classList.add('hidden');
      refs.activPage.classList.remove('hidden');
    case 6:
      refs.plus2Page.classList.remove('hidden');
      refs.plus1Page.classList.remove('hidden');
      refs.minus1Page.classList.remove('hidden');
      refs.minus2Page.classList.remove('hidden');
      refs.lastPage.classList.add('hidden');
      refs.activPage.classList.remove('hidden');

    default:
      refs.plus2Page.classList.remove('hidden');
      refs.plus1Page.classList.remove('hidden');
      refs.minus1Page.classList.remove('hidden');
      refs.minus2Page.classList.remove('hidden');
      refs.lastPage.classList.remove('hidden');
      refs.activPage.classList.remove('hidden');

      break;
  }
}
let pageActive = 1;
export async function onClickIncrementPage() {
  pageActive += 1;
  const movieAPI = new MovieAPI();
  const dataService = new DataService();
  const formValue = refs.searchForm.searchQuery.value.trim();
  movieAPI.query = formValue;
  movieAPI.page = pageActive;
  try {
    if (formValue !== '') {
      await movieAPI
        .getSearchMovies()
        .then(data => {
          if (pageActive >= data.total_pages) {
            refs.plusQuery.disabled = true;
          }
          if (pageActive < data.total_pages) {
            refs.plusQuery.disabled = false;
          }
          pagination(data);
          const necessaryData = dataService.getDataTrendMovies(data.results);
          const markupTrendMovies = createMarkupFilmsList(necessaryData);
          refs.moviesList.innerHTML = markupTrendMovies;
          refs.minusQuery.disabled = false;
        })
        .catch(err => Notify.failure(err));
      return;
    }

    refs.minusQuery.disabled = false;
    await movieAPI.getTrendMovie().then(data => {
      if (pageActive >= data.total_pages) {
        refs.plusQuery.disabled = true;
      }
      if (pageActive < data.total_pages) {
        refs.plusQuery.disabled = false;
      }
      const necessaryData = dataService.getDataTrendMovies(data.results);
      const markupTrendMovies = createMarkupFilmsList(necessaryData);
      refs.moviesList.innerHTML = markupTrendMovies;
      pagination(data);
    });
  } catch {
    err => Notify.failure(err);
  }
}
export async function onClickDecrementPage() {
  pageActive -= 1;
  const movieAPI = new MovieAPI();
  const dataService = new DataService();
  const formValue = refs.searchForm.searchQuery.value.trim();
  movieAPI.query = formValue;
  movieAPI.page = pageActive;
  try {
    if (!pageActive) {
      refs.minusQuery.disabled = true;
      return;
    }
    if (formValue !== '') {
      await movieAPI
        .getSearchMovies()
        .then(data => {
          if (pageActive >= data.total_pages) {
            refs.plusQuery.disabled = true;
          }
          if (pageActive < data.total_pages) {
            refs.plusQuery.disabled = false;
          }
          const necessaryData = dataService.getDataTrendMovies(data.results);
          const markupTrendMovies = createMarkupFilmsList(necessaryData);
          refs.moviesList.innerHTML = markupTrendMovies;
          pagination(data);
          refs.minusQuery.disabled = false;
        })
        .catch(err => Notify.failure(err));
      return;
    }

    refs.minusQuery.disabled = false;
    await movieAPI.getTrendMovie().then(data => {
      if (pageActive >= data.total_pages) {
        refs.plusQuery.disabled = true;
      }
      if (pageActive < data.total_pages) {
        refs.plusQuery.disabled = false;
      }
      const necessaryData = dataService.getDataTrendMovies(data.results);
      const markupTrendMovies = createMarkupFilmsList(necessaryData);
      refs.moviesList.innerHTML = markupTrendMovies;
      console.log(data);
      pagination(data);
    });
  } catch {
    err => Notify.failure(err);
  }
}
export async function onClickPaginationBtnNumber(e) {
  const evtTarget = e.target;
  pageActive = Number(evtTarget.textContent);

  if (evtTarget.nodeName !== 'BUTTON') {
    return;
  }
  try {
    const movieAPI = new MovieAPI();
    const dataService = new DataService();
    const formValue = refs.searchForm.searchQuery.value.trim();
    movieAPI.query = formValue;
    movieAPI.page = pageActive;
    if (formValue !== '') {
      await movieAPI
        .getSearchMovies()
        .then(data => {
          if (pageActive >= data.total_pages) {
            refs.plusQuery.disabled = true;
          }
          if (pageActive < data.total_pages) {
            refs.plusQuery.disabled = false;
          }
          const necessaryData = dataService.getDataTrendMovies(data.results);
          const markupTrendMovies = createMarkupFilmsList(necessaryData);
          refs.moviesList.innerHTML = markupTrendMovies;
          pagination(data);
          refs.minusQuery.disabled = false;
        })
        .catch(err => Notify.failure(err));
      return;
    }

    refs.minusQuery.disabled = false;
    await movieAPI.getTrendMovie().then(data => {
      if (pageActive >= data.total_pages) {
        refs.plusQuery.disabled = true;
      }
      if (pageActive < data.total_pages) {
        refs.plusQuery.disabled = false;
      }
      const necessaryData = dataService.getDataTrendMovies(data.results);
      const markupTrendMovies = createMarkupFilmsList(necessaryData);
      refs.moviesList.innerHTML = markupTrendMovies;
      pagination(data);
    });
  } catch {
    err => Notify.failure(err);
  }
}
