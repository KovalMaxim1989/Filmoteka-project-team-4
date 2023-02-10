import { createMarkupLibraryList } from './markup';
import { scrollTop } from './button';
import { refs } from './refs';
const refsLib = {
  moviesL: document.querySelector('.js-films-list-library'),
  firstP: document.querySelector('.js-pagination--firstPage-library'),
  minus2P: document.querySelector('.js-pagination--minus2Page-library'),
  minus1P: document.querySelector('.js-pagination--minus1Page-library'),
  activP: document.querySelector('.js-pagination--activPage-library'),
  plus1P: document.querySelector('.js-pagination--plus1Page-library'),
  plus2P: document.querySelector('.js-pagination--plus2Page-library'),
  lastP: document.querySelector('.js-pagination--lastPage-library'),
  minusQu: document.querySelector('.js-btn__minusQuery-library'),
  plusQu: document.querySelector('.js-btn__plusQuery-library'),
  containerP: document.querySelector('.js-pagination__page-library'),
  plusT: document.querySelector('.btn-increment-ten-library'),
  minusT: document.querySelector('.btn-decrement-ten-library'),
  containerPag: document.querySelector('.js-pagination-library'),
};

refsLib.minusQu.addEventListener('click', onClickDecrementPage);
refsLib.plusQu.addEventListener('click', onClickIncrementPage);
refsLib.containerP.addEventListener('click', onClickPaginationBtnNumber);
refsLib.minusT.addEventListener('click', onClickDecrementTen);
refsLib.plusT.addEventListener('click', onClickIncrementTen);
refsLib.lastP.addEventListener('click', onClickPaginationBtnNumber);
refsLib.firstP.addEventListener('click', onClickPaginationBtnNumber);

const list = document.querySelector('.js-films-list-library');
const libraryWatcehd = document.querySelector('.js-btn-library-watched');
const libraryQueue = document.querySelector('.js-btn-library-queue');

