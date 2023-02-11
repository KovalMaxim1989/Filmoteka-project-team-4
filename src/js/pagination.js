import { MovieAPI } from './MoviesApiServise';
import { createMarkupFilmsList } from './markup';
import { DataService } from './data-service';
import { scrollTop } from './button';
import { refs } from './refs';
import { Spinner } from './spinner';
import { reauthenticateWithPhoneNumber } from 'firebase/auth';
const refsPag = {
  firstPage: document.querySelector('.js-pagination--firstPage'),
  minus2Page: document.querySelector('.js-pagination--minus2Page'),
  minus1Page: document.querySelector('.js-pagination--minus1Page'),
  activPage: document.querySelector('.js-pagination--activPage'),
  plus1Page: document.querySelector('.js-pagination--plus1Page'),
  plus2Page: document.querySelector('.js-pagination--plus2Page'),
  lastPage: document.querySelector('.js-pagination--lastPage'),
  minusQuery: document.querySelector('.js-btn__minusQuery'),
  plusQuery: document.querySelector('.js-btn__plusQuery'),
  containerPage: document.querySelector('.js-pagination__page'),
  plusTen: document.querySelector('.btn-increment-ten'),
  minusTen: document.querySelector('.btn-decrement-ten'),
  containerPagAll: document.querySelector('.js-pagination'),
};

refsPag.minusQuery.addEventListener('click', onClickDecrementPage);
refsPag.plusQuery.addEventListener('click', onClickIncrementPage);
refsPag.containerPage.addEventListener('click', onClickPaginationBtnNumber);
refsPag.minusTen.addEventListener('click', onClickDecrementTen);
refsPag.plusTen.addEventListener('click', onClickIncrementTen);
refsPag.lastPage.addEventListener('click', onClickPaginationBtnNumber);
refsPag.firstPage.addEventListener('click', onClickPaginationBtnNumber);

const spinner = new Spinner();

