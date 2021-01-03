
import AbstractTokenizer from './AbstractTokenizer';

export default class BulletedList extends AbstractTokenizer
{
    protected type = "bulletedList";
    protected raw = '';
    protected content = '';
    protected items = [];
    protected consistsOfSeveralRows = true;

    constructor(textSrc:string, lastToken:AbstractTokenizer) {
        super(textSrc, lastToken);
        this.capture = /^- (.*?)\n/g.exec(textSrc);
    };

    /**
     * Prepare current substrings
     */
    prepare(){
        this.raw = this.capture[0];
        this.content = this.capture[0].replace(/^- |\n$/g, '');
    };

    /**
     * Rendering html elements
     */
    toHtml(){
        let itemsHtmls = this.itemsToHtml().map(item => `<li>${item}</li>`);
        return `<ul class="slack-block-bulleted-list">${ itemsHtmls.join('') }</ul>`;
    };
}