const watchedKey = 'watchedMovies';
const queuedKey = 'queueMovies';
let watchedFilms = localStorage.getItem(watchedKey);
let queueFilms = localStorage.getItem(queuedKey);
// function scrollTop() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }
export function paginationLib(data, page) {
  scrollTop();
  switch (page) {
    case 1:
      refsLib.firstP.textContent = 1;
      refsLib.plus2P.classList.remove('btn-active');
      refsLib.plus1P.classList.remove('btn-active');
      refsLib.minus1P.classList.remove('btn-active');
      refsLib.minus2P.classList.remove('btn-active');
      refsLib.firstP.classList.remove('btn-active');
      refsLib.lastP.classList.remove('btn-active');
      refsLib.activP.classList.remove('btn-active');

      refsLib.firstP.classList.add('btn-active');
      refsLib.lastP.textContent = page;
      refsLib.minus2P.textContent = page + 1;
      refsLib.minus1P.textContent = page + 2;
      refsLib.activP.textContent = page + 3;
      refsLib.plus1P.textContent = page + 4;
      refsLib.plus2P.textContent = page + 5;

      break;
    case 2:
      refsLib.firstP.textContent = 1;
      refsLib.firstP.classList.remove('btn-active');
      refsLib.plus2P.classList.remove('btn-active');
      refsLib.plus1P.classList.remove('btn-active');
      refsLib.minus1P.classList.remove('btn-active');
      refsLib.firstP.classList.remove('btn-active');
      refsLib.lastP.classList.remove('btn-active');
      refsLib.activP.classList.remove('btn-active');
      refsLib.lastP.textContent = page;
      refsLib.minus2P.textContent = page;
      refsLib.minus2P.classList.add('btn-active');
      refsLib.minus1P.textContent = page + 1;
      refsLib.activP.textContent = page + 2;
      refsLib.plus1P.textContent = page + 3;
      refsLib.plus2P.textContent = page + 4;
      break;

    case 3:
      refsLib.firstP.textContent = 1;
      refsLib.minus2P.classList.remove('btn-active');
      refsLib.plus2P.classList.remove('btn-active');
      refsLib.plus1P.classList.remove('btn-active');
      refsLib.firstP.classList.remove('btn-active');
      refsLib.lastP.classList.remove('btn-active');
      refsLib.activP.classList.remove('btn-active');

      refsLib.lastP.textContent = page;
      refsLib.minus2P.textContent = page - 1;
      refsLib.minus1P.classList.add('btn-active');
      refsLib.minus1P.textContent = page;
      refsLib.activP.textContent = page + 1;
      refsLib.plus1P.textContent = page + 2;
      refsLib.plus2P.textContent = page + 3;
      break;
    case 4:
      refsLib.firstP.textContent = 1;
      refsLib.minus1P.classList.remove('btn-active');
      refsLib.plus2P.classList.remove('btn-active');
      refsLib.plus1P.classList.remove('btn-active');
      refsLib.minus2P.classList.remove('btn-active');
      refsLib.firstP.classList.remove('btn-active');
      refsLib.activP.classList.remove('btn-active');

      refsLib.lastP.textContent = page;
      refsLib.minus2P.textContent = page - 2;
      refsLib.activP.classList.add('btn-active');
      refsLib.minus1P.textContent = page - 1;
      refsLib.activP.textContent = page;
      refsLib.plus1P.textContent = page + 1;
      refsLib.plus2P.textContent = page + 2;
      break;
    case 5:
      refsLib.firstP.textContent = 1;
      refsLib.activP.classList.remove('btn-active');
      refsLib.plus2P.classList.remove('btn-active');
      refsLib.minus1P.classList.remove('btn-active');
      refsLib.minus2P.classList.remove('btn-active');
      refsLib.firstP.classList.remove('btn-active');
      refsLib.lastP.textContent = page;
      refsLib.minus2P.textContent = page - 3;
      refsLib.plus1P.classList.add('btn-active');
      refsLib.minus1P.textContent = page - 2;
      refsLib.activP.textContent = page - 1;
      refsLib.plus1P.textContent = page;
      refsLib.plus2P.textContent = page + 1;
      break;
    case 6:
      refsLib.firstP.textContent = 1;
      refsLib.plus1P.classList.remove('btn-active');
      refsLib.minus1P.classList.remove('btn-active');
      refsLib.minus2P.classList.remove('btn-active');
      refsLib.firstP.classList.remove('btn-active');
      refsLib.activP.classList.remove('btn-active');
      refsLib.lastP.textContent = page;
      refsLib.minus2P.textContent = page - 4;
      refsLib.plus2P.classList.add('btn-active');
      refsLib.minus1P.textContent = page - 3;
      refsLib.activP.textContent = page - 2;
      refsLib.plus1P.textContent = page - 1;
      refsLib.plus2P.textContent = page;
      break;
    default:
      refsLib.firstP.textContent = 1;
      refsLib.plus2P.classList.remove('btn-active');
      refsLib.plus1P.classList.remove('btn-active');
      refsLib.minus1P.classList.remove('btn-active');
      refsLib.minus2P.classList.remove('btn-active');
      refsLib.firstP.classList.remove('btn-active');
      refsLib.lastP.classList.remove('btn-active');
      refsLib.activP.classList.add('btn-active');
      refsLib.plusQu.classList.remove('btn-active');
      refsLib.minusQu.classList.remove('btn-active');
      refsLib.lastP.textContent = data;
      refsLib.minus2P.textContent = data - 2;
      refsLib.minus1P.textContent = data - 1;
      refsLib.activP.textContent = data;
      refsLib.plus1P.textContent = data + 1;
      refsLib.plus2P.textContent = data + 2;
  }

  switch (data) {
    case 0:
      refsLib.containerPag.classList.add('visually-hidden');
      break;
    case 1:
      refsLib.containerPag.classList.remove('visually-hidden');
      refsLib.plus2P.classList.add('visually-hidden');
      refsLib.plus1P.classList.add('visually-hidden');
      refsLib.minus1P.classList.add('visually-hidden');
      refsLib.minus2P.classList.add('visually-hidden');
      refsLib.lastP.classList.add('visually-hidden');
      refsLib.activP.classList.add('visually-hidden');
      refsLib.minusT.classList.add('visually-hidden');
      refsLib.plusT.classList.add('visually-hidden');

      refsLib.minusQu.classList.add('visually-hidden');
      refsLib.plusQu.classList.add('visually-hidden');

      break;
    case 2:
      refsLib.containerPag.classList.remove('visually-hidden');
      refsLib.plus2P.classList.add('visually-hidden');
      refsLib.plus1P.classList.add('visually-hidden');
      refsLib.minus1P.classList.add('visually-hidden');
      refsLib.minus2P.classList.remove('visually-hidden');
      refsLib.lastP.classList.add('visually-hidden');
      refsLib.activP.classList.add('visually-hidden');
      refsLib.minusT.classList.add('visually-hidden');
      refsLib.plusT.classList.add('visually-hidden');

      refsLib.minusQu.classList.add('visually-hidden');
      refsLib.plusQu.classList.add('visually-hidden');
      break;
    case 3:
      refsLib.containerPag.classList.remove('visually-hidden');
      refsLib.plus2P.classList.add('visually-hidden');
      refsLib.plus1P.classList.add('visually-hidden');
      refsLib.minus1P.classList.remove('visually-hidden');
      refsLib.minus2P.classList.remove('visually-hidden');
      refsLib.lastP.classList.add('visually-hidden');
      refsLib.activP.classList.add('visually-hidden');
      refsLib.minusT.classList.add('visually-hidden');
      refsLib.plusT.classList.add('visually-hidden');

      refsLib.minusQu.classList.add('visually-hidden');
      refsLib.plusQu.classList.add('visually-hidden');

      break;
    case 4:
      refsLib.containerPag.classList.remove('visually-hidden');
      refsLib.plus2P.classList.add('visually-hidden');
      refsLib.plus1P.classList.add('visually-hidden');
      refsLib.minus1P.classList.remove('visually-hidden');
      refsLib.minus2P.classList.remove('visually-hidden');
      refsLib.lastP.classList.remove('visually-hidden');
      refsLib.activP.classList.add('visually-hidden');
      refsLib.minusT.classList.add('visually-hidden');
      refsLib.plusT.classList.add('visually-hidden');
      refsLib.minusQu.classList.remove('visually-hidden');
      refsLib.plusQu.classList.remove('visually-hidden');

      break;
    case 5:
      refsLib.containerPag.classList.remove('visually-hidden');
      refsLib.plus2P.classList.add('visually-hidden');
      refsLib.plus1P.classList.add('visually-hidden');
      refsLib.minus1P.classList.remove('visually-hidden');
      refsLib.minus2P.classList.remove('visually-hidden');
      refsLib.lastP.classList.remove('visually-hidden');
      refsLib.activP.classList.remove('visually-hidden');
      refsLib.minusT.classList.add('visually-hidden');
      refsLib.plusT.classList.add('visually-hidden');

      refsLib.minusQu.classList.remove('visually-hidden');
      refsLib.plusQu.classList.remove('visually-hidden');
      break;
    case 6:
      refsLib.containerPag.classList.remove('visually-hidden');
      refsLib.plus2P.classList.add('visually-hidden');
      refsLib.plus1P.classList.remove('visually-hidden');
      refsLib.minus1P.classList.remove('visually-hidden');
      refsLib.minus2P.classList.remove('visually-hidden');
      refsLib.lastP.classList.remove('visually-hidden');
      refsLib.activP.classList.remove('visually-hidden');
      refsLib.minusT.classList.add('visually-hidden');
      refsLib.plusT.classList.add('visually-hidden');
      refsLib.minusQu.classList.remove('visually-hidden');
      refsLib.plusQu.classList.remove('visually-hidden');
      break;

    default:
      refsLib.containerPag.classList.remove('visually-hidden');
      refsLib.plus2P.classList.remove('visually-hidden');
      refsLib.plus1P.classList.remove('visually-hidden');
      refsLib.minus1P.classList.remove('visually-hidden');
      refsLib.minus2P.classList.remove('visually-hidden');
      refsLib.lastP.classList.remove('visually-hidden');
      refsLib.activP.classList.remove('visually-hidden');
      refsLib.minusQu.classList.remove('visually-hidden');
      refsLib.plusQu.classList.remove('visually-hidden');
      refsLib.minusT.classList.remove('visually-hidden');
      refsLib.plusT.classList.remove('visually-hidden');
  }
}

