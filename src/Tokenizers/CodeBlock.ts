
import AbstractTokenizer from './AbstractTokenizer';

export default class CodeBlock extends AbstractTokenizer
{
    protected type = "codeBlock";
    protected raw = '';
    protected content = '';

    constructor(textSrc:string, lastToken:AbstractTokenizer) {
        super(textSrc, lastToken);
        this.capture = /^(?<!\\)\`{3}(.*?)(?<!\\)\`{3}/sg.exec(textSrc);
    };

    /**
     * Prepare current substrings
     */
    prepare(){
        this.raw = this.capture[0];
        this.content = this.capture[0].replace(/^`+|`+$/g, '');
    };

    /**
     * Rendering html elements
     */
    toHtml(){
        return `<pre class="slack-block-code">${ this.content }</pre>`;
    };

    protected _getNextSubstring(txt) {
        return txt.replace(/^\n/g, '');
    };
}

