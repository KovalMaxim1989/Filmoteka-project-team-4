import { MovieAPI } from './MoviesApiServise';
import { createMarkupFilmsList } from './markup';
import { DataService } from './data-service';
import { scrollTop } from './button';
import { refs } from './refs';

export function pagination(data) {
  switch (data.page) {
    case 1:
      pageActive = 1;
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
      refs.minus2Page.textContent = data.page - 4;
      refs.plus2Page.classList.add('btn-active');
      refs.minus1Page.textContent = data.page - 3;
      refs.activPage.textContent = data.page - 2;
      refs.plus1Page.textContent = data.page - 1;
      refs.plus2Page.textContent = data.page;
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
      refs.plusQuery.classList.remove('btn-active');
      refs.minusQuery.classList.remove('btn-active');
      refs.lastPage.textContent = data.total_pages;
      refs.minus2Page.textContent = data.page - 2;
      refs.minus1Page.textContent = data.page - 1;
      refs.activPage.textContent = data.page;
      refs.plus1Page.textContent = data.page + 1;
      refs.plus2Page.textContent = data.page + 2;
  }

  switch (data.total_pages) {
    case 1:
      refs.plus2Page.classList.add('visually-hidden');
      refs.plus1Page.classList.add('visually-hidden');
      refs.minus1Page.classList.add('visually-hidden');
      refs.minus2Page.classList.add('visually-hidden');
      refs.lastPage.classList.add('visually-hidden');
      refs.activPage.classList.add('visually-hidden');
      refs.minusTen.classList.add('visually-hidden');
      refs.plusTen.classList.add('visually-hidden');

      refs.minusQuery.classList.add('visually-hidden');
      refs.plusQuery.classList.add('visually-hidden');

      break;
    case 2:
      refs.plus2Page.classList.add('visually-hidden');
      refs.plus1Page.classList.add('visually-hidden');
      refs.minus1Page.classList.add('visually-hidden');
      refs.minus2Page.classList.remove('visually-hidden');
      refs.lastPage.classList.add('visually-hidden');
      refs.activPage.classList.add('visually-hidden');
      refs.minusTen.classList.add('visually-hidden');
      refs.plusTen.classList.add('visually-hidden');

      refs.minusQuery.classList.add('visually-hidden');
      refs.plusQuery.classList.add('visually-hidden');
      break;
    case 3:
      refs.plus2Page.classList.add('visually-hidden');
      refs.plus1Page.classList.add('visually-hidden');
      refs.minus1Page.classList.remove('visually-hidden');
      refs.minus2Page.classList.remove('visually-hidden');
      refs.lastPage.classList.add('visually-hidden');
      refs.activPage.classList.add('visually-hidden');
      refs.minusTen.classList.add('visually-hidden');
      refs.plusTen.classList.add('visually-hidden');

      refs.minusQuery.classList.add('visually-hidden');
      refs.plusQuery.classList.add('visually-hidden');

      break;
    case 4:
      refs.plus2Page.classList.add('visually-hidden');
      refs.plus1Page.classList.add('visually-hidden');
      refs.minus1Page.classList.remove('visually-hidden');
      refs.minus2Page.classList.remove('visually-hidden');
      refs.lastPage.classList.remove('visually-hidden');
      refs.activPage.classList.add('visually-hidden');
      refs.minusTen.classList.add('visually-hidden');
      refs.plusTen.classList.add('visually-hidden');
      refs.minusQuery.classList.remove('visually-hidden');
      refs.plusQuery.classList.remove('visually-hidden');

      break;
    case 5:
      refs.plus2Page.classList.add('visually-hidden');
      refs.plus1Page.classList.add('visually-hidden');
      refs.minus1Page.classList.remove('visually-hidden');
      refs.minus2Page.classList.remove('visually-hidden');
      refs.lastPage.classList.remove('visually-hidden');
      refs.activPage.classList.remove('visually-hidden');
      refs.minusTen.classList.add('visually-hidden');
      refs.plusTen.classList.add('visually-hidden');

      refs.minusQuery.classList.remove('visually-hidden');
      refs.plusQuery.classList.remove('visually-hidden');
      break;
    case 6:
      refs.plus2Page.classList.add('visually-hidden');
      refs.plus1Page.classList.remove('visually-hidden');
      refs.minus1Page.classList.remove('visually-hidden');
      refs.minus2Page.classList.remove('visually-hidden');
      refs.lastPage.classList.remove('visually-hidden');
      refs.activPage.classList.remove('visually-hidden');
      refs.minusTen.classList.add('visually-hidden');
      refs.plusTen.classList.add('visually-hidden');
      refs.minusQuery.classList.remove('visually-hidden');
      refs.plusQuery.classList.remove('visually-hidden');
      break;

    default:
      refs.plus2Page.classList.remove('visually-hidden');
      refs.plus1Page.classList.remove('visually-hidden');
      refs.minus1Page.classList.remove('visually-hidden');
      refs.minus2Page.classList.remove('visually-hidden');
      refs.lastPage.classList.remove('visually-hidden');
      refs.activPage.classList.remove('visually-hidden');
      refs.minusQuery.classList.remove('visually-hidden');
      refs.plusQuery.classList.remove('visually-hidden');
      refs.minusTen.classList.remove('visually-hidden');
      refs.plusTen.classList.remove('visually-hidden');
  }
}
let pageActive = 1;
export let totalPages = 100;

