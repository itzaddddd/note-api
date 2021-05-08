"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
exports.NoteRepository = void 0;
const typedi_1 = require("typedi");
const note_model_1 = __importDefault(require("../models/note.model"));
let NoteRepository = class NoteRepository {
    getAllNotes(sort_by) {
        return __awaiter(this, void 0, void 0, function* () {
            if (sort_by) {
                note_model_1.default.find({}).sort({ 'createdAt': -1 }).exec((err, docs) => {
                    if (err)
                        throw err;
                    return docs.map((result) => result);
                });
            }
            const results = yield note_model_1.default.find();
            return results.map((result) => result);
        });
    }
    createNote(note) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield note_model_1.default.create(note);
            return result.toObject();
        });
    }
    getNoteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield note_model_1.default.findById(id);
            if (!result)
                return null;
            return result.toObject();
        });
    }
    getNotesByTag(tag, option) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Tag: ', tag);
            const filter = {
                tags: {
                    $in: [tag]
                }
            };
            const results = yield note_model_1.default.find(filter);
            return results.map((result) => result);
        });
    }
};
NoteRepository = __decorate([
    typedi_1.Service('INoteRepository')
], NoteRepository);
exports.NoteRepository = NoteRepository;
