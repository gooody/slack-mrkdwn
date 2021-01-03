
import AbstractTokenizer from './AbstractTokenizer';

export default class OrderedList extends AbstractTokenizer
{
    protected type = "orderedList";
    protected raw = '';
    protected content = '';
    protected items = [];
    protected consistsOfSeveralRows = true;

    constructor(textSrc:string, lastToken:AbstractTokenizer) {
        super(textSrc, lastToken);
        this.capture = /^\d{1,}\. (.*?)\n/g.exec(textSrc);
    };

    /**
     * Prepare current substrings
     */
    prepare(){
        this.raw = this.capture[0];
        this.content = this.capture[0].replace(/^\d{1,}\. |\n$/g, '');
    };

    /**
     * Rendering html elements
     */
    toHtml(){
        let itemsHtmls = this.itemsToHtml().map(item => `<li>${item}</li>`);
        return `<ol class="slack-block-ordered-list">${ itemsHtmls.join('') }</ol>`;
    };
}

