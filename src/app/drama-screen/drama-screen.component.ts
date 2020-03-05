import { Component, OnInit } from '@angular/core';
import { FilmService } from '../service/film.service';
import { Film } from '../models/film';

@Component({
  selector: 'app-drama-screen',
  templateUrl: './drama-screen.component.html',
  styleUrls: ['./drama-screen.component.css']
})
export class DramaScreenComponent implements OnInit {

  filmService: FilmService = new FilmService();
  films: Film[] = this.filmService.getGenre("Drama");

  constructor() { }

  ngOnInit() {  }
}
