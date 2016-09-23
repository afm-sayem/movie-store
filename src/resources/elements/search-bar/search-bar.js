import {customElement, inject} from 'aurelia-framework';
import {MovieStore} from '~/services/movie';

@customElement('search-bar')
@inject(MovieStore)
export class SearchBar {
  constructor(movieStore) {
    this.movieStore = movieStore;
  }

  search() {
    let filter = {};
    this.searchText ? filter = { search: {title: this.searchText} } : filter = undefined;
    return this.movieStore.setMovies(filter);
  }
}

