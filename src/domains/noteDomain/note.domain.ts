import { Inject, Service } from 'typedi'
import { INoteRepository } from '../../repositories/note.repository'
import { INote, INoteRequest } from './interface'

@Service()
export class NoteDomain{
    constructor(
        @Inject('INoteRepository') private repo: INoteRepository
    ){}

    async getAllNotes(sort_by?: string): Promise<INote[]>{
        const result = await this.repo.getAllNotes(sort_by)
        return result
    }

    async createNote(note: INoteRequest): Promise<INote>{
        const result = await this.repo.createNote(note)
        return result
    }

    async getNoteById(id: string): Promise<INote | null>{
        const result = await this.repo.getNoteById(id)
        return result
    }

    async getNotesByTag(tag: string): Promise<INote[]>{
        const result = await this.repo.getNotesByTag(tag)
        return result
    }
}