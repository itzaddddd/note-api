import { INote, INoteRequest } from '../domains/noteDomain/interface';

export interface INoteRepository {
    getAllNotes(option?: string): Promise<INote[]>
    createNote(note: INoteRequest): Promise<INote>
    getNoteById(id: string): Promise<INote | null>
    getNotesByTag(tag: string, option?: string): Promise<INote[]>
}