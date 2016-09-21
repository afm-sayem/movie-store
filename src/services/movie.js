import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import {format} from 'objection-find-query';
import {buildQueryString} from 'aurelia-path';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(HttpClient, EventAggregator)
export class MovieStore {
  constructor(http, ea) {
    this.http = http;
    this.ea = ea;
  }

  setMovies(options) {
    return this.http.fetch('movies')
      .then(response => response.json())
      .then(data => {
        this._movies = data;
        this.ea.publish('movie:index');
      })
      .catch(error => {
        this._error = error;
      });
  }

  get movies() {
    return this._movies;
  }

}
