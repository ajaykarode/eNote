import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial =[]
  const [notes, setNotes] = useState(notesInitial);



// get all notes
  const getNotes = async() => {
    // API CALL
    // this function is taken from google  ------> https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
      }
    });
    
    const json = await response.json()
    // console.log(json)
    setNotes(json)
 
  };










  // ADD NOTE

  const addNote = async(title, description, tag) => {
    // API CALL
    // this function is taken from google  ------> https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
      },
      body: JSON.stringify({title,description,tag}), // body data type must match "Content-Type" header
    });

    const note = await response.json();
    setNotes(notes.concat(note));

  };



  // DELETE NOTE
  const deleteNote = async(id) => {
    // API CALL

    // this function is taken from google  ------> https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
      }
    });
    const json = response.json(); // parses JSON response into native JavaScript objects
    console.log(json);
    // console.log("Deleting a note with id : " + id);

    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };




  // EDIT NOTE
  const editNote = async (id, title, description, tag) => {
    // API CALL

    // this function is taken from google  ------> https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token'),
      },
      body: JSON.stringify({title,description,tag}), // body data type must match "Content-Type" header
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects
console.log(json);

let newNotes = JSON.parse(JSON.stringify(notes));

    // LOGIC TO EDIT IN CLIENT
    for (let index = 0; index < notes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }

    }
    // console.log(newNotes);
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote,getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

// this function is taken from google  ------> https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
// const response = await fetch(url, {
//   method: 'POST', // *GET, POST, PUT, DELETE, etc.

//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(data) // body data type must match "Content-Type" header
// });
// return response.json(); // parses JSON response into native JavaScript objects
// }