export async function onClickIncrementPage(e) {
  pageActive += 1;
  if (pageActive > totalPages) {
    pageActive = 1;
  }
  const evtTarget = e.target;
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
          evtTarget.blur();
          pagination(data);

          if (pageActive >= data.total_pages) {
            refs.lastPage.classList.add('btn-active');
          }

          const necessaryData = dataService.getDataTrendMovies(data.results);
          const markupTrendMovies = createMarkupFilmsList(necessaryData);
          refs.moviesList.innerHTML = markupTrendMovies;
          refs.minusQuery.disabled = false;
          totalPages = data.total_pages;
          if (pageActive > data.total_pages) {
            pageActive = 1;
            onClickIncrementPage(e);
          }
          scrollTop();
        })
        .catch(err => {
          Notify.failure(err);
        });

      return;
    }

    await movieAPI.getTrendMovie().then(data => {
      evtTarget.blur();
      totalPages = data.total_pages;

      console.log(pageActive);
      console.log(data.total_pages);
      if (pageActive > data.total_pages) {
        pageActive = 1;
        onClickIncrementPage(e);
      }
      if (pageActive >= data.total_pages) {
        refs.lastPage.classList.add('btn-active');
      }

      const necessaryData = dataService.getDataTrendMovies(data.results);
      const markupTrendMovies = createMarkupFilmsList(necessaryData);
      refs.moviesList.innerHTML = markupTrendMovies;

      pagination(data);
      scrollTop();
    });
  } catch (error) {
    Notify.failure(error);
  }
}
export async function onClickDecrementPage(e) {
  pageActive -= 1;
  if (pageActive > totalPages) {
    pageActive = 1;
  }
  const evtTarget = e.target;
  const movieAPI = new MovieAPI();
  const dataService = new DataService();
  const formValue = refs.searchForm.searchQuery.value.trim();
  movieAPI.query = formValue;
  movieAPI.page = pageActive;
  if (pageActive === 0) {
    pageActive = 1;
    return;
  }

  try {
    if (formValue !== '') {
      await movieAPI
        .getSearchMovies()
        .then(data => {
          totalPages = data.total_pages;

          console.log(data.total_pages);
          if (pageActive > data.total_pages) {
            pageActive = 2;
            onClickDecrementPage(e);
          }

          const necessaryData = dataService.getDataTrendMovies(data.results);
          const markupTrendMovies = createMarkupFilmsList(necessaryData);
          refs.moviesList.innerHTML = markupTrendMovies;
          evtTarget.blur();
          pagination(data);
          scrollTop();
        })
        .catch(err => Notify.failure(err));
      return;
    }

    await movieAPI.getTrendMovie().then(data => {
      totalPages = data.total_pages;
      if (pageActive > data.total_pages) {
        pageActive = 1;
        onClickDecrementPage(e);
      }
      const necessaryData = dataService.getDataTrendMovies(data.results);
      const markupTrendMovies = createMarkupFilmsList(necessaryData);
      refs.moviesList.innerHTML = markupTrendMovies;
      evtTarget.blur();
      pagination(data);
      scrollTop();
    });
  } catch (error) {
    Notify.failure(error);
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
          totalPages = data.total_pages;
          const necessaryData = dataService.getDataTrendMovies(data.results);
          const markupTrendMovies = createMarkupFilmsList(necessaryData);
          refs.moviesList.innerHTML = markupTrendMovies;

          evtTarget.blur();
          pagination(data);
          scrollTop();
        })
        .catch(err => Notify.failure(err));
      return;
    }

    await movieAPI.getTrendMovie().then(data => {
      totalPages = data.total_pages;
      const necessaryData = dataService.getDataTrendMovies(data.results);
      const markupTrendMovies = createMarkupFilmsList(necessaryData);
      refs.moviesList.innerHTML = markupTrendMovies;

      evtTarget.blur();
      pagination(data);
      scrollTop();
    });
  } catch (error) {
    Notify.failure(error);
  }
}

