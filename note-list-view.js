(function(exports) {
  function NoteListView(NoteList){
    this.NoteList = NoteList ;
  }
  NoteListView.prototype.getNoteString = function(){
    var emptyString = "<ul>"
    this.NoteList.getNotes().forEach(function(element) {
      emptyString = emptyString+"<li><div>"+element.showText() + "</div></li>"
    })
    emptyString =emptyString+ "</ul>";
    return emptyString;
  }
  exports.NoteListView = NoteListView;
}) (this);
