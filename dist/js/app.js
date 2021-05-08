"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const routing_controllers_1 = require("routing-controllers");
const connection_1 = require("./connection");
const note_controller_1 = require("./controllers/note.controller");
dotenv_1.default.config();
class App {
    constructor() {
        this.app = express_1.default();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
    }
    routes() {
        routing_controllers_1.useExpressServer(this.app, {
            controllers: [note_controller_1.NoteController]
        });
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            const uri = process.env.MONGO_URI;
            const options = {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true,
                useFindAndModify: false
            };
            const mongo = new connection_1.MongoConnection(uri, options);
            mongo.connect();
        });
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            this.app.listen(process.env.PORT || 3000);
            console.log(`Server is running on port ${process.env.PORT}` || 4000);
        });
    }
}
exports.App = App;
