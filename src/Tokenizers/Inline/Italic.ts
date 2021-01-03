
import AbstractInlineTokenizer from './AbstractInlineTokenizer';

export default class Italic extends AbstractInlineTokenizer
{
    /**
     * RegExp for search current inline token
     */
    static searchQuery = '(?<Italic>_(.*?)_)';

    constructor(textSrc:string) {
        super(textSrc);
    };

    /**
     * Сleaning substring from formatting service characters
     */
    clearContent(){
        this._content = this._raw.replace( /^_|_$/g, '');
        return this._content;
    };

    /**
     * Rendering html elements
     */
    _toHtml():string {
        return `<i class="slack-inline-italic">${ this._content }</i>`;
    }
}