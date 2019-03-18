function testHasText(){
  var note = new Note("abc");
  assert.isTrue(note.showText() === "abc");
}
testHasText();
