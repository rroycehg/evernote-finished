import React from "react";

function NoteItem({ note, noteClick }) {
  return (
    <li onClick={() => noteClick(note.id)}>
      <h2>{note.title}</h2>
      <p>{note.body.substring(0,80)}</p>
    </li>
  );
}

export default NoteItem;
