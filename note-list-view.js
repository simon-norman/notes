(function(exports) {
  function NoteListView(NoteList){
    this.NoteList = NoteList ;
  }
  NoteListView.prototype.getNoteString = function(){
    return ""
  }
  exports.NoteListView = NoteListView;
}) (this);
