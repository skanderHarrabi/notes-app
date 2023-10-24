import { Request, Response } from 'express';
import Note, { INoteModel } from '../models/notes';

// Create a new Note
export const createNote = async (req: Request, res: Response) => {
    try {
        const { title, description } = req.body;
        const newNote: INoteModel = new Note({
            title,
            description,
        });
        await newNote.save();
        res.status(200).json(newNote);
    } catch (error) {
        res.status(500).json({ error: 'Error creating note' });
    }
};

// Get a list of all notes
export const getAllnotes = async (req: Request, res: Response) => {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching notes' });
    }
};

// Get a specific note by ID
export const getNoteById = async (req: Request, res: Response) => {
    const noteId = req.params.id;
    try {
        const note = await Note.findById(noteId);
        if (!note) {
            res.status(404).json({ error: 'Note not found' });
            return;
        }
        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching note' });
    }
};

// Update a note by ID
export const updateNote = async (req: Request, res: Response) => {
    const noteId = req.params.id;
    const { title, description } = req.body;
    try {
        const updatedNote = await Note.findByIdAndUpdate(
            noteId,
            { title, description },
            { new: true }
        );
        if (!updatedNote) {
            res.status(404).json({ error: 'Note not found' });
            return;
        }
        res.status(200).json(updatedNote);
    } catch (error) {
        res.status(500).json({ error: 'Error updating Note' });
    }
};

// Delete a note by ID
export const deleteNote = async (req: Request, res: Response) => {
    const noteId = req.params.id;
    try {
        const deletedNote = await Note.findByIdAndDelete(noteId);
        if (!deletedNote) {
            res.status(404).json({ error: 'Note not found' });
            return;
        }
        res.status(200).send(deletedNote);
    } catch (error) {
        res.status(500).json({ error: 'Error deleting Note' });
    }
};
