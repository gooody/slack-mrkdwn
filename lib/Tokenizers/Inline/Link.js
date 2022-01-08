"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractInlineTokenizer_1 = __importDefault(require("./AbstractInlineTokenizer"));
class Link extends AbstractInlineTokenizer_1.default {
    constructor(textSrc) {
        super(textSrc);
        this._params = [];
    }
    ;
    /**
     * Сleaning substring from formatting service characters
     */
    clearContent() {
        this._content = this._raw.replace(/^\<|\>$/g, '');
        this._params = this._content.split('|');
        if (this._params[1]) {
            this._content = this._params[1];
        }
        return this._content;
    }
    ;
    /**
     * Rendering html elements
     */
    toHtml() {
        let content = this.subcontentToHtml() || this._params[0];
        return `<a class="slack-inline-link" href="${this._params[0]}" >${content}</a>`;
    }
    _toHtml() {
        return ``;
    }
}
exports.default = Link;
/**
 * RegExp for search current inline token
 */
Link.searchQuery = "(?<Link>\\<(.*?)\\>)";
