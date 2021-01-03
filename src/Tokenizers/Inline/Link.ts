
import AbstractInlineTokenizer from './AbstractInlineTokenizer';

export default class Link extends AbstractInlineTokenizer
{
    private _params = [];
    /**
     * RegExp for search current inline token
     */
    static searchQuery = "(?<Link>\\<(.*?)\\>)";

    constructor(textSrc:string) {
        super(textSrc);
    };

    /**
     * Сleaning substring from formatting service characters
     */
    clearContent(){
        this._content = this._raw.replace( /^\<|\>$/g, '');
        this._params = this._content.split('|');
        if (this._params[1]) {
            this._content = this._params[1];
        }
        return this._content;
    };

    /**
     * Rendering html elements
     */
    toHtml():string {
        let content = this.subcontentToHtml() || this._params[0];
        return `<a class="slack-inline-link" href="${this._params[0]}" >${content}</a>`;
    }

    _toHtml():string {
        return ``;
    }
}