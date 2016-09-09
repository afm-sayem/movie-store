import {inject} from 'aurelia-framework';
import {MovieApi} from '../../services/movie';

@inject(MovieApi)
export class Movie {
  constructor(movieApi) {
    this.movieApi = movieApi;
  }

  activate() {
    this.movieApi
      .getMovies()
      .then(res => res.json())
      .then(movies => {
        this.movies = movies.results;
      });
  }
}
