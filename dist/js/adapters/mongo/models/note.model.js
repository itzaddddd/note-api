"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000)
    },
    tags: {
        type: [String]
    }
});
exports.default = mongoose_1.model('Note', schema);
