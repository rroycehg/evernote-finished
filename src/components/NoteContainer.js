import React, {useState, useEffect} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";

function NoteContainer() {
  const [ notes, setNotes ] = useState([]);
  const [ viewNotes, setViewNotes ] = useState([]);

  useEffect(() =>{
    fetch(`http://localhost:3000/notes`)
     .then(res => res.json())
     .then(data => setNotes(data))
  }, [])

  const viewNote = (noteObj) => {
    let selectedNote = notes.find(note => note.id === noteObj.id) 
    setViewNotes(selectedNote)
  }

  

  return (
    <>
      <Search />
      <div className="container">
        <Sidebar notes={notes} noteClick={viewNote} />
        <Content viewNotes={viewNotes}  />
      </div>
    </>
  );
}

export default NoteContainer;
