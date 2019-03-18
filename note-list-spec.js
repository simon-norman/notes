function testNoteCreated() {
  var countNoteDoubleCreated = 0
  function NoteDouble() {
    countNoteDoubleCreated += 1
  }

  var noteList = new NoteList(NoteDouble)
  noteList.createNote('abc')

  assert.isTrue(countNoteDoubleCreated === 1)
}

testNoteCreated();
