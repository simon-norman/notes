(function(exports) {
  var NoteList = function(Note) {
    this.Note = Note
    this.notes = []
  }

  NoteList.prototype.createNote = function(text) {
    this.notes.push(new this.Note(text))
  }

  NoteList.prototype.getNotes = function() {
    return this.notes
  }

  exports.NoteList = NoteList
}) (this);