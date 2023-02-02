export function createMarkupFilmsList(moviesData) {
  return moviesData
    .map(movie => {
      const { genres, id, imgUrl, name, rating, year } = movie;
      const genresToShow = trimGenresList(genres);

      return `<li class="films__item js-target" data-id="${id}">
                  <div class="films__img-wrapper">
            <img
              src="${imgUrl}"
              alt="${name}"
              class="films__img" loading="lazy"
            />
          </div>
          <div class="films__info">
            <p class="films__name">${name}</p>
            <p class="films__desk">
              <span class="films__genre">${genresToShow}</span> |
              <span class="films__year">${year}</span>
            </p>
            <p class="films__desk">
              <span class="films__rating--text"> Rating: </span>
              <span class="films__rating">${rating}</span>
            </p>
          </div>
      </li>`;
    })
    .join('');
}

//  function render to main page first 3 genres
export function trimGenresList(genres) {
  if (genres.length <= 3) {
    return genres.join(', ');
  } else {
    return `${genres[0]}, ${genres[1]}, Other`;
  }
}

export function createMarkupSelectedMovie(movieData) {
  const {
    imgUrl,
    name,
    vote,
    votes,
    popularity,
    originalTitle,
    genres,
    about,
  } = movieData;
  const genresToShow = trimGenresList(genres);

  return `<div class="img-wrapper">
      <img src="${imgUrl}" alt="${name}" class="modal-main__img" />
    </div>
    <div class="info-wrapper">
      <div class="modal-main__info movie-info">
        <h2 class="movie-info__title">${name}</h2>
        <ul class="movie-info__list">
          <li class="movie-info__item">
            <span class="movie-info__param">Vote / Votes</span>
            <span class="movie-info__value"
              ><span class="movie-info__vote">${vote}</span> /
              <span class="movie-info__votes">${votes}</span></span
            >
          </li>
          <li class="movie-info__item">
            <span class="movie-info__param">Popularity</span>
            <span class="movie-info__value">${popularity}</span>
          </li>
          <li class="movie-info__item">
            <span class="movie-info__param">Original Title</span>
            <span class="movie-info__value movie-info__value--uppercase"
              >${originalTitle}</span
            >
          </li>
          <li class="movie-info__item">
            <span class="movie-info__param">Genre</span>
            <span class="movie-info__value">${genresToShow}</span>
          </li>
        </ul>
        <h3 class="modal-info__subtitle">ABOUT</h3>
        <p class="modal-info__desc">${about}</p>

        <div class="btn-wrapper">
      <button class="main-btn main-btn--modal" name="add-to-watched" type="button">
        ADD to watched
      </button>
      <button class="main-btn main-btn--modal" name="add-to-queue" type="button">
        ADD to queue
      </button>
    </div>
      </div>
      
    </div>`;
}

export function createMarkupLibraryList(moviesData) {
  return moviesData
    .map(movie => {
      const { genres, id, imgUrl, name, vote, year } = movie;
      const genresToShow = trimGenresList(genres);

      return `<li class="films__item js-target" data-id="${id}">
                  <div class="films__img-wrapper">
            <img
              src="${imgUrl}"
              alt="${name}"
              class="films__img" loading="lazy"
            />
          </div>
          <div class="films__info">
            <p class="films__name">${name}</p>
            <p class="films__desk">
              <span class="films__genre">${genresToShow}</span> |
              <span class="films__year">${year}</span>
            </p>
            <p class="films__desk">
              <span class="films__rating--text"> Rating: </span>
              <span class="films__rating">${vote}</span>
            </p>
          </div>
      </li>`;
    })
    .join('');
}
