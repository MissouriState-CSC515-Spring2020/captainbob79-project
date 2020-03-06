import { Component, OnInit } from '@angular/core';
import { Film } from '../models/film';
import { FilmService } from '../service/film.service';
import { ParamMap, Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-detail-screen-component',
  templateUrl: './detail-screen-component.component.html',
  styleUrls: ['./detail-screen-component.component.css']
})
export class DetailScreenComponentComponent implements OnInit {

  film: Film;
  title: String;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private filmService: FilmService
  ) {}

  ngOnInit() {
    this.film = this.filmService.getFilm(this.route.snapshot.paramMap.get('id'));
  }

}
