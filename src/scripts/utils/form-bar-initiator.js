import { createMovieItemCardTemplate } from "../views/templates/template-creator";
import TheMovieDbSource from "../data/themoviedb-source";

const FormBarInitiator = {
    init({openFormBtn, form, closeFormBtn, mainContent}) {
        openFormBtn.addEventListener('click', (event) => {
            this._searchBarActiveToggle(form);
            event.preventDefault();
        });

        closeFormBtn.addEventListener('click', (event) => {
            this._searchBarActiveToggle(form);
            event.preventDefault();
        });
        
        mainContent.addEventListener('click', (event) => {
            if (form.classList.contains('active')) {
                form.classList.remove('active');
            }
        });

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const searchInputEl = form.querySelector('#search');
            const searchKeyword = searchInputEl.value;

            if (searchKeyword) {
                mainContent.innerHTML = `
                <section class="movies" style="margin-top: 120px">
                    <div class="movies-list">
                    </div>
                </section>
                `;

                const moviesList = document.querySelector('.movies-list');
                const searchMovies = await TheMovieDbSource.searchMovies(searchKeyword);
                searchMovies.forEach(movie => {
                    moviesList.innerHTML += createMovieItemCardTemplate(movie);
                })
            }
        });
    },

    _searchBarActiveToggle(form) {
        form.classList.toggle('active');
    }
}

export default FormBarInitiator;