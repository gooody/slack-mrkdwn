"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractInlineTokenizer_1 = __importDefault(require("./AbstractInlineTokenizer"));
class Italic extends AbstractInlineTokenizer_1.default {
    constructor(textSrc) {
        super(textSrc);
    }
    ;
    /**
     * Сleaning substring from formatting service characters
     */
    clearContent() {
        this._content = this._raw.replace(/^_|_$/g, '');
        return this._content;
    }
    ;
    /**
     * Rendering html elements
     */
    _toHtml() {
        return `<i class="slack-inline-italic">${this._content}</i>`;
    }
}
exports.default = Italic;
/**
 * RegExp for search current inline token
 */
Italic.searchQuery = '(?<Italic>_(.*?)_)';
