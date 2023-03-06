import React from "react";

function NoteItem({note ,handleClick}) {
 function c(){
  
  handleClick(note)
 }
  return (
    <li onClick={c}>
      <h2>{note.title}</h2>
      <p>{note.body}</p>
    </li>
  );
}

export default NoteItem;
