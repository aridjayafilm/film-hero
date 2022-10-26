import API_ENDPOINT from '../globals/api-endpoint';

class TheMovieDbSource {
  static async discoverMovies() {
    const response = await fetch(API_ENDPOINT.DISCOVER);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async searchMovies(query) {
    const response = await fetch(API_ENDPOINT.SEARCH+query);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async filterWithGenres(genres) {
    const response = await fetch(API_ENDPOINT.DISCOVER +`&with_genres=${encodeURI(genres.join(','))}`);
    const responseJson = await response.json();
    console.info(responseJson.results)
    return responseJson.results;
  }

  static async nowPlayingMovies() {
    const response = await fetch(API_ENDPOINT.NOW_PLAYING);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async upcomingMovies() {
    const response = await fetch(API_ENDPOINT.UPCOMING);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async detailMovie(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default TheMovieDbSource;
