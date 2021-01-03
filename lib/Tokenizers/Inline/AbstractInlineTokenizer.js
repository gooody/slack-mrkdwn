"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractInlineTokenizer {
    constructor(textSrc) {
        this._raw = textSrc;
        this._content = textSrc;
    }
    ;
    addTokens(tokens) {
        this._tokens = tokens;
    }
    ;
    subcontentToHtml() {
        let subcontentHtml = '';
        if (this._tokens && this._tokens.length) {
            let htmls = [];
            for (let i in this._tokens) {
                htmls.push(this._tokens[i].toHtml());
            }
            subcontentHtml = htmls.join('');
        }
        return subcontentHtml;
    }
    ;
    toHtml() {
        if (this._tokens && this._tokens.length) {
            this._content = this.subcontentToHtml();
            this._tokens = [];
        }
        return this._toHtml();
    }
    ;
}
exports.default = AbstractInlineTokenizer;
