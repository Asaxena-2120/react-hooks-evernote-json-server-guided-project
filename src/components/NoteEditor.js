import React,{useState} from "react";

function NoteEditor({note,cancelClick, saveClick}) {
  const [formData,setFormData]=useState({

    title:note.title,
    body:note.body
  })

  function handleChange(e){
    
    e.preventDefault()
    const name = e.target.name;
    const value = e.target.value;
   
    setFormData({...formData,
    [name]: value})
  }

  function handleCancelClick(){
    cancelClick()
  }
  function handleSaveClick(e){
    e.preventDefault()
   // console.log(document.getElementsByClassName("note-editor"),note.title)
   
   saveClick(formData,note)
  }
  
  return (
    <form className="note-editor">
      <input type="text" name="title" value={formData.title} onChange={handleChange} />
      <textarea name="body" value={formData.body} onChange={handleChange} />
      <div className="button-row">
        <input className="button" type="submit" value="Save" onClick={handleSaveClick} />
        <button type="button" onClick={handleCancelClick}>Cancel</button>
      </div>
    </form>
  );
}

export default NoteEditor;
