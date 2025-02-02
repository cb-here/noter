const Note = require('../models/Note');

// get all notes 
async function showNotes(req, res) {
    try {
        const {search} = req.query;
        const query = search? {title : {$regex : new RegExp(search, "i")}}:{};
        const notes = await Note.find(query);

        const data = {
            title: "Home",
            notes: notes, search
        }
        res.render('index', data);
    } catch(error) {
        console.log("Error: " + error);
        res.status(500).send("Something went wrong.");
    }
}

// new note page 

const newNote = (req, res) => {
    const data = {
        title: 'Create a note'
    }
    res.render('new-note', data);
}

// update note page

const editNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    const data = {
        title: 'Edit Note',
        note: note
    }
    res.render('edit-note', data)
}

// creating new note 

const createNewNote = async (req, res) => {
    try {
        await Note.create(req.body);
        res.redirect('/');
    } catch(error) {
        console.log("Error: " + error);
        res.send("Something went wrong");
    }
}

// updating note

const updateNote = async (req, res) => {
    try{
        const {title, content}= req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title, content}, {new: true});
        if (!updatedNote) return res.send("Something went wrong.");
        res.redirect('/');
    } catch(error) {
        console.log(error);
        res.send('Something went wrong.');
    }
}


// delete note

const deleteNote = async (req, res) => {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if(!deleteNote) return res.send("Note not found!");
        res.redirect('/');
    } catch(error) {
        res.send("Something went wrong.");
    }
}


module.exports = {
    showNotes,
    newNote,
    createNewNote,
    deleteNote,
    editNote,
    updateNote,
}