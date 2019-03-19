(function(exports) {
  function SingleNoteView(note){
    this.note = note;
  }
  
  SingleNoteView.prototype = {
    getNoteHtml: function() {
      var noteText = this.note.showText()
      return `<div>${noteText}</div>`
    }
  }

  exports.SingleNoteView = SingleNoteView;
}) (this);
