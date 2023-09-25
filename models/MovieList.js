export default class MovieList {
  //name für die liste, zb action, seenlist
  _title;
  get title() {
    return this._title;
  }
  set title(value) {
    this._title = value;
  }

  //add movie
  push(id, path) {
    this._ids.push(id);
    this._posterPaths.push(path);
  }

  _ids = [];
  get ids() {
    return this._ids;
  }
  set ids(value) {
    this._ids = value;
  }
  id(nr) {
    return this._ids[nr];
  }

  _posterPaths = [];
  get posterPaths() {
    return this._posterPaths;
  }
  set posterPaths(value) {
    this._posterPaths = value;
  }
  posterPath(nr) {
    return this._posterPaths[nr];
  }

  //function that returns array usable in a flatlist
  data() {
    const combinedArray = this._ids.map((element, index) => ({
      id: element,
      posterPath: this._posterPaths[index],
      ids: this._ids,
    }));
    // console.log("movielist.data");
    // console.log(combinedArray);
    return combinedArray;
  }
}
