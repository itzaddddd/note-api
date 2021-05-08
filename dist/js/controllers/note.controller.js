"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteController = void 0;
require("reflect-metadata");
const typedi_1 = require("typedi");
const routing_controllers_1 = require("routing-controllers");
const note_domain_1 = require("../domains/noteDomain/note.domain");
const note_repo_1 = require("../adapters/mongo/repositories/note.repo");
let NoteController = class NoteController {
    constructor(noteDomain = new note_domain_1.NoteDomain(new note_repo_1.NoteRepository())) {
        this.noteDomain = noteDomain;
    }
    getAllNotes(res, sort_by) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.noteDomain.getAllNotes(sort_by);
            res.json(result).status(200);
            return res;
        });
    }
    createNote(request, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.noteDomain.createNote(request);
            res.json(result).status(200);
            return res;
        });
    }
    getNotesByTag(tag, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.noteDomain.getNotesByTag(tag);
            res.json(result).status(200);
            return res;
        });
    }
    getNoteById(id, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.noteDomain.getNoteById(id);
            if (result) {
                res.json(result).status(200);
            }
            else {
                const err = {
                    status: 404,
                    msg: 'Not Found'
                };
                res.json(err).status(404);
            }
            return res;
        });
    }
};
__decorate([
    routing_controllers_1.Get(),
    __param(0, routing_controllers_1.Res()),
    __param(1, routing_controllers_1.QueryParam('sort_by')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "getAllNotes", null);
__decorate([
    routing_controllers_1.Post(),
    __param(0, routing_controllers_1.Body()),
    __param(1, routing_controllers_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "createNote", null);
__decorate([
    routing_controllers_1.Get('tag'),
    __param(0, routing_controllers_1.QueryParam('tag')),
    __param(1, routing_controllers_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "getNotesByTag", null);
__decorate([
    routing_controllers_1.Get(':id'),
    __param(0, routing_controllers_1.Param('id')),
    __param(1, routing_controllers_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "getNoteById", null);
NoteController = __decorate([
    routing_controllers_1.Controller('/'),
    typedi_1.Service(),
    __metadata("design:paramtypes", [note_domain_1.NoteDomain])
], NoteController);
exports.NoteController = NoteController;
