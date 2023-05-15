const NoteController = require("../controllers/note.controllers");

module.exports = (app) => {
    app.post("/api/create", NoteController.createNote);
    app.get("/api/notes/:id", NoteController.getOneNote);
    app.get("/api/notes", NoteController.getAllNotes);
    app.put("/api/edit/:id", NoteController.updateNote);
    app.delete("/api/delete/:id", NoteController.deleteNote);
}