
import AbstractInlineTokenizer from './AbstractInlineTokenizer';

export default class Code extends AbstractInlineTokenizer
{
    /**
     * RegExp for search current inline token
     */
    static searchQuery = '(?<Code>\\`(.*?)\\`)';

    constructor(textSrc:string) {
        super(textSrc);
    };

    /**
     * Сleaning substring from formatting service characters
     */
    clearContent(){
        this._content = this._raw.replace( /^\`|\`$/g, '');
        return this._content;
    };

    /**
     * Rendering html elements
     */
    _toHtml():string {
        return `<code class="slack-inline-code">${ this._content }</code>`;
    }
}