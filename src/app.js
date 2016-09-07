export class App {
  configureRouter(config, router) {
    config.title = 'Movie Store';
    config.map([
      {
        route: '',
        name: 'home',
        moduleId: 'views/home/home',
        nav: true,
        title: 'Home'
      },
      {
        route: 'movies',
        name: 'movies',
        moduleId: 'views/movie/movie',
        nav: true,
        title: 'Movie'
      }
    ]);

    this.router = router;
  }
}
