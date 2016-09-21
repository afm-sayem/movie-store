import {inject} from 'aurelia-framework';
import {MovieStore} from '../../services/movie';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(MovieStore, EventAggregator)
export class Movie {
  constructor(movieStore, ea) {
    this.movieStore = movieStore;
    this.ea = ea;
  }

  activate() {
    this.movieStore.setMovies();
    this.ea.subscribe('movie:index', () => {
      this.movies = this.movieStore.movies.results;
    });
  }
}
