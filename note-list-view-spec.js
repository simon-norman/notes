function listNoteView() {
  var NoteListDouble = {
    getNotes: function(){
      return [];
    }
  }
  var noteListView = new NoteListView(NoteListDouble);
  var viewString = noteListView.getNoteString();
  assert.isTrue(viewString === "")
}

listNoteView();
