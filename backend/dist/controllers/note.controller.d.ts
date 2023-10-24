import { Request, Response } from 'express';
export declare const createNote: (req: Request, res: Response) => Promise<void>;
export declare const getAllnotes: (req: Request, res: Response) => Promise<void>;
export declare const getNoteById: (req: Request, res: Response) => Promise<void>;
export declare const updateNote: (req: Request, res: Response) => Promise<void>;
export declare const deleteNote: (req: Request, res: Response) => Promise<void>;
