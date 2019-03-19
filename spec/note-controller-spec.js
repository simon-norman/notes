(function testNoteControllerGetHTML() {
  // double a NoteList instance
  var noteListDouble = {
    createNote: function() {}
  };

  function NoteListViewDouble() {
  }

  var htmlString = "<ul><li><div>Favourite drink: seltzer</div></li></ul>"

  NoteListViewDouble.prototype = {
    getNoteString: function() {

      return htmlString
    }
  };
  window.NoteListView = NoteListViewDouble
  var noteController = new NoteController(noteListDouble)
  noteController.setHTML()
  assert.isTrue(document.getElementById('app').innerHTML === htmlString)
}) ();
