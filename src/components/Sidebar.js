import React from "react";
import NoteList from "./NoteList";

function Sidebar(props) {
  return (
    <div className="master-detail-element sidebar">
      <NoteList notes={props.notes} noteClick={props.noteClick} />
      <button>New</button>
    </div>
  );
}

export default Sidebar;
