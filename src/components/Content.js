import React, { useEffect, useState } from "react";
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
//if edit is not clicked don't trigger NOteEditor

function Content({note, onSaved}) {

  const [editClicked,setEditClicked]=useState(false)
  const [cancelClicked,setCancelClicked]=useState(false)
 
  //Clicking a different note while in edit mode should 
  //discard your changes and display the new note instead
  useEffect(()=>{
    setEditClicked(false)
  },[note])

 
function handleEditClicked(){

  
  setEditClicked(true)
  setCancelClicked(false)
 
  //setEditClicked(editClicked=>!editClicked)
}

function handleSave(formData,note){
  
  onSaved(formData,note)
}
/* When in edit mode, also show a Cancel button which 
discards any changes and reverts back to displaying the note. */
function handleCancelClick(){
  setCancelClicked(true)
}
  const getContent = () => {
    if (Object.keys(note).length>0 && editClicked && !cancelClicked) {
      return <NoteEditor note={note} cancelClick={handleCancelClick} saveClick={handleSave}/>;
    } else if (Object.keys(note).length>0 || cancelClicked) {
      return <NoteViewer onEditClicked={handleEditClicked} title={note.title} body={note.body}/>;
    } else {
      return <Instructions />;
    }
  };

  return <div className="master-detail-element detail">{getContent()}</div>;
}

export default Content;