let arreyWatched = [];
let totalFilms = 1;
let activePage = 1;
let beginPage = 0;
let endPage = 0;
export function onClickDecrementPage(e) {
  activePage -= 1;
  const evtTarget = e.target;
  evtTarget.blur();
  paginationLibAllEvt(activePage, arreyWatched, beginPage, endPage, totalFilms);
}

export function onClickIncrementPage(e) {
  activePage += 1;
  const evtTarget = e.target;
  evtTarget.blur();
  paginationLibAllEvt(activePage, arreyWatched, beginPage, endPage, totalFilms);
}
export function onClickPaginationBtnNumber(e) {
  const evtTarget = e.target;

  if (evtTarget.nodeName !== 'BUTTON') {
    return;
  }

  activePage = Number(evtTarget.textContent);
  paginationLibAllEvt(activePage, arreyWatched, beginPage, endPage, totalFilms);

  evtTarget.blur();
}
export function onClickDecrementTen(e) {
  activePage -= 5;
  evtTarget.blur();
  const evtTarget = e.target;
  paginationLibAllEvt(activePage, arreyWatched, beginPage, endPage, totalFilms);
}
export function onClickIncrementTen(e) {
  activePage += 5;
  evtTarget.blur();
  const evtTarget = e.target;
  paginationLibAllEvt(activePage, arreyWatched, beginPage, endPage, totalFilms);
}

