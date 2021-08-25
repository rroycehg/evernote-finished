import React, { useState } from "react";
import NoteEditor from "./NoteEditor";
import NoteViewer from "./NoteViewer";
import Instructions from "./Instructions";

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and getContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
function Content(props) {
  const [ toggle, setToggle ] = useState(false)
  
  function showDisplay(e) {
    e.PreventDefault()
    setToggle(!toggle)
  }

  function closeDisplay(e) {
    e.preventDefault();
    setToggle(!toggle)
  }

  const getContent = () => {
    if (toggle) {
      return <NoteEditor />;
    } else if (props.viewNotes) {
      return <NoteViewer viewNotes={props.viewNotes} />;
    } else {
      return <Instructions />;
    }
  };

  return <div className="master-detail-element detail">{getContent()}</div>;
}

export default Content;
