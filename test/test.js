import katexDoc from '../lib';

const assert = require('assert');

describe('katex-document', () => {
  it('should return the same string when $ and $$ are not present', () => {
    const test1 = `This is a string with no latex code.
    It should return the same`;
    assert.equal(test1, katexDoc(test1));
  });
});
