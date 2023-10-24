import mongoose, { Document, Schema } from 'mongoose';
import { INote } from '../interfaces';

export interface INoteModel extends INote, Document {}

const NoteSchema: Schema = new Schema(
    {
        title: {
            type: String,
            require: true,
        },
        description: {
            type: String,
            default: '',
        },
    },
    { timestamps: true }
);
export default mongoose.model<INoteModel>('Note', NoteSchema);
