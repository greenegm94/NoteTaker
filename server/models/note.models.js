const mongoose = require('mongoose');
const NoteSchema = new mongoose.Schema(
    {
        noteTitle: {
            type: String,
            required: [true, "Title is required"],
            minlength: [2, "Note title must be at least 2 characters long, got {VALUE}"]
        },

        noteBody: {
            type: String,
            required: [true, "Body is required"],
            maxlength: [255, "Body must contain max of 255 characters, got {VALUE}"]
        }

    },
    {timestamps: true},
);

const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;