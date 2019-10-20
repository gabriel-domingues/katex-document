# katex-document

A useful JS application to render you .tex documents in the browser with beautiful [Katex](https://github.com/Khan/KaTeX) styling

Install

```
$ npm install --save katex-document
```

For React, to add the string response to a span/div:

```
<span
  dangerouslySetInnerHTML={{ __html: katexDoc(string) }}
/>
```

Don't forget to put:

```
import "katex/dist/katex.min.css";
```

Or import from a CDN.