export function pagination(data) {
  scrollTop();
  switch (data.page) {
    case 1:
      pageActive = 1;
      refsPag.firstPage.textContent = 1;
      refsPag.plus2Page.classList.remove('btn-active');
      refsPag.plus1Page.classList.remove('btn-active');
      refsPag.minus1Page.classList.remove('btn-active');
      refsPag.minus2Page.classList.remove('btn-active');
      refsPag.firstPage.classList.remove('btn-active');
      refsPag.lastPage.classList.remove('btn-active');
      refsPag.activPage.classList.remove('btn-active');

      refsPag.firstPage.classList.add('btn-active');
      refsPag.lastPage.textContent = data.total_pages;
      refsPag.minus2Page.textContent = data.page + 1;
      refsPag.minus1Page.textContent = data.page + 2;
      refsPag.activPage.textContent = data.page + 3;
      refsPag.plus1Page.textContent = data.page + 4;
      refsPag.plus2Page.textContent = data.page + 5;

      break;
    case 2:
      refsPag.firstPage.textContent = 1;
      refsPag.firstPage.classList.remove('btn-active');
      refsPag.plus2Page.classList.remove('btn-active');
      refsPag.plus1Page.classList.remove('btn-active');
      refsPag.minus1Page.classList.remove('btn-active');
      refsPag.firstPage.classList.remove('btn-active');
      refsPag.lastPage.classList.remove('btn-active');
      refsPag.activPage.classList.remove('btn-active');
      refsPag.lastPage.textContent = data.total_pages;
      refsPag.minus2Page.textContent = data.page;
      refsPag.minus2Page.classList.add('btn-active');
      refsPag.minus1Page.textContent = data.page + 1;
      refsPag.activPage.textContent = data.page + 2;
      refsPag.plus1Page.textContent = data.page + 3;
      refsPag.plus2Page.textContent = data.page + 4;
      break;

    case 3:
      refsPag.firstPage.textContent = 1;
      refsPag.minus2Page.classList.remove('btn-active');
      refsPag.plus2Page.classList.remove('btn-active');
      refsPag.plus1Page.classList.remove('btn-active');
      refsPag.firstPage.classList.remove('btn-active');
      refsPag.lastPage.classList.remove('btn-active');
      refsPag.activPage.classList.remove('btn-active');

      refsPag.lastPage.textContent = data.total_pages;
      refsPag.minus2Page.textContent = data.page - 1;
      refsPag.minus1Page.classList.add('btn-active');
      refsPag.minus1Page.textContent = data.page;
      refsPag.activPage.textContent = data.page + 1;
      refsPag.plus1Page.textContent = data.page + 2;
      refsPag.plus2Page.textContent = data.page + 3;
      break;
    case 4:
      refsPag.firstPage.textContent = 1;
      refsPag.minus1Page.classList.remove('btn-active');
      refsPag.plus2Page.classList.remove('btn-active');
      refsPag.plus1Page.classList.remove('btn-active');
      refsPag.minus2Page.classList.remove('btn-active');
      refsPag.firstPage.classList.remove('btn-active');
      refsPag.activPage.classList.remove('btn-active');

      refsPag.lastPage.textContent = data.total_pages;
      refsPag.minus2Page.textContent = data.page - 2;
      refsPag.activPage.classList.add('btn-active');
      refsPag.minus1Page.textContent = data.page - 1;
      refsPag.activPage.textContent = data.page;
      refsPag.plus1Page.textContent = data.page + 1;
      refsPag.plus2Page.textContent = data.page + 2;
      break;
    case 5:
      refsPag.firstPage.textContent = 1;
      refsPag.activPage.classList.remove('btn-active');
      refsPag.plus2Page.classList.remove('btn-active');
      refsPag.minus1Page.classList.remove('btn-active');
      refsPag.minus2Page.classList.remove('btn-active');
      refsPag.firstPage.classList.remove('btn-active');
      refsPag.lastPage.textContent = data.total_pages;
      refsPag.minus2Page.textContent = data.page - 3;
      refsPag.plus1Page.classList.add('btn-active');
      refsPag.minus1Page.textContent = data.page - 2;
      refsPag.activPage.textContent = data.page - 1;
      refsPag.plus1Page.textContent = data.page;
      refsPag.plus2Page.textContent = data.page + 1;
      break;
    case 6:
      refsPag.firstPage.textContent = 1;
      refsPag.plus1Page.classList.remove('btn-active');
      refsPag.minus1Page.classList.remove('btn-active');
      refsPag.minus2Page.classList.remove('btn-active');
      refsPag.firstPage.classList.remove('btn-active');
      refsPag.activPage.classList.remove('btn-active');
      refsPag.lastPage.textContent = data.total_pages;
      refsPag.minus2Page.textContent = data.page - 4;
      refsPag.plus2Page.classList.add('btn-active');
      refsPag.minus1Page.textContent = data.page - 3;
      refsPag.activPage.textContent = data.page - 2;
      refsPag.plus1Page.textContent = data.page - 1;
      refsPag.plus2Page.textContent = data.page;
      break;
    case data.total_pages - 2:
      refsPag.firstPage.textContent = 1;
      refsPag.plus2Page.classList.remove('btn-active');
      refsPag.minus1Page.classList.remove('btn-active');
      refsPag.minus2Page.classList.remove('btn-active');
      refsPag.lastPage.classList.remove('btn-active');
      refsPag.firstPage.classList.remove('btn-active');
      refsPag.activPage.classList.remove('btn-active');
      refsPag.lastPage.textContent = data.total_pages;
      refsPag.minus2Page.textContent = data.page - 3;
      refsPag.plus1Page.classList.add('btn-active');
      refsPag.minus1Page.textContent = data.page - 2;
      refsPag.activPage.textContent = data.page - 1;
      refsPag.plus1Page.textContent = data.page;
      refsPag.plus2Page.textContent = data.page + 1;
      break;
    case data.total_pages - 1:
      refsPag.firstPage.textContent = 1;
      refsPag.plus1Page.classList.remove('btn-active');
      refsPag.minus1Page.classList.remove('btn-active');
      refsPag.minus2Page.classList.remove('btn-active');
      refsPag.lastPage.classList.remove('btn-active');
      refsPag.firstPage.classList.remove('btn-active');
      refsPag.activPage.classList.remove('btn-active');
      refsPag.lastPage.textContent = data.total_pages;
      refsPag.minus2Page.textContent = data.page - 4;
      refsPag.plus2Page.classList.add('btn-active');
      refsPag.minus1Page.textContent = data.page - 3;
      refsPag.activPage.textContent = data.page - 2;
      refsPag.plus1Page.textContent = data.page - 1;
      refsPag.plus2Page.textContent = data.page;
      break;
    case data.total_pages:
      refsPag.firstPage.textContent = 1;
      refsPag.plus2Page.classList.remove('btn-active');
      refsPag.plus1Page.classList.remove('btn-active');
      refsPag.minus1Page.classList.remove('btn-active');
      refsPag.minus2Page.classList.remove('btn-active');
      refsPag.firstPage.classList.remove('btn-active');
      refsPag.activPage.classList.remove('btn-active');
      refsPag.lastPage.textContent = data.total_pages;
      refsPag.minus2Page.textContent = data.page - 5;
      refsPag.lastPage.classList.add('btn-active');
      refsPag.minus1Page.textContent = data.page - 4;
      refsPag.activPage.textContent = data.page - 3;
      refsPag.plus1Page.textContent = data.page - 2;
      refsPag.plus2Page.textContent = data.page - 1;
      break;

    default:
      refsPag.firstPage.textContent = 1;
      refsPag.plus2Page.classList.remove('btn-active');
      refsPag.plus1Page.classList.remove('btn-active');
      refsPag.minus1Page.classList.remove('btn-active');
      refsPag.minus2Page.classList.remove('btn-active');
      refsPag.firstPage.classList.remove('btn-active');
      refsPag.lastPage.classList.remove('btn-active');
      refsPag.activPage.classList.add('btn-active');
      refsPag.plusQuery.classList.remove('btn-active');
      refsPag.minusQuery.classList.remove('btn-active');
      refsPag.lastPage.textContent = data.total_pages;
      refsPag.minus2Page.textContent = data.page - 2;
      refsPag.minus1Page.textContent = data.page - 1;
      refsPag.activPage.textContent = data.page;
      refsPag.plus1Page.textContent = data.page + 1;
      refsPag.plus2Page.textContent = data.page + 2;
  }

  switch (data.total_pages) {
    case 1:
      refsPag.plus2Page.classList.add('visually-hidden');
      refsPag.plus1Page.classList.add('visually-hidden');
      refsPag.minus1Page.classList.add('visually-hidden');
      refsPag.minus2Page.classList.add('visually-hidden');
      refsPag.lastPage.classList.add('visually-hidden');
      refsPag.activPage.classList.add('visually-hidden');
      refsPag.minusTen.classList.add('visually-hidden');
      refsPag.plusTen.classList.add('visually-hidden');

      refsPag.minusQuery.classList.add('visually-hidden');
      refsPag.plusQuery.classList.add('visually-hidden');

      break;
    case 2:
      refsPag.plus2Page.classList.add('visually-hidden');
      refsPag.plus1Page.classList.add('visually-hidden');
      refsPag.minus1Page.classList.add('visually-hidden');
      refsPag.minus2Page.classList.remove('visually-hidden');
      refsPag.lastPage.classList.add('visually-hidden');
      refsPag.activPage.classList.add('visually-hidden');
      refsPag.minusTen.classList.add('visually-hidden');
      refsPag.plusTen.classList.add('visually-hidden');

      refsPag.minusQuery.classList.add('visually-hidden');
      refsPag.plusQuery.classList.add('visually-hidden');
      break;
    case 3:
      refsPag.plus2Page.classList.add('visually-hidden');
      refsPag.plus1Page.classList.add('visually-hidden');
      refsPag.minus1Page.classList.remove('visually-hidden');
      refsPag.minus2Page.classList.remove('visually-hidden');
      refsPag.lastPage.classList.add('visually-hidden');
      refsPag.activPage.classList.add('visually-hidden');
      refsPag.minusTen.classList.add('visually-hidden');
      refsPag.plusTen.classList.add('visually-hidden');

      refsPag.minusQuery.classList.add('visually-hidden');
      refsPag.plusQuery.classList.add('visually-hidden');

      break;
    case 4:
      refsPag.plus2Page.classList.add('visually-hidden');
      refsPag.plus1Page.classList.add('visually-hidden');
      refsPag.minus1Page.classList.remove('visually-hidden');
      refsPag.minus2Page.classList.remove('visually-hidden');
      refsPag.lastPage.classList.remove('visually-hidden');
      refsPag.activPage.classList.add('visually-hidden');
      refsPag.minusTen.classList.add('visually-hidden');
      refsPag.plusTen.classList.add('visually-hidden');
      refsPag.minusQuery.classList.remove('visually-hidden');
      refsPag.plusQuery.classList.remove('visually-hidden');

      break;
    case 5:
      refsPag.plus2Page.classList.add('visually-hidden');
      refsPag.plus1Page.classList.add('visually-hidden');
      refsPag.minus1Page.classList.remove('visually-hidden');
      refsPag.minus2Page.classList.remove('visually-hidden');
      refsPag.lastPage.classList.remove('visually-hidden');
      refsPag.activPage.classList.remove('visually-hidden');
      refsPag.minusTen.classList.add('visually-hidden');
      refsPag.plusTen.classList.add('visually-hidden');

      refsPag.minusQuery.classList.remove('visually-hidden');
      refsPag.plusQuery.classList.remove('visually-hidden');
      break;
    case 6:
      refsPag.plus2Page.classList.add('visually-hidden');
      refsPag.plus1Page.classList.remove('visually-hidden');
      refsPag.minus1Page.classList.remove('visually-hidden');
      refsPag.minus2Page.classList.remove('visually-hidden');
      refsPag.lastPage.classList.remove('visually-hidden');
      refsPag.activPage.classList.remove('visually-hidden');
      refsPag.minusTen.classList.add('visually-hidden');
      refsPag.plusTen.classList.add('visually-hidden');
      refsPag.minusQuery.classList.remove('visually-hidden');
      refsPag.plusQuery.classList.remove('visually-hidden');
      break;

    default:
      refsPag.plus2Page.classList.remove('visually-hidden');
      refsPag.plus1Page.classList.remove('visually-hidden');
      refsPag.minus1Page.classList.remove('visually-hidden');
      refsPag.minus2Page.classList.remove('visually-hidden');
      refsPag.lastPage.classList.remove('visually-hidden');
      refsPag.activPage.classList.remove('visually-hidden');
      refsPag.minusQuery.classList.remove('visually-hidden');
      refsPag.plusQuery.classList.remove('visually-hidden');
      refsPag.minusTen.classList.remove('visually-hidden');
      refsPag.plusTen.classList.remove('visually-hidden');
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
  spinner.start();

  try {
    if (refs.filterNowPlaying.disabled) {
      await movieAPI
        .getNowPlaying()
        .then(data => {
          totalPages = data.total_pages;
          if (pageActive > data.total_pages) {
            pageActive = 1;
            onClickIncrementPage(e);
          }
          if (pageActive >= data.total_pages) {
            refsPag.lastPage.classList.add('btn-active');
          }
          if (data.total_pages > 500) {
            onFilterObj(data);
            evtTarget.blur();
            return;
          }

          onCreateListFilmPagination(dataService, data, evtTarget);
        })
        .catch(err => Notify.failure(err))
        .finally(() => {
          spinner.stop();
        });
      return;
    } else if (refs.filterPopular.disabled) {
      await movieAPI
        .getPopular()
        .then(data => {
          totalPages = data.total_pages;

          if (pageActive > data.total_pages) {
            pageActive = 1;
            onClickIncrementPage(e);
          }
          if (pageActive >= data.total_pages) {
            refsPag.lastPage.classList.add('btn-active');
          }
          if (data.total_pages > 500) {
            onFilterObj(data);
            evtTarget.blur();
            return;
          }

          onCreateListFilmPagination(dataService, data, evtTarget);
        })
        .catch(err => Notify.failure(err))
        .finally(() => {
          spinner.stop();
        });
      return;
    } else if (refs.filterTopRated.disabled) {
      await movieAPI
        .getTopRated()
        .then(data => {
          totalPages = data.total_pages;
          if (pageActive > data.total_pages) {
            pageActive = 1;
            onClickIncrementPage(e);
          }
          if (pageActive >= data.total_pages) {
            refsPag.lastPage.classList.add('btn-active');
          }
          if (data.total_pages > 500) {
            onFilterObj(data);
            evtTarget.blur();
            return;
          }

          onCreateListFilmPagination(dataService, data, evtTarget);
        })
        .catch(err => Notify.failure(err))
        .finally(() => {
          spinner.stop();
        });
      return;
    } else if (refs.filterUpcoming.disabled) {
      await movieAPI
        .getUpcoming()
        .then(data => {
          totalPages = data.total_pages;
          if (pageActive > data.total_pages) {
            pageActive = 1;
            onClickIncrementPage(e);
          }
          if (pageActive >= data.total_pages) {
            refsPag.lastPage.classList.add('btn-active');
          }
          if (data.total_pages > 500) {
            onFilterObj(data);
            evtTarget.blur();
            return;
          }

          onCreateListFilmPagination(dataService, data, evtTarget);
        })
        .catch(err => Notify.failure(err))
        .finally(() => {
          spinner.stop();
        });
      return;
    } else if (formValue !== '') {
      await movieAPI
        .getSearchMovies()
        .then(data => {
          evtTarget.blur();
          pagination(data);

          if (pageActive >= data.total_pages) {
            refsPag.lastPage.classList.add('btn-active');
          }

          const necessaryData = dataService.getDataTrendMovies(data.results);
          const markupTrendMovies = createMarkupFilmsList(necessaryData);
          refs.moviesList.innerHTML = markupTrendMovies;
          refsPag.minusQuery.disabled = false;
          totalPages = data.total_pages;
          if (pageActive > data.total_pages) {
            pageActive = 1;
            onClickIncrementPage(e);
          }
        })
        .catch(err => {
          Notify.failure(err);
        })
        .finally(() => {
          spinner.stop();
        });

      return;
    } else {
      await movieAPI
        .getTrendMovie()
        .then(data => {
          evtTarget.blur();
          totalPages = data.total_pages;
          if (pageActive > data.total_pages) {
            pageActive = 1;
            onClickIncrementPage(e);
          }
          if (pageActive >= data.total_pages) {
            refsPag.lastPage.classList.add('btn-active');
          }

          const necessaryData = dataService.getDataTrendMovies(data.results);
          const markupTrendMovies = createMarkupFilmsList(necessaryData);
          refs.moviesList.innerHTML = markupTrendMovies;

          pagination(data);
        })
        .catch(err => {
          Notify.failure(err);
        })
        .finally(() => {
          spinner.stop();
        });
    }
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
    evtTarget.blur();
    return;
  }
  spinner.start();
  try {
    if (refs.filterNowPlaying.disabled) {
      await movieAPI
        .getNowPlaying()
        .then(data => {
          totalPages = data.total_pages;
          if (pageActive > data.total_pages) {
            pageActive = 1;
            onClickDecrementPage(e);
          }
          if (data.total_pages > 500) {
            onFilterObj(data);
            evtTarget.blur();
            return;
          }

          onCreateListFilmPagination(dataService, data, evtTarget);
        })
        .catch(err => Notify.failure(err))
        .finally(() => {
          spinner.stop();
        });
      return;
    } else if (refs.filterPopular.disabled) {
      await movieAPI
        .getPopular()
        .then(data => {
          totalPages = data.total_pages;
          if (pageActive > data.total_pages) {
            pageActive = 1;
            onClickDecrementPage(e);
          }
          if (data.total_pages > 500) {
            onFilterObj(data);
            evtTarget.blur();
            return;
          }

          onCreateListFilmPagination(dataService, data, evtTarget);
        })
        .catch(err => Notify.failure(err))
        .finally(() => {
          spinner.stop();
        });
      return;
    } else if (refs.filterTopRated.disabled) {
      await movieAPI
        .getTopRated()
        .then(data => {
          totalPages = data.total_pages;
          if (pageActive > data.total_pages) {
            pageActive = 1;
            onClickDecrementPage(e);
          }
          if (data.total_pages > 500) {
            onFilterObj(data);
            evtTarget.blur();
            return;
          }

          onCreateListFilmPagination(dataService, data, evtTarget);
        })
        .catch(err => Notify.failure(err))
        .finally(() => {
          spinner.stop();
        });
      return;
    } else if (refs.filterUpcoming.disabled) {
      await movieAPI
        .getUpcoming()
        .then(data => {
          totalPages = data.total_pages;
          if (pageActive > data.total_pages) {
            pageActive = 1;
            onClickDecrementPage(e);
          }
          if (data.total_pages > 500) {
            onFilterObj(data);
            evtTarget.blur();
            return;
          }

          onCreateListFilmPagination(dataService, data, evtTarget);
        })
        .catch(err => Notify.failure(err))
        .finally(() => {
          spinner.stop();
        });
      return;
    } else if (formValue !== '') {
      await movieAPI
        .getSearchMovies()
        .then(data => {
          totalPages = data.total_pages;
          if (pageActive > data.total_pages) {
            pageActive = 2;
            onClickDecrementPage(e);
          }

          onCreateListFilmPagination(dataService, data, evtTarget);
        })
        .catch(err => {
          Notify.failure(err);
        })
        .finally(() => {
          spinner.stop();
        });
      return;
    } else {
      await movieAPI
        .getTrendMovie()
        .then(data => {
          totalPages = data.total_pages;
          if (pageActive > data.total_pages) {
            pageActive = 1;
            onClickDecrementPage(e);
          }
          onCreateListFilmPagination(dataService, data, evtTarget);
        })
        .catch(err => {
          Notify.failure(err);
        })
        .finally(() => {
          spinner.stop();
        });
    }
  } catch (error) {
    Notify.failure(error);
  }
}
export async function onClickPaginationBtnNumber(e) {
  const evtTarget = e.target;
  pageActive = Number(evtTarget.textContent);
  spinner.start();

  if (evtTarget.nodeName !== 'BUTTON') {
    return;
  }
  try {
    const movieAPI = new MovieAPI();
    const dataService = new DataService();
    const formValue = refs.searchForm.searchQuery.value.trim();
    movieAPI.query = formValue;
    movieAPI.page = pageActive;

    if (refs.filterNowPlaying.disabled) {
      await movieAPI
        .getNowPlaying()
        .then(data => {
          totalPages = data.total_pages;
          if (data.total_pages > 500) {
            onFilterObj(data);
            evtTarget.blur();
            return;
          }

          onCreateListFilmPagination(dataService, data, evtTarget);
        })
        .catch(err => Notify.failure(err))
        .finally(() => {
          spinner.stop();
        });
      return;
    } else if (refs.filterPopular.disabled) {
      await movieAPI
        .getPopular()
        .then(data => {
          totalPages = data.total_pages;
          if (data.total_pages > 500) {
            onFilterObj(data);
            evtTarget.blur();
            return;
          }

          onCreateListFilmPagination(dataService, data, evtTarget);
        })
        .catch(err => Notify.failure(err))
        .finally(() => {
          spinner.stop();
        });
      return;
    } else if (refs.filterTopRated.disabled) {
      await movieAPI
        .getTopRated()
        .then(data => {
          totalPages = data.total_pages;
          if (data.total_pages > 500) {
            onFilterObj(data);
            evtTarget.blur();
            return;
          }

          onCreateListFilmPagination(dataService, data, evtTarget);
        })
        .catch(err => Notify.failure(err))
        .finally(() => {
          spinner.stop();
        });
      return;
    } else if (refs.filterUpcoming.disabled) {
      await movieAPI
        .getUpcoming()
        .then(data => {
          totalPages = data.total_pages;
          if (data.total_pages > 500) {
            onFilterObj(data);
            evtTarget.blur();
            return;
          }

          onCreateListFilmPagination(dataService, data, evtTarget);
        })
        .catch(err => Notify.failure(err))
        .finally(() => {
          spinner.stop();
        });
      return;
    } else if (formValue !== '') {
      await movieAPI
        .getSearchMovies()
        .then(data => {
          totalPages = data.total_pages;
          onCreateListFilmPagination(dataService, data, evtTarget);
        })
        .catch(err => {
          Notify.failure(err);
        })
        .finally(() => {
          spinner.stop();
        });
      return;
    } else {
      await movieAPI
        .getTrendMovie()
        .then(data => {
          totalPages = data.total_pages;
          onCreateListFilmPagination(dataService, data, evtTarget);
        })
        .catch(err => {
          Notify.failure(err);
        })
        .finally(() => {
          spinner.stop();
        });
    }
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
  spinner.start();

  try {
    if (refs.filterNowPlaying.disabled) {
      await movieAPI
        .getNowPlaying()
        .then(data => {
          totalPages = data.total_pages;
          if (pageActive <= 0) {
            return;
          }
          if (data.total_pages > 500) {
            onFilterObj(data);
            evtTarget.blur();
            return;
          }

          onCreateListFilmPagination(dataService, data, evtTarget);
        })
        .catch(err => Notify.failure(err))
        .finally(() => {
          spinner.stop();
        });
      return;
    } else if (refs.filterPopular.disabled) {
      await movieAPI
        .getPopular()
        .then(data => {
          totalPages = data.total_pages;
          if (pageActive <= 0) {
            return;
          }
          if (data.total_pages > 500) {
            onFilterObj(data);
            evtTarget.blur();
            return;
          }

          onCreateListFilmPagination(dataService, data, evtTarget);
        })
        .catch(err => Notify.failure(err))
        .finally(() => {
          spinner.stop();
        });
      return;
    } else if (refs.filterTopRated.disabled) {
      await movieAPI
        .getTopRated()
        .then(data => {
          totalPages = data.total_pages;
          if (pageActive <= 0) {
            return;
          }
          if (data.total_pages > 500) {
            onFilterObj(data);
            evtTarget.blur();
            return;
          }

          onCreateListFilmPagination(dataService, data, evtTarget);
        })
        .catch(err => Notify.failure(err))
        .finally(() => {
          spinner.stop();
        });
      return;
    } else if (refs.filterUpcoming.disabled) {
      await movieAPI
        .getUpcoming()
        .then(data => {
          totalPages = data.total_pages;
          if (pageActive <= 0) {
            return;
          }
          if (data.total_pages > 500) {
            onFilterObj(data);
            evtTarget.blur();
            return;
          }

          onCreateListFilmPagination(dataService, data, evtTarget);
        })
        .catch(err => Notify.failure(err))
        .finally(() => {
          spinner.stop();
        });
      return;
    } else if (formValue !== '') {
      await movieAPI
        .getSearchMovies()
        .then(data => {
          totalPages = data.total_pages;
          onCreateListFilmPagination(dataService, data, evtTarget);
        })
        .catch(err => {
          Notify.failure(err);
        })
        .finally(() => {
          spinner.stop();
        });
      return;
    } else {
      await movieAPI
        .getTrendMovie()
        .then(data => {
          totalPages = data.total_pages;
          if (pageActive <= 0) {
            return;
          }
          onCreateListFilmPagination(dataService, data, evtTarget);
        })
        .catch(err => {
          Notify.failure(err);
        })
        .finally(() => {
          spinner.stop();
        });
    }
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
  spinner.start();
  try {
    if (refs.filterNowPlaying.disabled) {
      await movieAPI
        .getNowPlaying()
        .then(data => {
          totalPages = data.total_pages;
          if (!data.total_pages) {
            refsPag.containerPage.classList.add('visually-hidden');
          }
          if (data.total_pages > 500) {
            onFilterObj(data);
            evtTarget.blur();
            return;
          }

          onCreateListFilmPagination(dataService, data, evtTarget);
        })
        .catch(err => Notify.failure(err))
        .finally(() => {
          spinner.stop();
        });
      return;
    } else if (refs.filterPopular.disabled) {
      await movieAPI
        .getPopular()
        .then(data => {
          totalPages = data.total_pages;
          if (!data.total_pages) {
            refsPag.containerPage.classList.add('visually-hidden');
          }
          if (data.total_pages > 500) {
            onFilterObj(data);
            evtTarget.blur();
            return;
          }

          onCreateListFilmPagination(dataService, data, evtTarget);
        })
        .catch(err => Notify.failure(err))
        .finally(() => {
          spinner.stop();
        });
      return;
    } else if (refs.filterTopRated.disabled) {
      await movieAPI
        .getTopRated()
        .then(data => {
          totalPages = data.total_pages;
          if (!data.total_pages) {
            refsPag.containerPage.classList.add('visually-hidden');
          }
          if (data.total_pages > 500) {
            onFilterObj(data);
            evtTarget.blur();
            return;
          }

          onCreateListFilmPagination(dataService, data, evtTarget);
        })
        .catch(err => Notify.failure(err))
        .finally(() => {
          spinner.stop();
        });
      return;
    } else if (refs.filterUpcoming.disabled) {
      await movieAPI
        .getUpcoming()
        .then(data => {
          totalPages = data.total_pages;
          if (!data.total_pages) {
            refsPag.containerPage.classList.add('visually-hidden');
          }
          if (data.total_pages > 500) {
            onFilterObj(data);
            evtTarget.blur();
            return;
          }

          onCreateListFilmPagination(dataService, data, evtTarget);
        })
        .catch(err => Notify.failure(err))
        .finally(() => {
          spinner.stop();
        });
      return;
    } else if (formValue !== '') {
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
          refsPag.minusQuery.disabled = false;
        })
        .catch(err => {
          Notify.failure(err);
        })
        .finally(() => {
          spinner.stop();
        });
      return;
    } else {
      await movieAPI
        .getTrendMovie()
        .then(data => {
          totalPages = data.total_pages;
          if (!data.total_pages) {
            refsPag.containerPage.classList.add('visually-hidden');
          }
          onCreateListFilmPagination(dataService, data, evtTarget);
        })
        .catch(err => {
          Notify.failure(err);
        })
        .finally(() => {
          spinner.stop();
        });
    }
  } catch (error) {
    Notify.failure(error);
  }
}

export function onFilterObj(obj) {
  const dataService = new DataService();
  const dataObj = obj;
  dataObj.total_pages = 500;
  totalPages = dataObj.total_pages;
  const necessaryData = dataService.getDataTrendMovies(dataObj.results);
  const markupTrendMovies = createMarkupFilmsList(necessaryData);
  refs.moviesList.innerHTML = markupTrendMovies;
  pagination(dataObj);
}

function onCreateListFilmPagination(firstAPI, dataObj, taget) {
  const necessaryData = firstAPI.getDataTrendMovies(dataObj.results);
  const markupTrendMovies = createMarkupFilmsList(necessaryData);
  refs.moviesList.innerHTML = markupTrendMovies;
  taget.blur();
  pagination(dataObj);
}
