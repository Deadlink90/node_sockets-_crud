import { saveNote,deleteNote,getNoteById,updatedNote } from "./sockets.js";

const notesList = document.querySelector("#notes");
const title = document.querySelector('#title');
const description = document.querySelector('#description');
let saveId='';

export const onHandleSubmit = (e) => {
  e.preventDefault();

  if (saveId) {
   updatedNote(saveId,title.value,description.value);

  } else {
  const noteForm = document.querySelector("#noteForm");
  const title = noteForm["title"].value;
  const description = noteForm["description"].value;

  saveNote(title, description);
  }

  title.value ='';
  description.value='';
  saveId = '';
};


const noteUI = (note) => {
const div = document.createElement('div');

div.innerHTML = `
    <div class="card card-body rounded-0 mb-2 animate__animated animate__fadeInUp"> 
    <div class="d-flex justify-content-between">
    <h1> ${note.title} </h1>
        <div>
        <button class="update btn btn-secondary btn-sm" data-id="${note._id}">Udate</button>
        <button class="delete btn btn-danger btn-sm" data-id="${note._id}">Delete</button>
        </div>
    </div>
      <p>${note.description} </p>
    </div>  
`

const btnDelete = div.querySelector('.delete')
const btnUpdate = div.querySelector('.update')

btnDelete.addEventListener('click',e => deleteNote(btnDelete.dataset.id))
btnUpdate.addEventListener('click',e => getNoteById(btnDelete.dataset.id))

return div;
}

export const renderNotes = (notes = []) => {
  notesList.innerHTML = '';
  notes.map(note => notesList.append(noteUI(note)));
};

export const appendNote = (note) => {
notesList.append(noteUI(note))
}

export const fillForm = (note)=> {
title.value = note.title
description.value = note.description
saveId = note._id;
}