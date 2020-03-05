import { Injectable } from '@angular/core';
import { Film } from '../models/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  films: Film[] = [
    new Film("Alien", "Horror", "assets/images/alien.png", "", ""),
    new Film("Black Panther", "Action", "assets/images/black-panther-web.jpg", "", ""),
    new Film("Goodfellas", "Drama", "assets/images/goodfellas.jpg", "", ""),
    new Film("Halloween", "Horror", "assets/images/Halloween.jpg", "", ""),
    new Film("Mission Impossible", "Action", "assets/images/mission-impossible.jpg", "", ""),
    new Film("Moonlight", "Drama", "assets/images/moonlight.jpg", "", ""),
    new Film("Ready Player One", "Action", "assets/images/player_one.jpg", "", ""),
    new Film("A Star is Born", "Drama", "assets/images/star-is-born-web.jpg", "", ""),
    new Film("Us", "Horror", "assets/images/usfinalposter.jpg", "", "")
  ];

  constructor() { }

  getFilms() {
    return this.films;
 }

 getGenre(genre: String) {
   let results = [];
   for (var x = 0; x < this.films.length; x++) {
      if (this.films[x].genre === genre) {
        results.push(this.films[x])
      }
    }
    return results;
  }

  getFilm(title: String) {
    for (var x = 0; x < this.films.length; x++) {
      if (this.films[x].title === title) {
        return this.films[x]
      }
    }
  }
}
