"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var weightsSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    date: { type: String, required: true },
    weight: { type: String, required: true },
});
var Weight = mongoose_1.default.model('Weight', weightsSchema);
exports.default = Weight;
