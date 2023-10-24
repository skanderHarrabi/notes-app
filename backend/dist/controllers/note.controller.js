"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNote = exports.updateNote = exports.getNoteById = exports.getAllnotes = exports.createNote = void 0;
const notes_1 = __importDefault(require("../models/notes"));
const createNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description } = req.body;
        const newNote = new notes_1.default({
            title,
            description,
        });
        yield newNote.save();
        res.status(200).json(newNote);
    }
    catch (error) {
        res.status(500).json({ error: 'Error creating note' });
    }
});
exports.createNote = createNote;
const getAllnotes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notes = yield notes_1.default.find();
        res.status(200).json(notes);
    }
    catch (error) {
        res.status(500).json({ error: 'Error fetching notes' });
    }
});
exports.getAllnotes = getAllnotes;
const getNoteById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const noteId = req.params.id;
    try {
        const note = yield notes_1.default.findById(noteId);
        if (!note) {
            res.status(404).json({ error: 'Note not found' });
            return;
        }
        res.status(200).json(note);
    }
    catch (error) {
        res.status(500).json({ error: 'Error fetching note' });
    }
});
exports.getNoteById = getNoteById;
const updateNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const noteId = req.params.id;
    const { title, description } = req.body;
    try {
        const updatedNote = yield notes_1.default.findByIdAndUpdate(noteId, { title, description }, { new: true });
        if (!updatedNote) {
            res.status(404).json({ error: 'Note not found' });
            return;
        }
        res.status(200).json(updatedNote);
    }
    catch (error) {
        res.status(500).json({ error: 'Error updating Note' });
    }
});
exports.updateNote = updateNote;
const deleteNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const noteId = req.params.id;
    try {
        const deletedNote = yield notes_1.default.findByIdAndDelete(noteId);
        if (!deletedNote) {
            res.status(404).json({ error: 'Note not found' });
            return;
        }
        res.status(200).send(deletedNote);
    }
    catch (error) {
        res.status(500).json({ error: 'Error deleting Note' });
    }
});
exports.deleteNote = deleteNote;
//# sourceMappingURL=note.controller.js.map