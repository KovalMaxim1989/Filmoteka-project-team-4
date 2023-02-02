const baseImgUrl = `https://image.tmdb.org/t/p/`;
const imgPosterSize = `w500`;

// TODO here you need get genres!!!

export class DataService {
  getDataTrendMovies(results, allGenres) {
    return results.map(
      ({ poster_path, genre_ids, vote_average, title, id, release_date }) => {
        const imgUrl = baseImgUrl + imgPosterSize + poster_path;
        // const genres = genresService.getTrendMovieGenres(genre_ids, allGenres);  // TODO here you need handle genres

        return {
          imgUrl: imgUrl,
          genres: genres, // TODO here you need handle genres
          rating: vote_average.toFixed(1),
          name: title,
          id: id,
          year: Number.parseInt(release_date),
        };
      }
    );
  }

  getDataSelectedMovie(data) {
    const {
      poster_path,
      genres,
      vote_average,
      vote_count,
      popularity,
      title,
      original_title,
      overview,
      release_date,
    } = data;

    const imgUrl = baseImgUrl + imgPosterSize + poster_path;

    return {
      imgUrl: imgUrl,
      name: title,
      vote: vote_average.toFixed(1),
      votes: vote_count,
      popularity: popularity,
      originalTitle: original_title,
      // genres: genresService.getSelectedMovieGenres(genres), // TODO here you need handle genres
      about: overview,
      year: Number.parseInt(release_date),
    };
  }
}
