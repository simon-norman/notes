// create double of note model
// instantiate the single note view with double
// getNoteHtml - call this method on note view
// test that returned html === expected

(function testReturnsHtmlStringOfNote() {
  var noteDouble = {
    showText: function(){
      return 'Some note text';
    }
  }
  
  var singleNoteView = new SingleNoteView(noteDouble)

  var noteHtml = singleNoteView.getNoteHtml()

  assert.isTrue(noteHtml === "<div>Some note text</div>")
}) ()