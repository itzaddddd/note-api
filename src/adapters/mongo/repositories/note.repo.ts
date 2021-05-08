import { Service } from 'typedi'
import { INote, INoteRequest } from '../../../domains/noteDomain/interface'
import { INoteRepository } from '../../../repositories/note.repository'
import noteModel, { INoteDocument } from '../models/note.model'

@Service('INoteRepository')
export class NoteRepository implements INoteRepository {
    async getAllNotes(sort_by?: string): Promise<INote[]>{
        if(sort_by){
            noteModel.find({}).sort({'createdAt': -1}).exec((err, docs) => {
                if(err) throw err
                return docs.map((result: INote) => result)
            })
        }

        const results = await noteModel.find()
        return results.map((result: INote) => result)
    }
    async createNote(note: INoteRequest): Promise<INote>{
        const result = await noteModel.create(note)
        return result.toObject()
    }
    async getNoteById(id: string): Promise<INote | null>{
        const result = await noteModel.findById(id)
        if(!result) return null
        return result.toObject()
    }
    async getNotesByTag(tag: string, option?: string): Promise<INote[]>{
        console.log('Tag: ',tag)
        const filter = {
            tags: {
                $in: [tag]
            }
        }
        const results = await noteModel.find(filter)
        return results.map((result: INote) => result)
    }
}