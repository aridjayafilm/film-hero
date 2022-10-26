import { async } from "regenerator-runtime";
import TheMovieDbSource from "../../data/themoviedb-source";
import {
    createGenresSkeleton,
    createMovieItemCardSkeleton,
    createMovieItemCardTemplate,
    createMovieItemTemplate,
    createSkeletonBannerMovie,
    setGenreItemTemplate,
} from "../templates/template-creator";
import genres from '../../data/genres';

const Discover = {
    async render() {
        return `
        <section class="banner">
            <div class="banner-card">
                ${createSkeletonBannerMovie()}
            </div>
        </section>
        <section class="movies">
            <div class="filter">
                ${createGenresSkeleton()}
            </div>
            <div class="movies-list">
                ${createMovieItemCardSkeleton(20)}
            </div>
        </section>
        `;
    },

    async afterRender() {
        const bannerCard = document.querySelector('.banner-card');
        const moviesList = document.querySelector('.movies-list');
        
        const getMovies = await TheMovieDbSource.discoverMovies();
        
        const filters = document.querySelector('.filter');

        bannerCard.innerHTML = '';
        filters.innerHTML = '';
        
        // insert banner Content
        bannerCard.innerHTML += `
            <img src="./images/John-Wick-3.jpg" alt="banner" class="banner-img">
            <div class="card-content">
                <div class="card-info">
                    <div class="genre">
                        <span class="material-icons-sharp">movie</span>
                        <span>Action/Thriller</span>
                    </div>
                    <div class="year">
                        <span class="material-icons-sharp">calendar_month</span>
                        <span>2019</span>
                    </div>
                    <div class="duration">
                        <span class="material-icons-sharp">timer</span>
                        <span>2h 11m</span>
                    </div>
                    <div class="quality">4K</div>
                </div>
                <h2 class="card-title">John Wick: Chapter 3 - Parabellum</h2>
            </div>
        `;

        // insert filter bar content
        filters.innerHTML += `
            <div class="filter-bar">
                <div class="filter-year">
                    <select name="year" id="year">
                        <option value="year">All year</option>
                        <option value="year">2022 - 2019</option>
                        <option value="year">2018 - 2015</option>
                        <option value="year">2014 - 2011</option>
                        <option value="year">2010 - 2007</option>
                        <option value="year">2006 - 2003</option>
                        <option value="year">2002 - 2001</option>
                    </select>
                </div>
                <div class="filter-genres">
                    <div class="genres">
                        ${setGenreItemTemplate(genres)}
                    </div>
                </div>
            </div>
        `;
        
        moviesList.innerHTML = '';
        getMovies.forEach((movie) => {
            moviesList.innerHTML += createMovieItemCardTemplate(movie);
        });

        // add genreItem eventListener
        const genreItems = document.querySelectorAll('.genre');
        let genreSelected = [];

        genreItems.forEach(genre => {
            genre.addEventListener('click', async() => {
                if (genreSelected.length == 0) {
                    genreSelected.push(genre.id);
                } else {
                    if (genreSelected.includes(genre.id)) {
                        genreSelected.forEach((genreId, index) => {
                            if (genreId == genre.id) {
                                genreSelected.splice(index, 1);
                            }
                        });
                    } else {
                        genreSelected.push(genre.id);
                    }
                }
                moviesList.innerHTML = '';
                genre.classList.toggle('highlight');
                const getMoviesByGenres = await TheMovieDbSource.filterWithGenres(genreSelected);
                getMoviesByGenres.forEach((movie) => {
                    moviesList.innerHTML += createMovieItemCardTemplate(movie);
                });
                console.log(genreSelected);
            });
        });

        getMovies.forEach((movie) => {
            moviesList.innerHTML += createMovieItemCardTemplate(movie);
        });
    }
}

export default Discover;