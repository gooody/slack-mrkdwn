"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Space_1 = __importDefault(require("./Space"));
const CodeBlock_1 = __importDefault(require("./CodeBlock"));
const BulletedList_1 = __importDefault(require("./BulletedList"));
const OrderedList_1 = __importDefault(require("./OrderedList"));
const BlockQuote_1 = __importDefault(require("./BlockQuote"));
const Paragraph_1 = __importDefault(require("./Paragraph"));
exports.default = {
    Space: Space_1.default,
    CodeBlock: CodeBlock_1.default,
    BulletedList: BulletedList_1.default,
    OrderedList: OrderedList_1.default,
    BlockQuote: BlockQuote_1.default,
    Paragraph: Paragraph_1.default,
};
