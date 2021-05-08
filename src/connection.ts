import { connect, ConnectionOptions } from 'mongoose'
export class MongoConnection {
    private uri: string = '';
    private options: ConnectionOptions = {};
    private connected: boolean = false;

    constructor(uri: string, options: ConnectionOptions){
        this.uri = uri
        this.options = options
    }

    connect = async () => {
        if(this.connected) return
        await connect(this.uri, this.options)
        console.log(`MongoDB is connected`)

        this.connected = true
    }

}