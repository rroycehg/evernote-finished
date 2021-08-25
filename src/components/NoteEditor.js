import React from "react";

function NoteEditor() {
  return (
    <form className="note-editor">
      <input type="text" name="title" placeholder="Title Here..."/>
      <textarea name="body" placeholder="Caption Here..."/>
      <div className="button-row">
        <input className="button" type="submit" value="Save" />
        <button type="button">Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;
