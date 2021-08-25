import React from "react";
import NoteItem from "./NoteItem";

function NoteList(props) {
  const notesList = props.notes.map(note => <NoteItem key={note.id} note={note} noteClick={props.noteClick}/> )
  return (
    <ul>
      {notesList}
    
    </ul>
  );
}

export default NoteList;
