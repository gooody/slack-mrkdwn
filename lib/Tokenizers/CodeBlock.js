"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractTokenizer_1 = __importDefault(require("./AbstractTokenizer"));
class CodeBlock extends AbstractTokenizer_1.default {
    constructor(textSrc, lastToken) {
        super(textSrc, lastToken);
        this.type = "codeBlock";
        this.raw = '';
        this.content = '';
        this.capture = /^(?<!\\)\`{3}(.*?)(?<!\\)\`{3}/sg.exec(textSrc);
    }
    ;
    /**
     * Prepare current substrings
     */
    prepare() {
        this.raw = this.capture[0];
        this.content = this.capture[0].replace(/^`+|`+$/g, '');
    }
    ;
    /**
     * Rendering html elements
     */
    toHtml() {
        return `<pre class="slack-block-code">${this.content}</pre>`;
    }
    ;
    _getNextSubstring(txt) {
        return txt.replace(/^\n/g, '');
    }
    ;
}
exports.default = CodeBlock;
