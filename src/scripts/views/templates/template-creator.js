import CONFIG from '../../globals/config';

const createMovieDetailTemplate = (movie, genresArray) => {
  const getGenreWithId = (genresMovie) => {
    let genreNames = [];
    genresArray.forEach(genre => {
      genresMovie.forEach(genreIdMovie => {
        if (genreIdMovie.id == genre.id) {
          genreNames.push(genreIdMovie.name);
        }
      });
    });
    
    let template = '';
    genreNames.forEach(genreName => {
      template += `
        <div class="movie-genre-item">${genreName}</div>
      `
    });

    return template;
  }

  let date = new Date(movie.release_date);
  let template = `
  <div class="banner-movie" style="background-image: linear-gradient(to right, hsla(222, 25%, 10%, 0.6), hsla(219, 32%, 10%, 0.6)), url(${CONFIG.ORIGINAL_IMAGE_URL+movie.backdrop_path}">
    
  </div>
  <div class="movie-content">
    <div class="movie-content-poster">
      <img class="movie-poster" src="${CONFIG.BASE_IMAGE_URL + movie.poster_path}" alt="${movie.title}" />
    </div>
    <div class="movie-content-info">
      <h2 class="movie-title">${movie.title}</h2>
      <div class="movie-genres">
        ${getGenreWithId(movie.genres)}
      </div>
      <div class="movie-overview">
        <h3>Overview</h3>
        <p>${movie.overview}</p>
      </div>
      <div class="movie-info">
        <div class="movie-info-item">
          <span class="material-icons-sharp">event</span>
          <p>${date.getFullYear()}</p>
        </div>
        <div class="movie-info-item">
          <span class="material-icons-sharp">timer</span>
          <p>${movie.runtime}m</p>
        </div>
        <div class="movie-info-item">
          <span class="material-icons-sharp">star</span>
          <p>${movie.vote_average}</p>
        </div>
      </div>
    </div>
  </div>
`;

  return template;
}

const createSkeletonBannerMovie = () => {
  return `
    <div class="banner-img skeleton"></div>
    <div class="card-content">
        <div class="card-info">
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text"></div>
        </div>
        <h2 class="skeleton skeleton-text-heading"></h2>
    </div>
  `;
};

const createGenresSkeleton = () => `<div class="skeleton skeleton-filter"></div>`;

const createMovieItemCardSkeleton = (count) => {
  let template = '';
  for (let i = 0; i < count; i += 1) {
    template += `
    <div class="movie-item-card">
      <div class="card-header">
          <div class="card-img skeleton"></div>
      </div>
      <div class="card-body">
          <div class="skeleton skeleton-card-text"></div>
          <div class="skeleton skeleton-card-text"></div>
      </div>
    </div>
    `;
  }
  return template;
}

const createMovieItemCardTemplate = (movie) => {
  return `
    <div class="movie-item-card">
      <div class="card-header">
          <img class="card-img" src="${CONFIG.BASE_IMAGE_URL + movie.poster_path}" alt="movie">
          <div class="card-overlay">
              <div class="bookmark">
                  <span class="material-icons-round">bookmark_border</span>
              </div>
              <div class="rating">
                  <span class="material-icons-sharp">star</span>
                  <span>${movie.vote_average}</span>
              </div>
              <div class="play">
                  <span class="material-icons-sharp">play_circle</span>
              </div>
          </div>
      </div>
      <div class="card-body">
          <h3 class="card-title"><a href="/#/detail/${movie.id}">${movie.title}</a></h3>
      </div>
    </div>
  `;
}

const setGenreItemTemplate = (genres) => {
  let template = '';
  genres.forEach(genre => {
    template += `
      <div class="genre" id="${genre.id}">${genre.name}</div>
    `
  });

  return template;
}

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createMovieItemCardTemplate,
  createMovieDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createSkeletonBannerMovie,
  createGenresSkeleton,
  setGenreItemTemplate,
  createMovieItemCardSkeleton,
};
