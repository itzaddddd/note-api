import 'reflect-metadata'
import express, {Application, Request, Response, Express} from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { useExpressServer } from 'routing-controllers'
import { MongoConnection } from './connection'
import { NoteController } from './controllers/note.controller';

dotenv.config()

export class App {
    private app: Express
    constructor(){
        this.app = express()
        this.middlewares()
        this.routes()
    }

    private middlewares(){
        this.app.use(cors())
        this.app.use(express.json())
    }

    private routes(){
        useExpressServer(this.app, {
            controllers: [NoteController]
        })
    }

    public async connect(): Promise<void>{
        const uri = process.env.MONGO_URI as string
        const options = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        }
        const mongo = new MongoConnection(uri, options)
        mongo.connect()
    }

    public async listen(): Promise<void>{
        this.app.listen(process.env.PORT || 3000)
        console.log(`Server is running on port ${process.env.PORT}` || 4000)
    }
}