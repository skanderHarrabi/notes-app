"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const SERVER_PORT = process.env.PORT ? Number(process.env.PORT) : 5010;
const MONGO_URL_LOCAL = `${process.env.MONGO_DB_URL}`;
const config = {
    mongo: {
        url: MONGO_URL_LOCAL,
    },
    server: {
        port: SERVER_PORT,
    },
};
exports.default = config;
//# sourceMappingURL=config.js.map