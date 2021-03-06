"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractTokenizer_1 = __importDefault(require("./AbstractTokenizer"));
class Paragraph extends AbstractTokenizer_1.default {
    constructor(textSrc, lastToken) {
        super(textSrc, lastToken);
        this.type = "paragraph";
        this.raw = '';
        this.content = '';
        this.capture = /(.*?)\n/g.exec(textSrc);
    }
    ;
    /**
     * Prepare current substrings
     */
    prepare(text) {
        this.raw = text ? text : this.capture[0];
        this.content = (text ? text : this.capture[0]).replace(/\n$/g, '');
        this.tokens = this.parseInlineTokens(this.content);
    }
    ;
    /**
     * Rendering html elements
     */
    toHtml() {
        return `<p class="slack-block-paragraph">${this.tokens.map(token => token.toHtml()).join('')}</p>`;
    }
    ;
}
exports.default = Paragraph;
