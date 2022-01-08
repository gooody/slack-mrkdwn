"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlackMarkdownConverter = void 0;
const Tokenizers_1 = __importDefault(require("./Tokenizers"));
/**
 * Converter for texts from slack mrkdwn format to html
 * @param string src - incoming string in the slack mrkdwn format
 */
class SlackMarkdownConverter {
    constructor(src) {
        /**
         * The list of full-row tokens
         * @private
         */
        this._tokens = [];
        //clear src
        src = src
            .replace(/\r\n|\r/g, '\n')
            .replace(/\t/g, '    ')
            .replace(/^ +$/gm, '')
            .replace(/(?<!\n)```(^\n)/gm, "\n```\n")
            .replace(/(?<!\n)```/gm, "\n```")
            .replace(/```(^\n)/gm, "```\n");
        src = `${src}\n`;
        while (src) {
            let itSrc = src;
            for (let i in Tokenizers_1.default) {
                let tokenizer = Tokenizers_1.default[i];
                let _tokenizer = new tokenizer(src, this._lastToken);
                if (_tokenizer.check()) {
                    if (!_tokenizer.ignore) {
                        this._tokens.push(_tokenizer);
                        this._lastToken = _tokenizer;
                    }
                    src = _tokenizer.getNextSubstring();
                    break;
                }
            }
            if (itSrc === src) {
                let _tokenizer = new Tokenizers_1.default.Paragraph(src, this._lastToken);
                _tokenizer.prepare(src);
                this._tokens.push(_tokenizer);
                src = _tokenizer.getNextSubstring();
            }
        }
    }
    /**
     * Render html elements
     */
    _toHtml() {
        let htmls = [];
        for (let i in this._tokens) {
            let token = this._tokens[i];
            htmls.push(token.toHtml());
        }
        return htmls.join('');
    }
    /**
     * Render html elements into a shared container(div) with a class 'slack-markdown'
     */
    toHtml() {
        return `<div class="slack-markdown">${this._toHtml()}</div>`;
    }
    /**
     * Render html elements w/o shared container
     */
    innerHtml() {
        return this._toHtml();
    }
}
exports.SlackMarkdownConverter = SlackMarkdownConverter;
