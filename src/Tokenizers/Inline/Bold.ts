
import AbstractInlineTokenizer from './AbstractInlineTokenizer';

export default class Bold extends AbstractInlineTokenizer
{
    /**
     * RegExp for search current inline token
     */
    static searchQuery = '(?<Bold>\\*(.*?)\\*)';

    constructor(textSrc:string) {
        super(textSrc);
    };

    /**
     * Сleaning substring from formatting service characters
     */
    clearContent(){
        this._content = this._raw.replace( /^\*|\*$/g, '');
        return this._content;
    };

    /**
     * Rendering html elements
     */
    _toHtml():string {
        return `<strong class="slack-inline-bold">${ this._content }</strong>`;
    }
}