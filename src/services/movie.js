import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import {format} from 'objection-find-query';

@inject(HttpClient)
export class MovieApi {
  constructor(http) {
    this.http = http;
  }

  getMovies(options) {
    return this.http.fetch('movies');
  }

}
