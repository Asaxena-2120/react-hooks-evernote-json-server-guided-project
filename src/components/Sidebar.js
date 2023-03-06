import React from "react";
import NoteList from "./NoteList";

function Sidebar({notes, onNoteClick, newClick}) {
  
  function handleClick(note){
    
    onNoteClick(note)
  }
  function handleNewClick(){
    newClick()
  }
  return (
    <div className="master-detail-element sidebar">
      <NoteList notes={notes} onClick={handleClick}/>
      <button onClick={handleNewClick}>New</button>
    </div>
  );
}

export default Sidebar;
