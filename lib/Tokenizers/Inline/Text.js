"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractInlineTokenizer_1 = __importDefault(require("./AbstractInlineTokenizer"));
class Text extends AbstractInlineTokenizer_1.default {
    constructor(textSrc) {
        super(textSrc);
    }
    ;
    /**
     * Сleaning substring from formatting service characters
     */
    clearContent() {
        return this._content;
    }
    ;
    /**
     * Rendering html elements
     */
    _toHtml() {
        if ('' === this._content.replace(/\s/g, '')) {
            return '';
        }
        return `<span class="slack-inline-text">${this._content}</span>`;
    }
}
/**
 * RegExp for search current inline token
 */
Text.searchQuery = '';
exports.default = Text;
