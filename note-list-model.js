(function(exports) {
  var NoteList = function(Note) {
    this.Note = Note
  }

  NoteList.prototype.createNote = function(text) {
    new this.Note(text)
  }

  exports.NoteList = NoteList
}) (this);