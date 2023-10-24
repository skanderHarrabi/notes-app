import { Router } from 'express';
import {
    createNote,
    deleteNote,
    getAllnotes,
    getNoteById,
    updateNote,
} from '../../controllers/note.controller';

const _router: Router = Router({
    mergeParams: true,
});

// CREATE A NEW NOTE
_router.post('/create', createNote);

// GET ALL NOTES
_router.get('/all', getAllnotes);

// GET A NOTE BY ID
_router.get('/:id', getNoteById);

// UPDATE A NOTE BY ID
_router.patch('/:id', updateNote);

// DELETE A NOTE BY ID
_router.delete('/:id', deleteNote);

export const router = _router;
