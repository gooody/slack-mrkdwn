
import AbstractTokenizer from './AbstractTokenizer';

export default class Paragraph extends AbstractTokenizer
{
    protected type = "paragraph";
    protected raw = '';
    protected content = '';

    constructor(textSrc:string, lastToken:AbstractTokenizer) {
        super(textSrc, lastToken);
        this.capture = /(.*?)\n/g.exec(textSrc);
    };

    /**
     * Prepare current substrings
     */
    prepare(text){
        this.raw = text ? text : this.capture[0];
        this.content = (text ? text : this.capture[0]).replace(/\n$/g, '');
        this.tokens = this.parseInlineTokens(this.content);
    };

    /**
     * Rendering html elements
     */
    toHtml(){
        return `<p class="slack-block-paragraph">${ this.tokens.map(token => token.toHtml()).join('') }</p>`;
    };
}

