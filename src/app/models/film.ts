export class Film {
    title: String;
    genre: String;
    poster: String;
    review: String;
    synopsis: String;

    constructor(title, genre, poster, review, synopsis) {
        this.title = title;
        this.genre = genre;
        this.poster = poster;
        this.review = review;
        this.synopsis = synopsis;
    }
}
