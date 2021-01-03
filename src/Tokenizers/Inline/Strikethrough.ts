
import AbstractInlineTokenizer from './AbstractInlineTokenizer';

export default class Strikethrough extends AbstractInlineTokenizer
{
    /**
     * RegExp for search current inline token
     */
    static searchQuery = '(?<Strikethrough>~(.*?)~)';

    constructor(textSrc:string) {
        super(textSrc);
    };

    /**
     * Сleaning substring from formatting service characters
     */
    clearContent(){
        this._content = this._raw.replace( /^~|~$/g, '');
        return this._content;
    };

    /**
     * Rendering html elements
     */
    _toHtml():string {
        return `<s class="slack-inline-strikethrough">${ this._content }</s>`;
    }
}