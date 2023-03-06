import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes, onClick}) {
  function click(note){
    
    onClick(note)
  }
  const notesList=notes.map((note)=>(<NoteItem key={note.id} note={note}
  handleClick={click}/>))
  return (
    <ul>
      {notesList}
     
    </ul>
  );
}

export default NoteList;
