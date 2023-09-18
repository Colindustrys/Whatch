export default class WatchProvider {
  _label;
  get label() {
    return this._label;
  }
  set label(value) {
    this._label = value;
  }

  _id;
  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value;
  }

  _logoPath;
  get logoPath() {
    return this._logoPath;
  }
  set logoPath(value) {
    this._logoPath = value;
  }

  _displayPriority;
  get displayPriority() {
    return this._displayPriority;
  }
  set displayPriority(value) {
    this._displayPriority = value;
  }
}
