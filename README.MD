
Convert Slack's mrkdwn format to HTML.

##Installation
```sh
$ npm install slack-mrkdwn
```

## Importing

```javascript
// Using Node.js `require()`
const SlackMrkdwnConverter = require('slack-mrkdwn').SlackMrkdwnConverter;

// Using ES6 imports
import {SlackMrkdwnConverter} from 'slack-mrkdwn';
```

## Usage
```js
const SlackMrkdwnConverter = require('slack-mrkdwn').SlackMrkdwnConverter;

const text = 'hello world,\n' 
+'long *long ~simple~ _random_* text\n'
+'```\n'
+'code\n'
+'```\n'
+'and \`e.t.c.\`\n';

const html = new SlackMrkdwnConverter(text).toHtml();
console.log(html)

```

**Result:**
```html
<div class="slack-markdown"><p class="slack-block-paragraph"><span class="slack-inline-text">Hello world,</span></p><p class="slack-block-paragraph"><span class="slack-inline-text">long </span><strong class="slack-inline-bold"><span class="slack-inline-text">long </span><s class="slack-inline-strikethrough"><span class="slack-inline-text">simple</span></s><i class="slack-inline-italic"><span class="slack-inline-text">random</span></i></strong><span class="slack-inline-text"> text</span></p><pre class="slack-block-code">
code
</pre><p class="slack-block-paragraph"><span class="slack-inline-text">and </span><code class="slack-inline-code"><span class="slack-inline-text">e.t.c.</span></code></p></div>
```






