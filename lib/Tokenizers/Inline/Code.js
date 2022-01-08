"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractInlineTokenizer_1 = __importDefault(require("./AbstractInlineTokenizer"));
class Code extends AbstractInlineTokenizer_1.default {
    constructor(textSrc) {
        super(textSrc);
    }
    ;
    /**
     * Сleaning substring from formatting service characters
     */
    clearContent() {
        this._content = this._raw.replace(/^\`|\`$/g, '');
        return this._content;
    }
    ;
    /**
     * Rendering html elements
     */
    _toHtml() {
        return `<code class="slack-inline-code">${this._content}</code>`;
    }
}
exports.default = Code;
/**
 * RegExp for search current inline token
 */
Code.searchQuery = '(?<Code>\\`(.*?)\\`)';
