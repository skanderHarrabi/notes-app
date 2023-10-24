import { Router } from 'express';
import { router as NoteRouter } from './note.route';

const _router: Router = Router();
_router.use('/v1/note', NoteRouter);

export const router = _router;
