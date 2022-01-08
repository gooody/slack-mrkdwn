"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractTokenizer_1 = __importDefault(require("./AbstractTokenizer"));
class Space extends AbstractTokenizer_1.default {
    constructor(textSrc, lastToken) {
        super(textSrc, lastToken);
        this.type = "space";
        this.raw = '\n';
        this.content = '\n';
        this.capture = /^\n+/.exec(textSrc);
    }
    ;
    /**
     * Prepare current substrings
     */
    prepare() {
        this.raw = this.capture[0];
        this.content = this.capture[0];
    }
    ;
    /**
     * Rendering html elements
     */
    toHtml() {
        return this.content.replace(/\n/g, `<span class="slack-linebreak"><br></span>`);
    }
    ;
}
exports.default = Space;
