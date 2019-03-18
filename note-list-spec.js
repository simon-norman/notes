function testNoteCreated() {
  var countNoteDoubleCreated = 0
  function NoteDouble() {
    countNoteDoubleCreated += 1
  }

  var noteList = new NoteList(NoteDouble)
  noteList.createNote('abc')

  assert.isTrue(countNoteDoubleCreated === 1)
}

function testNewNoteAddedToList() {
  function NoteDouble() {}

  var noteList = new NoteList(NoteDouble)
  noteList.createNote('abc')
  noteList.createNote('abc')

  assert.isTrue(noteList.getNotes().length === 2)
}

testNoteCreated();
testNewNoteAddedToList();
