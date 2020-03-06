import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../models/film'
import { FilmService } from '../service/film.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {

  filmService: FilmService = new FilmService();
  @Input() genre: String; 
  films: Film[];
 
  constructor() {}

  ngOnInit() {
    if (this.genre === undefined) {
      this.films = this.filmService.getFilms();
    }
    else {
      console.log(this.genre);
      this.films = this.filmService.getGenre(this.genre);
      console.log(this.films);
    }
  }

}
