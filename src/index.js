import katex from 'katex';

import { inlineLatex, blockLatex } from './regex';

const katexDoc = string =>
  string
    .replace(inlineLatex, str => katex.renderToString(str, { displayMode: false }))
    .replace(blockLatex, str => katex.renderToString(str, { displayMode: true }));

if (module && module.exports) {
  module.exports = katexDoc;
}
