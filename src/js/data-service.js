import { getTrendMovieGenres } from './trandingfilms';
import defaultImg from '../images/movie-pic.jpg';

const baseImgUrl = `https://image.tmdb.org/t/p/`;
const imgPosterSize = `w500`;

export class DataService {
  getDataTrendMovies(results) {
    return results.map(
      ({ poster_path, genre_ids, vote_average, title, id, release_date }) => {
        let imgUrl = baseImgUrl + imgPosterSize + poster_path;
        let year = Number.parseInt(release_date);
        const genres = getTrendMovieGenres(genre_ids);

        if (!poster_path) {
          imgUrl = defaultImg;
        }

        if (!release_date) {
          year = 'Unknown date';
        }

        return {
          imgUrl: imgUrl,
          genres: genres,
          rating: vote_average.toFixed(1),
          name: title,
          id: id,
          year: year,
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
