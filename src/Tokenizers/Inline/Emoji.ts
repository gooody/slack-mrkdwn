
import AbstractInlineTokenizer from './AbstractInlineTokenizer';

export default class Emoji extends AbstractInlineTokenizer
{
    /**
     * RegExp for search current inline token
     */
    static searchQuery = '(?<Emoji>:[a-zA-Z0-9+_-]+:)';

    constructor(textSrc:string) {
        super(textSrc);
    };

    /**
     * Сleaning substring from formatting service characters
     */
    clearContent(){
        this._content = this._raw.replace( /^:|:$/g, '');
        return this._content;
    };

    /**
     * Rendering html elements
     */
    _toHtml():string {
        return `<span class="slack-block-smile" smile="${this._content}"></span>`;
    }
}