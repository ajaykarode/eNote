const express = require("express");
const Note = require("../models/Note");
const router = express.Router();
var fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");

// ROUTE1 : get all notes using : GET "/api/notes/fetchallnotes", Login required

router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    //it will fetch all notes of a user who is logged in
    const note = await Note.find({ user: req.user.id });
    res.json(note);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error"); // if error occured i will send status code
  }
});

// ROUTE2 : add a new note using : POST "/api/notes/addnote", Login required

router.post(
  "/addnote",
  fetchuser,
  [
    body(
      "title",
      "Enter a Valid Title. Must have Atleast 3 Characters"
    ).isLength({ min: 3 }),
    body(
      "description",
      "Your Description Should Have Atleast 2 characters"
    ).isLength({ min: 3 }),
  ],

  async (req, res) => {
    try {
      const { title, description, tag } = req.body; // array destructuring

      // if there are errors, return Bad request and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const note = new Note({
        user: req.user.id,
        title,
        description,
        tag,
      });
      const savedNote = await note.save();

      res.json(note);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error"); // if error occured i will send status code
    }
  }
);

// ROUTE3 : update an existing note using : PUT "/api/notes/updatenote", Login required

router.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  try {
    // create a newNote object
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    //find the note to be updated and update it
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }

    if (note.user.toString() != req.user.id) {
      return res.status(404).send("Not Allowed");
    }

    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error"); // if error occured i will send status code
  }
});

// ROUTE4 : Delete an existing note using : DELETE "/api/notes/deletenote", Login required

router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    //find the note to be deleted and delete it
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }

    // Allow deletion only if user owns this note
    if (note.user.toString() != req.user.id) {
      return res.status(404).send("Not Allowed");
    }

    note = await Note.findByIdAndDelete(req.params.id);
    res.json({ Success: "Note has been deleted", note: note });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error"); // if error occured i will send status code
  }
});

module.exports = router;
