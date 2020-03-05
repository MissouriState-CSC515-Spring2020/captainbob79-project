import { Component, OnInit } from '@angular/core';
import { Film } from '../models/film';
import { FilmService } from '../service/film.service';

@Component({
  selector: 'app-detail-screen-component',
  templateUrl: './detail-screen-component.component.html',
  styleUrls: ['./detail-screen-component.component.css']
})
export class DetailScreenComponentComponent implements OnInit {

  film: Film;
  filmService: FilmService = new FilmService();

  constructor() { }

  ngOnInit() {
    this.film = this.filmService.getFilm("Black Panther");
  }

}
