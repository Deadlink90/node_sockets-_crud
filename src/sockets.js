import Note from "./models/note.model";

export default (io) => {
  io.on("connection", (socket) => {
    console.log(" -> new user connected: ", socket.id);

    const getNotes = async () => {
      const notes = await Note.find();
      io.emit("server:sendnotes", notes);
    };
    getNotes();

    socket.on('client:sendform',async(noteForm)=>{
    const newNote = new Note(noteForm);
    const savedNote = await newNote.save();
    io.emit('server:newnote',savedNote);
    })

    socket.on('client:deletenote',async(id)=> {
      console.log(id)
      await Note.findByIdAndDelete(id);
      getNotes();
    })

    socket.on('client:getnote',async(id)=> {
    const note = await Note.findById(id);
    io.emit('server:selectednote',note)
    })

    socket.on('client:updatenote',async({id,title,description})=> {
    await Note.findByIdAndUpdate(id,{title,description});
    getNotes();
    })

    
  });
};
