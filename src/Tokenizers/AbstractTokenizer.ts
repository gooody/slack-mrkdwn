
import {ItemInterfaces} from '../Interfaces';
import inlineTags from './Inline';
import AbstractInlineTokenizer from './Inline/AbstractInlineTokenizer';
const inlineTagsSearch = Object.values(inlineTags).map(tag=>tag.searchQuery ).filter(sq=>''!==sq).join('|');

/**
 * Base functionality for search and processing full-row tokens
 */
export default abstract class AbstractTokenizer
{
    public ignore:boolean = false;
    protected abstract type:string;
    protected abstract raw:string;
    protected abstract content:string;
    protected capture:RegExpExecArray;
    protected items:ItemInterfaces[];
    protected tokens:AbstractInlineTokenizer[];
    protected consistsOfSeveralRows:boolean = false;
    private _textSrc:string;
    private _lastToken:AbstractTokenizer;

    constructor(textSrc:string, lastToken:AbstractTokenizer=null) {
        this._textSrc = textSrc;
        this._lastToken = lastToken;
    };

    /**
     * Сhecking the fulfillment of the substring formatting conditions for the current token
     */
    check():boolean {
        if (this.capture) {
            if (this.capture[0].length > 1) {
                this.prepare();
                if (this.consistsOfSeveralRows) {
                    if (this._lastToken && this.type === this._lastToken.type) {
                        this._lastToken.addItem(this.content);
                        this.ignore = true;
                    } else {
                        this.addItem(this.content);
                    }
                }
            }
        }
        return !!this.capture;
    };

    /**
     * Getter for next substring
     */
    getNextSubstring():string {
        return this._getNextSubstring(this._textSrc.substring(this.raw.length));
    };

    /**
     * Used for additional processing when searching for the next substring
     * @param txt
     * @protected
     */
    protected _getNextSubstring(txt):string {
        return txt;
    };

    addItem(_item:string) {
        if ( this.consistsOfSeveralRows && 'undefined' != typeof this.items) {
            this.tokens = this.parseInlineTokens(_item)
            this.items.push({
                content: _item,
                tokens:this.tokens
            });
        }
        return this;
    };

    /**
     * Used for render of composite elements consisting of several additional html sub-elements
     */
    itemsToHtml():string[] {
        let items = this.items || [];
        let results = [];
        for (let i in items) {
            let item = items[i];
            let resultTkns = [];
            for (let ii in item.tokens) {
                let token = item.tokens[ii];
                resultTkns.push(token.toHtml());
            }
            results.push(resultTkns.join(''));
        }
        return results;
    };

    /**
     * Search and processing inline tokens
     * @param str
     */
    parseInlineTokens(str:string):AbstractInlineTokenizer[] {
        let _tokens = new Array<AbstractInlineTokenizer>();
        let _str = str;
        let regRes = null;

        do {
            regRes = RegExp(inlineTagsSearch, 'g').exec( ` ${_str} ` );
            if (!regRes) {
                _tokens.push(new inlineTags.Text(_str));
            } else {
                let index =  regRes.index-1;
                if (regRes.index) {
                    let raw = _str.substring(0, index);
                    _tokens.push(new inlineTags.Text(raw));
                    _str = _str.substring(index);
                }
                for (let tagName in regRes.groups||[]) {
                    let tag = regRes.groups[tagName];
                    if (!tag) {
                        continue;
                    }
                    tag = tag.replace(/^ | $/g, '');
                    let iTag = new inlineTags[tagName](tag);
                    iTag.addTokens(this.parseInlineTokens(iTag.clearContent()));
                    _tokens.push(iTag);
                    _str = _str.substring(tag.length);
                    break;
                }
            }
        } while(regRes)
        return _tokens;
    };

    /**
     * Prepare current substrings
     */
    public abstract prepare(text?:string);

    /**
     * Rendering html elements
     */
    public abstract toHtml():string;
}