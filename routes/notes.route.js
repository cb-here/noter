const express = require('express');
const { showNotes, newNote, createNewNote, deleteNote, editNote, updateNote, searchNotes } = require('../controller/notes.controller');

const router = express.Router();

router.get('/', showNotes); // get all the notes
router.get('/new-note', newNote); // showing form to write a new note
router.get('/edit-note/:id', editNote); // showing form to edit note
router.post('/', createNewNote);  // create a new note
router.delete('/:id', deleteNote); // delete a note
router.put("/:id", updateNote); // update a note

module.exports = router