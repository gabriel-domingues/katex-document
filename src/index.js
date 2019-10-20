import katex from 'katex';

import { mathLatex, blockLatex } from './regex';

const katexDoc = (string, options = {}) =>
  string.replace(mathLatex, str =>
    katex.renderToString(str[0] === '$' && str[1] !== '$' ? str.slice(1, -1) : str.slice(2, -2), {
      ...options,
      displayMode: blockLatex.test(str),
      throwOnError: false
    })
  );

export default katexDoc;
