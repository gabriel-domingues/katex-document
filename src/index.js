import katex from 'katex';

const katexDoc = string => {
  katex.renderToString(string);
};

if (module && module.exports) {
  module.exports = katexDoc;
}
