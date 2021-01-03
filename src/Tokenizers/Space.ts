
import AbstractTokenizer from './AbstractTokenizer';

export default class Space extends AbstractTokenizer
{
    protected type = "space";
    protected raw = '\n';
    protected content = '\n';

    constructor(textSrc:string, lastToken:AbstractTokenizer) {
        super(textSrc, lastToken);
        this.capture = /^\n+/.exec(textSrc);
    };

    /**
     * Prepare current substrings
     */
    prepare(){
        this.raw = this.capture[0];
        this.content = this.capture[0];
    };

    /**
     * Rendering html elements
     */
    toHtml(){
        return this.content.replace(/\n/g, "<br />");
    };
}