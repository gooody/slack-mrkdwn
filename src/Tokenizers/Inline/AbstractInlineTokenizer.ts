
export default abstract class AbstractInlineTokenizer
{
    protected _raw:string;
    protected _content:string;
    protected _tokens:AbstractInlineTokenizer[];

    static searchQuery:string;

    constructor(textSrc:string) {
        this._raw = textSrc;
        this._content = textSrc;
    };

    addTokens(tokens:AbstractInlineTokenizer[]) {
        this._tokens = tokens;
    };

    subcontentToHtml():string {
        let subcontentHtml = '';
        if (this._tokens && this._tokens.length) {
            let htmls = [];
            for (let i in this._tokens) {
                htmls.push(this._tokens[i].toHtml());
            }
            subcontentHtml = htmls.join('');
        }
        return subcontentHtml;
    };

    toHtml():string {
        if (this._tokens && this._tokens.length) {
            this._content = this.subcontentToHtml();
            this._tokens = [];
        }
        return this._toHtml();
    };


    /**
     * Сleaning substring from formatting service characters
     */
    abstract clearContent();

    /**
     * Rendering html elements
     */

    abstract _toHtml():string;
}
