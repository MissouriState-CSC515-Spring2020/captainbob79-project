import { Component, OnInit } from '@angular/core';
import { FilmService } from '../service/film.service';
import { Film } from '../models/film';

@Component({
  selector: 'app-horror-screen',
  templateUrl: './horror-screen.component.html',
  styleUrls: ['./horror-screen.component.css']
})
export class HorrorScreenComponent implements OnInit {

  filmService: FilmService = new FilmService();
  films: Film[] = this.filmService.getGenre("Horror");

  constructor() { }

  ngOnInit() {  }
}
