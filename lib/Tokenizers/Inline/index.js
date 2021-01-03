"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Link_1 = __importDefault(require("./Link"));
const Bold_1 = __importDefault(require("./Bold"));
const Italic_1 = __importDefault(require("./Italic"));
const Strikethrough_1 = __importDefault(require("./Strikethrough"));
const Code_1 = __importDefault(require("./Code"));
const Text_1 = __importDefault(require("./Text"));
exports.default = {
    Link: Link_1.default,
    Bold: Bold_1.default,
    Italic: Italic_1.default,
    Strikethrough: Strikethrough_1.default,
    Code: Code_1.default,
    Text: Text_1.default,
};