function paginationLibAllEvt(page, arrey, begin, end, total) {
  if (!page || page < 0) {
    page = 1;
    return;
  }

  if (libraryWatcehd.classList.contains('main-btn--library-active')) {
    watchedFilms = localStorage.getItem(watchedKey);
    arrey = JSON.parse(watchedFilms);
    total = Number.parseInt(arrey.length / 18 + 1);
    if (page > total) {
      page = total;
    }
    if (arrey.length === 1) {
      list.innerHTML = createMarkupLibraryList(arrey);
      paginationLib(total, page);
    }
    if (page === 1) {
      const arr = arrey.slice(0, 18);
      list.innerHTML = createMarkupLibraryList(arr);
      paginationLib(total, page);

      return;
    }
    begin = 18 * page - 18;
    end = 18 * page;

    const arr = arrey.slice(begin, end);
    list.innerHTML = createMarkupLibraryList(arr);
    paginationLib(total, page);
  }

  if (libraryQueue.classList.contains('main-btn--library-active')) {
    queueFilms = localStorage.getItem(queuedKey);
    arrey = JSON.parse(queueFilms);
    total = Number.parseInt(arrey.length / 18 + 1);

    if (page > total) {
      page = total;
    }
    if (arrey.length === 1) {
      list.innerHTML = createMarkupLibraryList(arrey);
      paginationLib(total, page);
      return;
    }
    begin = 18 * page - 18;
    end = 18 * page;
    const arr = arrey.slice(begin, end);
    list.innerHTML = createMarkupLibraryList(arr);
    if (page === 1) {
      const arr = arrey.slice(0, 18);
      list.innerHTML = createMarkupLibraryList(arr);
      paginationLib(total, page);
      return;
    }
    paginationLib(total, page);
  }
}
export function paginationOnModal(page) {
  let watched = 0;
  let queue = 0;
  let begin = 1;
  let end = 1;
  let arrey = [];
  let total = 1;
  let arrQue = [];
  let arrWatc = [];
  if (!page || page < 0) {
    page = 1;
    return;
  }

  if (libraryWatcehd.classList.contains('main-btn--library-active')) {
    watched = localStorage.getItem(watchedKey);
    arrey = JSON.parse(watched);
    total = Number.parseInt(arrey.length / 18 + 1);

    if (page > total) {
      page = total;
    }
    begin = 18 * page - 18;
    end = 18 * page;

    arrWatc = arrey.slice(begin, end);
    if (page > 1) {
      if (arrWatc.length === 0) {
        total -= 1;
        page -= 1;
        begin = 18 * page - 18;
        end = 18 * page;

        arrWatc = arrey.slice(begin, end);
        list.innerHTML = createMarkupLibraryList(arrWatc);
        paginationLib(total, page);
        return;
      }
    }
    if (arrey.length === 0 && page === 1) {
      paginationLib(0, page);
      return;
    }
    if (arrey.length === 1) {
      list.innerHTML = createMarkupLibraryList(arrey);
      paginationLib(total, page);
    }
    if (page === 1) {
      arrWatc = arrey.slice(0, 18);
      list.innerHTML = createMarkupLibraryList(arrWatc);
      paginationLib(total, page);

      return;
    }

    list.innerHTML = createMarkupLibraryList(arr);
    paginationLib(total, page);
  }

  if (libraryQueue.classList.contains('main-btn--library-active')) {
    queue = localStorage.getItem(queuedKey);
    arrey = JSON.parse(queue);
    total = Number.parseInt(arrey.length / 18 + 1);

    if (page > total) {
      page = total;
    }
    begin = 18 * page - 18;
    end = 18 * page;

    arrQue = arrey.slice(begin, end);
    if (page > 1) {
      if (arrQue.length === 0) {
        total -= 1;
        page -= 1;
        begin = 18 * page - 18;
        end = 18 * page;

        arrQue = arrey.slice(begin, end);
        list.innerHTML = createMarkupLibraryList(arrQue);
        paginationLib(total, page);
        return;
      }
    }
    if (arrey.length === 0 && page === 1) {
      paginationLib(0, page);

      return;
    }
    if (arrey.length === 1) {
      list.innerHTML = createMarkupLibraryList(arrey);
      paginationLib(total, page);
    }
    if (page === 1) {
      arrQue = arrey.slice(0, 18);
      list.innerHTML = createMarkupLibraryList(arrQue);
      paginationLib(total, page);

      return;
    }
    begin = 18 * page - 18;
    end = 18 * page;

    arrQue = arrey.slice(begin, end);

    list.innerHTML = createMarkupLibraryList(arrQue);
    paginationLib(total, page);
  }
}
export function paginOfMogalIndeFilm() {
  let activPage = 1;
  if (refsLib.firstP.classList.contains('btn-active')) {
    activPage = Number(refsLib.firstP.textContent);
    paginationOnModal(activPage);
    return;
  }
  if (refsLib.minus2P.classList.contains('btn-active')) {
    activPage = Number(refsLib.minus2P.textContent);
    paginationOnModal(activPage);
    return;
  }
  if (refsLib.minus1P.classList.contains('btn-active')) {
    activPage = Number(refsLib.minus1P.textContent);
    paginationOnModal(activPage);
    return;
  }
  if (refsLib.activP.classList.contains('btn-active')) {
    activPage = Number(refsLib.lastP.textContent);
    paginationOnModal(activPage);
    return;
  }
  if (refsLib.plus1P.classList.contains('btn-active')) {
    activPage = Number(refsLib.lastP.textContent);
    paginationOnModal(activPage);
    return;
  }
  if (refsLib.plus2P.classList.contains('btn-active')) {
    activPage = Number(refsLib.lastP.textContent);
    paginationOnModal(activPage);
    return;
  }
  if (refsLib.lastP.classList.contains('btn-active')) {
    activPage = Number(refsLib.lastP.textContent);
    paginationOnModal(activPage);
    return;
  }
}
