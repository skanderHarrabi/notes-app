"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const note_route_1 = require("./note.route");
const _router = (0, express_1.Router)();
_router.use('/v1/note', note_route_1.router);
exports.router = _router;
//# sourceMappingURL=index.js.map