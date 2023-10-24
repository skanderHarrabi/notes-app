"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const note_controller_1 = require("../../controllers/note.controller");
const _router = (0, express_1.Router)({
    mergeParams: true,
});
_router.post('/create', note_controller_1.createNote);
_router.get('/all', note_controller_1.getAllnotes);
_router.get('/:id', note_controller_1.getNoteById);
_router.patch('/:id', note_controller_1.updateNote);
_router.delete('/:id', note_controller_1.deleteNote);
exports.router = _router;
//# sourceMappingURL=note.route.js.map