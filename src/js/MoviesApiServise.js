import axios from 'axios';

export class MovieAPI {
  #BASE_URL = 'https://api.themoviedb.org/3';
  #API_KEY = 'd03712107dcdd723f1173c5ee2c0d8c1';
  #query = '';

  async getTrendMovie() {
    try {
      const { data } = await axios.get(
        `${this.#BASE_URL}/trending/movie/day?api_key=${this.#API_KEY}`
      );
      return data.results;
    } catch (error) {
      console.error(error);
    }
  }

  async getGenres() {
    try {
      const { data } = await axios.get(
        `${this.#BASE_URL}/genre/movie/list?api_key=${
          this.#API_KEY
        }&language=en-US`
      );
      return data.genres;
    } catch (error) {
      console.error(error);
    }
  }

  get query() {
    return this.#query;
  }

  set query(newQuery) {
    this.#query = newQuery;
  }
}
