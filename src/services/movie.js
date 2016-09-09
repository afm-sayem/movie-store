import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
// import 'fetch';

@inject(HttpClient)
export class MovieApi {
  constructor(http) {
    this.http = new HttpClient()
      .configure(x => {
        x.withBaseUrl('http://localhost:3000/');
      });
  }

  getMovies(options) {
    return this.http.fetch('movies');
  }

}
