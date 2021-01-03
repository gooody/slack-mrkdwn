
import AbstractInlineTokenizer from './AbstractInlineTokenizer';

export default class Text extends AbstractInlineTokenizer
{
    /**
     * RegExp for search current inline token
     */
    static searchQuery = '';

    constructor(textSrc:string) {
        super(textSrc);
    };

    /**
     * Сleaning substring from formatting service characters
     */
    clearContent(){
        return this._content;
    };

    /**
     * Rendering html elements
     */
    _toHtml():string {
        if ('' === this._content.replace(/\s/g, '')) {
            return '';
        }
        return `<span class="slack-inline-text">${ this._content }</span>`;
    }
}