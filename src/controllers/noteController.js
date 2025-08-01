const Note = require('../model/note');

exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch notes' });
    console.log(err)
  }
};

exports.addNote = async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    const newNote = new Note({ title, content, tags });
    await newNote.save();
    res.status(201).json(newNote);
  } catch (err) {
    res.status(400).json({ error: 'Failed to add note' });
    console.log(err)
}
};

exports.getNoteByTag = async (req, res) => {
  try {
    const tag = req.params.tag;
    const notes = await Note.find({ tags: { $regex: tag, $options: 'i' } });

    if (notes.length === 0) {
      return res.status(404).json({ message: 'No notes found for this tag' });
    }

    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: 'Failed to search notes by tag' });
  }
};


exports.updateNote = async (req, res) => {
 try {
    const title = req.params.title;
    const { content, tags } = req.body;

    const updatedNote = await Note.findOneAndUpdate(
      { title: { $regex: `^${title}$`, $options: 'i' } },
      { content, tags },
      { new: true }
    );

    if (!updatedNote) {
      return res.status(404).json({ message: 'Note with that title not found' });
    }

    res.json(updatedNote);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update note by title' });
  }
};
exports.deleteNote = async (req, res) => {
   try {
    const title = req.params.title;
    const result = await Note.findOneAndDelete({
      title: { $regex: `^${title}$`, $options: 'i' }
    });

    if (!result) {
      return res.status(404).json({ message: 'Note with that title not found' });
    }

    res.json({ message: 'Note deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete note by title' });
  }
};
