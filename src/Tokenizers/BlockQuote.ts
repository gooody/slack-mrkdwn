
import AbstractTokenizer from './AbstractTokenizer';

export default class BlockQuote extends AbstractTokenizer
{
    protected type = "blockQuote";
    protected raw = '';
    protected content = '';

    constructor(textSrc:string, lastToken:AbstractTokenizer) {
        super(textSrc, lastToken);
        this.capture = /^> (.*?)\n/g.exec(textSrc);
    };

    /**
     * Prepare current substrings
     */
    prepare(){
        this.raw = this.capture[0];
        this.content = this.capture[0].replace(/^> |\n$/g, '');
        this.tokens = this.parseInlineTokens(this.content);
    };

    /**
     * Rendering html elements
     */
    toHtml(){
        return `<blockquote class="slack-block-blockquote"><p>${ this.tokens.map(token => token.toHtml()).join('') }</p></blockquote>`;
    };
}

