import mongoose, { Document } from 'mongoose';
import { INote } from '../interfaces';
export interface INoteModel extends INote, Document {
}
declare const _default: mongoose.Model<INoteModel, {}, {}, {}, any>;
export default _default;
