import katexDoc from '../lib';

const assert = require('assert');

describe('katex-document', () => {
  it('should return the same string when $ and $$ are not present', () => {
    const test1 = `This is a string with no latex code.
    It should return the same`;
    assert.equal(test1, katexDoc(test1));
  });
  it('should return the same string with no dollars', () => {
    const test2 = `This is a string with an empty dollars $ $.
    It should return with empty math`;
    const test2R = `This is a string with an empty dollars <span class="katex"><span class="katex-html" aria-hidden="true"></span></span>.
    It should return with empty math`;
    assert.equal(test2R, katexDoc(test2, { output: 'html' }));
  });
});
