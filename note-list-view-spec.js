function listNoteView() {
  var NoteListDouble = {
    getNotes: function(){
      return [];
    }
  }
  var noteListView = new NoteListView(NoteListDouble);
  var viewString = noteListView.getNoteString();
  assert.isTrue(viewString === "<ul></ul>")
}

listNoteView();

function testReturnsHtmlWithOneNote() {
  var noteDouble = {
    showText: function(){
      return "abc";
    }
  }

  var NoteListDouble = {
    getNotes: function(){
      return [noteDouble];
    }
  }

  var noteListView = new NoteListView(NoteListDouble);
  var viewString = noteListView.getNoteString();
  assert.isTrue(viewString === "<ul><li><div>abc</div></li></ul>")
}
testReturnsHtmlWithOneNote()
