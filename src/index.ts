import { App } from './app'
import dotenv from 'dotenv'
import './adapters/mongo/repositories/note.repo'

dotenv
const main = async (): Promise<void> => {
    const application = new App()
    await application.connect()
    await application.listen()
}

main()