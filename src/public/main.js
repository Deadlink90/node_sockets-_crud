import {loadNotes,onNewNote,onSelectedNote} from "./sockets.js"
import {onHandleSubmit,renderNotes,appendNote,fillForm} from './ui.js'

onNewNote(appendNote);
onSelectedNote(fillForm);
loadNotes(renderNotes);

noteForm.addEventListener('submit', onHandleSubmit);
