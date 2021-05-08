import 'reflect-metadata'
import { Service } from 'typedi'
import { Request, Response } from 'express'
import { Controller, Body, Req, Res, Get, Post, Param, QueryParam } from 'routing-controllers'
import { NoteDomain } from '../domains/noteDomain/note.domain'
import { INoteRequest } from '../domains/noteDomain/interface'
import { NoteRepository } from '../adapters/mongo/repositories/note.repo'
import { IError } from './utils/interface'

@Controller('/')
@Service()
export class NoteController{
    constructor(
        private noteDomain: NoteDomain = new NoteDomain(new NoteRepository())
    ){}

    @Get()
    async getAllNotes(
        @Res() res: Response,
        @QueryParam('sort_by') sort_by: string
    ){
        const result = await this.noteDomain.getAllNotes(sort_by)
        res.json(result).status(200)
        return res
    }

    @Post()
    async createNote(
        @Body() request: INoteRequest,
        @Res() res: Response
    ){
        const result = await this.noteDomain.createNote(request)
        res.json(result).status(200)
        return res
    }

    @Get('tag')
    async getNotesByTag(
        @QueryParam('tag') tag: string,
        @Res() res: Response
    ){
        const result = await this.noteDomain.getNotesByTag(tag)
        res.json(result).status(200)
        return res
    }

    @Get(':id')
    async getNoteById(
        @Param('id') id: string,
        @Res() res: Response
    ){
        const result = await this.noteDomain.getNoteById(id)
        if(result){
            res.json(result).status(200)
        }else{
            const err: IError = {
                status: 404,
                msg: 'Not Found'
            }
            res.json(err).status(404)
        }
        return res
    } 
}