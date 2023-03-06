import React from "react";

function NoteViewer({title,body,onEditClicked}) {
  
  return (
    <>
      <h2>{title}</h2>
      <p>{body}</p>
      <button onClick={onEditClicked}>Edit</button>
    </>
  );
}

export default NoteViewer;
