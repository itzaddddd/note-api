import { model, Schema, Document } from 'mongoose'
import { INote } from '../../../domains/noteDomain/interface'

const schema: Schema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000)
    },
    tags: {
        type: [String]
    }
})

export interface INoteDocument extends Document{
    _id: string,
    title: string,
    content: string,
    createdAt: Date,
    tags?: string[]
}

export default model<INoteDocument>('Note',schema)