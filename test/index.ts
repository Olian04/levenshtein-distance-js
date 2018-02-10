import { expect } from 'chai';

import { levenshteinDistance } from '../app/index';

describe('GUMBO GAMBOL' ,() => {
    it('should have a distance of 2', () => {
        expect(levenshteinDistance('GUMBO', 'GAMBOL')).to.equal(2);
    });
});

describe('two empty strings' ,() => {
    it('should have a distance of 0', () => {
        expect(levenshteinDistance('', '')).to.equal(0);
    });
});

describe('two equal strings' ,() => {
    it('should have a distance of 0', () => {
        expect(levenshteinDistance('foo', 'foo')).to.equal(0);
    });
});

