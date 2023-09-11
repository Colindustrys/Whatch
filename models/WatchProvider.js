export default class WatchProvider {
  _name
  get name() {
    return this._name
  }
  set name(value) {
    this._name = value
  }

  _id
  get id() {
    return this._id
  }
  set id(value) {
    this._id = value
  }

  _logoPath
  get logoPath() {
    return this._logoPath
  }
  set logoPath(value) {
    this._logoPath = value
  }
  
  _displayPriority
  get displayPriority() {
    return this._displayPriority
  }
  set displayPriority(value) {
    this._displayPriority = value
  }
}
