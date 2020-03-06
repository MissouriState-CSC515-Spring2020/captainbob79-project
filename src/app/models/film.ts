export class Film {
    title: String;
    genre: String;
    poster: String;
    review: String;
    synopsis: String;

    constructor(title: String, genre: String, poster: String, review: String, synopsis: String) {
        this.title = title;
        this.genre = genre;
        this.poster = poster;

        if (review === "") {
            this.review = "A review of " + this.title + ": it was pretty good"
        } else {
            this.review = review;
        }

        if (synopsis === "") {
            this.synopsis = "A summary of " + this.title + ": stuff happened, then it didn't."
        } else {
            this.synopsis = synopsis;
        }
    }
}
