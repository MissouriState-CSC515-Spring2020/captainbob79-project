import { Injectable } from '@angular/core';
import { Film } from '../models/film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  films: Film[] = [
    new Film("Alien", "Horror", "assets/images/alien.png", "A modern classic, Alien blends science fiction, horror and bleak poetry into a seamless whole.", "'In space, no one can hear you scream.' A close encounter of the third kind becomes a Jaws-style nightmare when an alien invades a spacecraft in Ridley Scott's sci-fi horror classic. On the way home from a mission for the Company, the Nostromo's crew is woken up from hibernation by the ship's Mother computer to answer a distress signal from a nearby planet. Capt. Dallas's (Tom Skerritt) rescue team discovers a bizarre pod field, but things get even stranger when a face-hugging creature bursts out of a pod and attaches itself to Kane (John Hurt). Over the objections of Ripley (Sigourney Weaver), science officer Ash (Ian Holm) lets Kane back on the ship. The acid-blooded incubus detaches itself from an apparently recovered Kane, but an alien erupts from Kane's stomach and escapes. The alien starts stalking the humans, pitting Dallas and his crew (and cat) against a malevolent killing machine that also has a protector in the nefarious Company."),
    new Film("Black Panther", "Action", "assets/images/black-panther-web.jpg", "Black Panther elevates superhero cinema to thrilling new heights while telling one of the MCU's most absorbing stories -- and introducing some of its most fully realized characters.", "Black Panther follows T'Challa who, after the events of Captain America: Civil War, returns home to the isolated, technologically advanced African nation of Wakanda to take his place as King. However, when an old enemy reappears on the radar, T'Challa's mettle as King and Black Panther is tested when he is drawn into a conflict that puts the entire fate of Wakanda and the world at risk."),
    new Film("Goodfellas", "Drama", "assets/images/goodfellas.jpg", "Hard-hitting and stylish, GoodFellas is a gangster classic -- and arguably the high point of Martin Scorsese's career.", "Martin Scorsese explores the life of organized crime with his gritty, kinetic adaptation of Nicolas Pileggi's best-selling Wiseguy, the true-life account of mobster and FBI informant Henry Hill. Set to a true-to-period rock soundtrack, the story details the rise and fall of Hill, a half-Irish, half-Sicilian New York kid who grows up idolizing the 'wise guys' in his impoverished Brooklyn neighborhood. He begins hanging around the mobsters, running errands and doing odd jobs until he gains the notice of local chieftain Paulie Cicero (Paul Sorvino), who takes him in as a surrogate son. As he reaches his teens, Hill (Ray Liotta) is inducted into the world of petty crime, where he distinguishes himself as a 'stand-up guy' by choosing jail time over ratting on his accomplices. From that moment on, he is a part of the family. Along with his psychotic partner Tommy (Joe Pesci), he rises through the ranks to become Paulie's lieutenant; however, he quickly learns that, like his mentor Jimmy (Robert DeNiro), his ethnicity prevents him from ever becoming a 'made guy,' an actual member of the crime family. Soon he finds himself the target of both the feds and the mobsters, who feel that he has become a threat to their security with his reckless dealings. Goodfellas was rewarded with six Academy Award nominations including Best Picture; Pesci would walk away with Best Supporting Actor for his work."),
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
