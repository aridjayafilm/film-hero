import CONFIG from './config';

const API_ENDPOINT = {
  DISCOVER: `${CONFIG.BASE_URL}discover/movie?api_key=${CONFIG.KEY}`,
  SEARCH: `${CONFIG.BASE_URL}search/movie?api_key=${CONFIG.KEY}&query=`,
  NOW_PLAYING: `${CONFIG.BASE_URL}movie/now_playing?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
  UPCOMING: `${CONFIG.BASE_URL}movie/upcoming?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
  DETAIL: (id) => `${CONFIG.BASE_URL}movie/${id}?api_key=${CONFIG.KEY}`,
};

export default API_ENDPOINT;
