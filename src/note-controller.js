(function(exports) {
  var NoteController = function(NoteList) {
    NoteList.createNote("Favourite drink: seltzer")
    this.noteListView = new NoteListView(NoteList)
  }

  NoteController.prototype = {
    setHTML: function() {
      var htmlString = this.noteListView.getNoteString()
      document.getElementById('app').innerHTML = htmlString
    }
  }
  exports.NoteController = NoteController
}) (this);

// var newNoteList = new this.NoteList(Note)
// var newNoteController = new NoteController(newNoteList);
// newNoteController.setHTML()
