import {inject} from 'aurelia-framework';
import {MovieApi} from '../../services/movie';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(MovieApi, EventAggregator)
export class Movie {
  constructor(movieApi, ea) {
    this.movieApi = movieApi;
    this.ea = ea;
  }

  activate() {
    this.movieApi.setMovies();
    this.ea.subscribe('movie:index', () => {
      this.movies = this.movieApi.movies.results;
    });
  }
}
