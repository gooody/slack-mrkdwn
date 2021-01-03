"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractTokenizer_1 = __importDefault(require("./AbstractTokenizer"));
class BulletedList extends AbstractTokenizer_1.default {
    constructor(textSrc, lastToken) {
        super(textSrc, lastToken);
        this.type = "bulletedList";
        this.raw = '';
        this.content = '';
        this.items = [];
        this.consistsOfSeveralRows = true;
        this.capture = /^- (.*?)\n/g.exec(textSrc);
    }
    ;
    /**
     * Prepare current substrings
     */
    prepare() {
        this.raw = this.capture[0];
        this.content = this.capture[0].replace(/^- |\n$/g, '');
    }
    ;
    /**
     * Rendering html elements
     */
    toHtml() {
        let itemsHtmls = this.itemsToHtml().map(item => `<li>${item}</li>`);
        return `<ul class="slack-block-bulleted-list">${itemsHtmls.join('')}</ul>`;
    }
    ;
}
exports.default = BulletedList;
