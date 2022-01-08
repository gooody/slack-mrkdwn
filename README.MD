
Convert Slack's mrkdwn format to HTML.

## Installation
```sh
$ npm install slack-mrkdwn
```

## Importing

```javascript
// Using Node.js `require()`
const SlackMarkdownConverter = require('slack-mrkdwn').SlackMarkdownConverter;

// Using ES6 imports
import {SlackMarkdownConverter} from 'slack-mrkdwn';
```

## Usage
```js
const SlackMarkdownConverter = require('slack-mrkdwn').SlackMarkdownConverter;

const text = 'hello world,\n' 
+'long *long ~simple~ _random_* text\n'
+'```\n'
+'code\n'
+'```\n'
+'and `e.t.c.`\n';

const html = new SlackMarkdownConverter(text).toHtml();
console.log(html)

```

**Result:**
```html
<div class="slack-markdown"><p class="slack-block-paragraph"><span class="slack-inline-text">Hello world,</span></p><p class="slack-block-paragraph"><span class="slack-inline-text">long </span><strong class="slack-inline-bold"><span class="slack-inline-text">long </span><s class="slack-inline-strikethrough"><span class="slack-inline-text">simple</span></s><i class="slack-inline-italic"><span class="slack-inline-text">random</span></i></strong><span class="slack-inline-text"> text</span></p><pre class="slack-block-code">
code
</pre><p class="slack-block-paragraph"><span class="slack-inline-text">and </span><code class="slack-inline-code"><span class="slack-inline-text">e.t.c.</span></code></p></div>
```

**Possible css:**
```css

.slack-markdown p {
    margin-bottom: 0px;
}
.slack-markdown .slack-block-code  {
    margin-top: 4px;
    margin-bottom: 4px;
    padding: 8px;
    border: 1px solid var(--saf-0);
    border-radius: 4px;
    background: rgba(var(--sk_foreground_min,29,28,29),.04);
    --saf-0: rgba(var(--sk_foreground_low,29,28,29),0.13);
    font-family: Monaco,Menlo,Consolas,Courier New,monospace!important;
    font-size: 12px;
    line-height: 1.50001;
    font-variant-ligatures: none;
    white-space: pre-wrap;
    word-wrap: break-word;
    word-break: normal;
    tab-size: 4;
}


.slack-markdown .slack-block-blockquote  {
    display: flex;
}
.slack-markdown .slack-block-blockquote:before  {
    margin-right: 10px;
    top: 0;
    bottom: 0;
    left: 0;
    display: block;
    width: 4px;
    border-radius: 8px;
    background: rgba(var(--sk_foreground_low_solid,221,221,221),1);
    content: "";
}
```


**CSS selectors available:**
- `.slack-markdown`
- `.slack-markdown .slack-block-paragraph`
- `.slack-markdown p.slack-block-paragraph`
- `.slack-markdown .slack-block-ordered-list`
- `.slack-markdown ol.slack-block-ordered-list`
- `.slack-markdown .slack-block-bulleted-list`
- `.slack-markdown ul.slack-block-bulleted-list`
- `.slack-markdown .slack-block-code`
- `.slack-markdown pre.slack-block-code`
- `.slack-markdown .slack-block-blockquote`
- `.slack-markdown blockquote.slack-block-blockquote`
- `.slack-markdown .slack-inline-text`
- `.slack-markdown span.slack-inline-text`
- `.slack-markdown .slack-inline-strikethrough`
- `.slack-markdown s.slack-inline-strikethrough`
- `.slack-markdown .slack-inline-link`
- `.slack-markdown a.slack-inline-link`
- `.slack-markdown .slack-inline-italic`
- `.slack-markdown i.slack-inline-italic`
- `.slack-markdown .slack-inline-code`
- `.slack-markdown code.slack-inline-code`
- `.slack-markdown .slack-inline-bold`
- `.slack-markdown strong.slack-inline-bold`
- `.slack-markdown .slack-linebreak`
- `.slack-markdown br.slack-linebreak`