export async function onClickDecrementTen(e) {
  pageActive -= 10;
  const evtTarget = e.target;
  if (pageActive < 0) {
    pageActive = 1;
  }

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
          totalPages = data.total_pages;
          const necessaryData = dataService.getDataTrendMovies(data.results);
          const markupTrendMovies = createMarkupFilmsList(necessaryData);
          refs.moviesList.innerHTML = markupTrendMovies;
          evtTarget.blur();
          pagination(data);
          scrollTop();
        })
        .catch(err => Notify.failure(err));
      return;
    }

    await movieAPI.getTrendMovie().then(data => {
      totalPages = data.total_pages;
      if (pageActive <= 0) {
        return;
      }
      const necessaryData = dataService.getDataTrendMovies(data.results);
      const markupTrendMovies = createMarkupFilmsList(necessaryData);
      refs.moviesList.innerHTML = markupTrendMovies;
      evtTarget.blur();
      pagination(data);
      scrollTop();
    });
  } catch (error) {
    Notify.failure(error);
  }
}
export async function onClickIncrementTen(e) {
  pageActive += 10;
  const evtTarget = e.target;
  if (pageActive > totalPages) {
    pageActive = totalPages;
  }
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
          totalPages = data.total_pages;
          if (pageActive > data.total_pages) {
            return;
          }
          evtTarget.blur();
          pagination(data);

          const necessaryData = dataService.getDataTrendMovies(data.results);
          const markupTrendMovies = createMarkupFilmsList(necessaryData);
          refs.moviesList.innerHTML = markupTrendMovies;
          refs.minusQuery.disabled = false;
          scrollTop();
        })
        .catch(err => Notify.failure(err));
      return;
    }

    await movieAPI.getTrendMovie().then(data => {
      totalPages = data.total_pages;
      if (!data.total_pages) {
        refs.containerPage.classList.add('visually-hidden');
      }
      const necessaryData = dataService.getDataTrendMovies(data.results);
      const markupTrendMovies = createMarkupFilmsList(necessaryData);
      refs.moviesList.innerHTML = markupTrendMovies;
      evtTarget.blur();
      pagination(data);
      scrollTop();
    });
  } catch (error) {
    Notify.failure(error);
  }
}
