import { Component, OnInit } from '@angular/core';
import { Film } from '../models/film'
import { FilmService } from '../service/film.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {

  filmService: FilmService = new FilmService();
  films: Film[] = this.filmService.getFilms();

  constructor() { }

  ngOnInit() {  }

}
