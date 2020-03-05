import { Component, OnInit } from '@angular/core';
import { FilmService } from '../service/film.service';
import { Film } from '../models/film';

@Component({
  selector: 'app-action-screen',
  templateUrl: './action-screen.component.html',
  styleUrls: ['./action-screen.component.css']
})
export class ActionScreenComponent implements OnInit {

  filmService: FilmService = new FilmService();
  films: Film[] = this.filmService.getGenre("Action");

  constructor() { }

  ngOnInit() {  }
}
