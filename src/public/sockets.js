const socket = io();

export const loadNotes = (callback) => {
  socket.on("server:sendnotes",callback );
};

export const saveNote = (title, description) => {
  socket.emit("client:sendform", {
    title,
    description,
  });
};

export const onNewNote = (callback) => {
socket.on('server:newnote',callback)
}

export const deleteNote = (id) => {
socket.emit('client:deletenote',id);
}

export const getNoteById = (id) => {
  socket.emit('client:getnote',id)
}

export const onSelectedNote = (callback) => {
socket.on('server:selectednote',callback);
}

export const updatedNote = (id,title,description) => {
socket.emit('client:updatenote',{
id,
title,
description
})
}
