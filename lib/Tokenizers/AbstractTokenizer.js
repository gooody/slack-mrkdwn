"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Inline_1 = __importDefault(require("./Inline"));
const inlineTagsSearch = Object.values(Inline_1.default).map(tag => tag.searchQuery).filter(sq => '' !== sq).join('|');
/**
 * Base functionality for search and processing full-row tokens
 */
class AbstractTokenizer {
    constructor(textSrc, lastToken = null) {
        this.ignore = false;
        this.consistsOfSeveralRows = false;
        this._textSrc = textSrc;
        this._lastToken = lastToken;
    }
    ;
    /**
     * Сhecking the fulfillment of the substring formatting conditions for the current token
     */
    check() {
        if (this.capture) {
            if (this.capture[0].length > 1) {
                this.prepare();
                if (this.consistsOfSeveralRows) {
                    if (this._lastToken && this.type === this._lastToken.type) {
                        this._lastToken.addItem(this.content);
                        this.ignore = true;
                    }
                    else {
                        this.addItem(this.content);
                    }
                }
            }
        }
        return !!this.capture;
    }
    ;
    /**
     * Getter for next substring
     */
    getNextSubstring() {
        return this._getNextSubstring(this._textSrc.substring(this.raw.length));
    }
    ;
    /**
     * Used for additional processing when searching for the next substring
     * @param txt
     * @protected
     */
    _getNextSubstring(txt) {
        return txt;
    }
    ;
    addItem(_item) {
        if (this.consistsOfSeveralRows && 'undefined' != typeof this.items) {
            this.tokens = this.parseInlineTokens(_item);
            this.items.push({
                content: _item,
                tokens: this.tokens
            });
        }
        return this;
    }
    ;
    /**
     * Used for render of composite elements consisting of several additional html sub-elements
     */
    itemsToHtml() {
        let items = this.items || [];
        let results = [];
        for (let i in items) {
            let item = items[i];
            for (let ii in item.tokens) {
                let token = item.tokens[ii];
                results.push(token.toHtml());
            }
        }
        return results;
    }
    ;
    /**
     * Search and processing inline tokens
     * @param str
     */
    parseInlineTokens(str) {
        let _tokens = new Array();
        let _str = str;
        let regRes = null;
        do {
            regRes = RegExp(inlineTagsSearch, 'g').exec(` ${_str} `);
            if (!regRes) {
                _tokens.push(new Inline_1.default.Text(_str));
            }
            else {
                let index = regRes.index - 1;
                if (regRes.index) {
                    let raw = _str.substring(0, index);
                    _tokens.push(new Inline_1.default.Text(raw));
                    _str = _str.substring(index);
                }
                for (let tagName in regRes.groups || []) {
                    let tag = regRes.groups[tagName];
                    if (!tag) {
                        continue;
                    }
                    tag = tag.replace(/^ | $/g, '');
                    let iTag = new Inline_1.default[tagName](tag);
                    iTag.addTokens(this.parseInlineTokens(iTag.clearContent()));
                    _tokens.push(iTag);
                    _str = _str.substring(tag.length);
                    break;
                }
            }
        } while (regRes);
        return _tokens;
    }
    ;
}
exports.default = AbstractTokenizer;
