const Note = require("../models/note.models.js");

module.exports = {
    createNote: (req, res) => {
        console.log('req: ', req.body);
        Note.create(req.body)
        .then((newNote) => {
            console.log('newNote: ', newNote);
            return res.json(newNote);
        })
        .catch((err) => res.json(err));
    },

    getAllNotes: (req, res) => {
        Note.find({})
        .then((allNotes) => {
            // console.log(allProducts);
            res.json(allNotes);
        })
        .catch((err) => console.log(err))
    },

    getOneNote: (req,res) => {
        Note.findOne({_id: req.params.id})
        .then((oneNote) => {
            console.log(oneNote);
            res.json(oneNote);
        })
    },

    updateNote: (req,res) => {
        // console.log('req: ', req);
        Note.findOneAndUpdate({_id: req.params.id}, req.body,{new:true})
            .then(updatedNote => res.json(updatedNote))
            .catch(err => res.json(err))
    },

    deleteNote: (req, res) => {
        Note.deleteOne({_id:req.params.id})
            .then((deleteNote) =>  {
                console.log(deleteNote);
                res.json(deleteNote);
            })
            .catch((err) => console.log(err))
    }


};