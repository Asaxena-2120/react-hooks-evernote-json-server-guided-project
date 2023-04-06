import React,{useState, useEffect} from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";
import Content from "./Content";
import AllButtons from "./AllButtons";
import Option1 from "./Option1";
import Option2 from "./Option2";
import Option3 from "./Option3";

function NoteContainer() {
  const [notes,setNotes]=useState([]);
  const [noteSelected, setNoteSeleted] = useState({})
  const [searchedNotes, setsearchedNotes] = useState([])
  
 
  useEffect(()=>{
    fetch("http://localhost:3000/notes")
    .then((resp)=>resp.json())
    .then((data)=>{setNotes(data);setsearchedNotes(data)})
  },[])
  function handleNOteClick(note){
    setNoteSeleted(noteSelected=>{return note})
    
  }
  


  function handleSearch(searchValue){
   
    const updatedNotes=notes.filter((note)=>{return (note.title.toLowerCase().includes(searchValue.toLowerCase()))})
    
    
    setsearchedNotes(updatedNotes)
  }
  function handleSearch2(searchValue){
   
    const updatedNotes=notes.filter((note)=>{return (note.title.toLowerCase().includes(searchValue.toLowerCase()))})
    
   
    setsearchedNotes(updatedNotes)
  }
  function handleSavedClicked(formData,note){
   
    const edited_note={
      "id":note.id,
      "userId": 1,
      "title": formData.title,
      "body": formData.body
    }
    const updatedNotes=notes.map((mynote)=>{
      if (mynote.id===note.id){return({"id": note.id,
                                        "userId": 1,
                                        "title": formData.title,
                                        "body":formData.body})}
      else {return mynote}})
    
   fetch(`http://localhost:3000/notes/${edited_note.id}`,
      {
        method:"PATCH",
        headers:{
          "Content-Type":"application/json",
        },
        body: JSON.stringify({
          title: edited_note.title,
          body:edited_note.body
        })

      })
      /* .then((res)=>res.json())
      .then((data)=>{
        console.log("Success",data)
      }) */
      setsearchedNotes(updatedNotes) 
  }
  function handleNewClick(){
    const new_note={
      "userId": 1,
      "title": "default",
      "body": "placeholder"
    }
    const newNote=[...notes,new_note]
   
    fetch("http://localhost:3000/notes",
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body: JSON.stringify(new_note)

      })
      /* .then((res)=>res.json())
      .then((data)=>{
        console.log("Success",data)
      }) */
    setsearchedNotes(newNote)
  }
  function handleCountClick(countFromOption){
    console.log("count",countFromOption)
  }
  return (
    <>
   {/*  <AllButtons/> */}
   {/* <Option1 /> */}
   {/* <Option2/> */}
   <Option3 onSearch={handleSearch2}/>
      <Search  onSearch={handleSearch}/>
      <div className="container">
        <Sidebar notes={searchedNotes}  onNoteClick={handleNOteClick} newClick={handleNewClick}/>
        <Content note={noteSelected} onSaved={handleSavedClicked}/>
      </div>
    </>
  );
}

export default NoteContainer;
