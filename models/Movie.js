export default class Movie {
  _title;
  get title() {
    return this._title;
  }
  set title(value) {
    this._title = value;
  }

  _id;
  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value;
  }

  _imdb_id;
  get imdb_id() {
    return this._imdb_id;
  }
  set imdb_id(value) {
    this._imdb_id = value;
  }

  _description;
  get description() {
    return this._description;
  }
  set description(value) {
    this._description = value;
  }

  _backdrop_path;
  get backdrop_path() {
    return this._backdrop_path;
  }
  set backdrop_path(value) {
    this._backdrop_path = value;
  }

  _poster_path;
  get poster_path() {
    return this._poster_path;
  }
  set poster_path(value) {
    this._poster_path = value;
  }
  _genres;
  get genres() {
    return this._genres.join(", ");
  }
  set genres(value) {
    this._genres = value;
  }

  _original_language;
  get original_language() {
    return this._original_language;
  }
  set original_language(value) {
    this._original_language = value;
  }

  _release_date;
  get release_date() {
    return this._release_date;
  }
  get release_date_string() {
    //return date as string in format 14.03.1972
    const day = this._release_date.getDate().toString().padStart(2, "0");
    const month = (this._release_date.getMonth() + 1)
      .toString()
      .padStart(2, "0");
    const year = this._release_date.getFullYear();

    const formattedDate = `${year}`;
    return formattedDate;
  }
  set release_date(value) {
    //put in a js date object
    this._release_date = value;
  }

  _runtime;
  get runtime() {
    return this._runtime;
  }
  set runtime(value) {
    this._runtime = value;
  }

  _vote_average;
  get vote_average() {
    //return vote as percent string
    return (votePercent = Math.round(this._vote_average * 10).toString() + "%");
  }
  set vote_average(value) {
    this._vote_average = value;
  }

  _vote_count;
  get vote_count() {
    return this._vote_count;
  }
  set vote_count(value) {
    this._vote_count = value;
  }

  //ist ein array mit watch provider objekten, wenn keine existieren ist die liste leer
  _watchprovider;
  get watchprovider() {
    return this._watchprovider;
  }
  set watchprovider(value) {
    this._watchprovider = value;
  }
}
